import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LibrarianDashboardComponent } from './components/librarian-dashboard/librarian-dashboard.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'librarian',
    component: LibrarianDashboardComponent,
  },
  {
    path:'**', redirectTo:'login'
  }
];
