import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AddMatchComponent } from './form/add-match/add-match.component';
import { AddCompetitionComponent } from './form/add-competition/add-competition.component';
import { AddSeasonComponent } from './form/add-season/add-season.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/competition', component: AddCompetitionComponent },
  { path: 'admin/season', component: AddSeasonComponent },
  { path: 'admin/match', component: AddMatchComponent },
  { path: '**', component: HomeComponent },
];
//hello

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
