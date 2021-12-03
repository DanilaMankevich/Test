import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AddCompetitionContainerComponent } from './components/pages/form-controllers/form-competition-controller/add-competition-container.component';
import { AddSeasonContainerComponent } from './components/pages/form-controllers/form-season-controller/add-season-container.component';
import { AddMatchContainerComponent } from './components/pages/form-controllers/form-match-controller/add-match-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/competition', component: AddCompetitionContainerComponent },
  { path: 'admin/season', component: AddSeasonContainerComponent },
  { path: 'admin/match', component: AddMatchContainerComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
