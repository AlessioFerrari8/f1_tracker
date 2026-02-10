import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Calendar } from './pages/calendar/calendar';
import { Drivers } from './pages/drivers/drivers';
import { Race } from './pages/race/race';
import { Standings } from './pages/standings/standings';
import { Teams } from './pages/teams/teams';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'calendar', component: Calendar },
  { path: 'drivers', component: Drivers },
  { path: 'race', component: Race },
  { path: 'standings', component: Standings },
  { path: 'teams', component: Teams },
  { path: '**', redirectTo: 'home' }
];
