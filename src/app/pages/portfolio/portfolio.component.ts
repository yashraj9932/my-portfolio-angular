import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS_DATA } from '../../data/projects.data';
import { EXPERIENCE_DATA } from '../../data/experience.data';
import { Project, Experience } from '../../models/project.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = PROJECTS_DATA;
  experience: Experience[] = EXPERIENCE_DATA;
  activeTab: 'projects' | 'experience' = 'projects';

  setActiveTab(tab: 'projects' | 'experience') {
    this.activeTab = tab;
  }

  openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
} 