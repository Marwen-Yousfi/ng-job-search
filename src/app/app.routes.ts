import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'jobs',
        loadComponent: () => import('./pages/job-list-page/job-list-page.component').then((m) => m.JobListPageComponent)
    },
    {
        path: 'favorites',
        loadComponent: () => import('./pages/favorites-jobs-page/favorites-jobs-page.component').then((m) => m.FavoritesJobsPageComponent)
    },
    {
        path: 'jobs/:jobId',
        loadComponent: () => import('./pages/job-details-page/job-details-page.component').then((m) => m.JobDetailsPageComponent)
    },
    {
        path: '**',
        redirectTo: 'jobs',
    },
];
