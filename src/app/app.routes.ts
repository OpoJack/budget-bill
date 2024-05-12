import type { Routes } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AuthComponent } from './components/auth/auth.component'
import { SettingsComponent } from './components/settings/settings.component'

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'auth', component: AuthComponent},
]
