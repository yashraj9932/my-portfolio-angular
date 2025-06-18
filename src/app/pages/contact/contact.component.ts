import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  personalDetails = {
    name: "Yash Raj Goel",
    email: "yashrajgoel9@gmail.com",
    location: "Noida, UP, IND",
    availability: "Open To Discussions"
  };

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yashraj9932', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yashrajgoel', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yashrajgoel', icon: 'twitter' }
  ];

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for your message! I will get back to you soon.');
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
} 