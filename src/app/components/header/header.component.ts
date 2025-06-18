import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  currentTheme$: Observable<string>;
  themeAriaLabel$: Observable<string>;

  constructor(private themeService: ThemeService) {
    this.currentTheme$ = this.themeService.theme$;
    this.themeAriaLabel$ = this.currentTheme$.pipe(
      map((theme) =>
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      )
    );
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
