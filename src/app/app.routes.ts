import { UserManagementComponent } from './components/user-management/user-management.component';
import { ReportsComponent } from './components/reports/reports.component';
import { BonusManagementComponent } from './components/bonus-management/bonus-management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { Routes } from '@angular/router';
import { SignupComponent } from './components/sign_up/sign.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'navBar', component: NavbarComponent },

    { path: 'login', component: LoginComponent },
    { path: 'sign', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bonus-management', component: BonusManagementComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'user-management', component: UserManagementComponent },
  ];

