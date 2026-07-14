import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PostList } from './post-list/post-list';
import { PostDetail } from './post-detail/post-detail';

export const routes: Routes = [
    // Default
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 

    // Home
    { path: 'home', component: Home },
    
    // List Post
    { path: 'posts', component: PostList },
    
    // Post dengan ID
    { path: 'posts/:id', component: PostDetail },
    
    // Page Not Found (Opsional jika rute tidak ditemukan)
    { path: '**', redirectTo: 'home' } 
];
