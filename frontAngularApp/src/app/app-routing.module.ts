import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCompetitionContainerComponent } from './forms/form-competition-controller/add-competition-container.component';
import { AddSeasonContainerComponent } from './forms/form-season-controller/add-season-container.component';
import { AddMatchContainerComponent } from './forms/form-match-controller/add-match-container.component';

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
