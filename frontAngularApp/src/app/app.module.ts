import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { AddMatchComponent } from './components/forms/add-match-form/add-match.component';
import { AddCompetitionComponent } from './components/forms/add-competition-form/add-competition.component';
import { AddSeasonComponent } from './components/forms/add-season-form/add-season.component';
import { SendFormService } from './services/send-form.service';
import { HttpClientModule } from '@angular/common/http';
import {
  ButtonModule,
  InputModule,
  SelectModule,
} from 'carbon-components-angular';
import { MatchComponent } from './components/pages/match/match.component';
import { AddCompetitionContainerComponent } from './components/pages/form-controllers/form-competition-controller/add-competition-container.component';
import { AddSeasonContainerComponent } from './components/pages/form-controllers/form-season-controller/add-season-container.component';
import { AddMatchContainerComponent } from './components/pages/form-controllers/form-match-controller/add-match-container.component';

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
  providers: [ SendFormService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
