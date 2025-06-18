import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  personalDetails = {
    name: "Yash Raj Goel",
    location: "Noida, UP, IND",
    tagline: "Software Development Engineer | Full Stack Developer",
    email: "yashrajgoel9@gmail.com",
    availability: "Open To Discussions",
    brand: "Being very crisp, I'd say I have quite a unique blend of technical expertise, creative thinking, and the deep rooted interests of mine in a variety of subjects allow me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products through which I think of a very effective process"
  };

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yashraj9932', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yashrajgoel', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yashrajgoel', icon: 'twitter' }
  ];
} 