import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'poems', loadComponent: () => import('./pages/poems/poems.component').then(m => m.PoemsComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
]; 