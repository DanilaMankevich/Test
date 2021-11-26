import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AddMatchComponent } from './forms/add-match-form/add-match.component';
import { AddCompetitionComponent } from './forms/add-competition-form/add-competition.component';
import { AddSeasonComponent } from './forms/add-season-form/add-season.component';
import { CheckFormService } from './services/check-form.service';
import { SendFormService } from './services/send-form.service';
import { HttpClientModule } from '@angular/common/http';
import {
  ButtonModule,
  InputModule,
  SelectModule,
} from 'carbon-components-angular';
import { MatchComponent } from './pages/match/match.component';
import { AddCompetitionContainerComponent } from './forms/form-competition-controller/add-competition-container.component';
import { AddSeasonContainerComponent } from './forms/form-season-controller/add-season-container.component';
import { AddMatchContainerComponent } from './forms/form-match-controller/add-match-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    AddMatchComponent,
    AddCompetitionComponent,
    AddSeasonComponent,
    MatchComponent,
    AddCompetitionContainerComponent,
    AddSeasonContainerComponent,
    AddMatchContainerComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule,
    NgxPaginationModule,
    InputModule,
    SelectModule,
  ],
  providers: [CheckFormService, SendFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
