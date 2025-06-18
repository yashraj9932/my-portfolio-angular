import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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

  downloadResume() {
    // Check if resume file exists
    const resumePath = 'assets/YashRajGoel_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'YashRajGoel_Resume.pdf';
    
    // Try to download, if it fails, show a message
    link.onerror = () => {
      alert('Resume file not found. Please contact me directly for my resume.');
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
} 