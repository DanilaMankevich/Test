import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AddMatchComponent,
  AddCompetitionComponent,
  AddSeasonComponent,
  AdminComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  MatchComponent,
  AddCompetitionContainerComponent,
  AddSeasonContainerComponent,
  AddMatchContainerComponent
} from './components';
import { SendFormService } from './services';
import { HttpClientModule } from '@angular/common/http';

import {
  ButtonModule,
  InputModule,
  SelectModule,
} from 'carbon-components-angular';

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
  providers: [SendFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
