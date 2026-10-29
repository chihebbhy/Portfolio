import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

// Each route says: "when the URL is /path, show this component inside <router-outlet>"
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, // empty URL -> go to /home
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'skills', component: Skills},
    {path: 'projects', component: Projects},
    {path: 'contact', component: Contact},
    {path: '**', component: NotFound}, // any other URL (must stay last)
];
