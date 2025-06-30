import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'home', component: Home },
    { path: 'about', component: About },
    {path:'feature',loadComponent:()=>import('./feature/feature').then(m => m.Feature)}
    //! Lazy Loading - Lazy loading in Angular is a technique to load feature modules only when they’re needed — reducing initial bundle size and improving load time.
];
