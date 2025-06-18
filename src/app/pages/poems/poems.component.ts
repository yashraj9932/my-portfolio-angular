import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POEMS_DATA } from '../../data/poems.data';
import { Poem } from '../../models/project.model';

@Component({
  selector: 'app-poems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent {
  poems: Poem[] = POEMS_DATA;
} 