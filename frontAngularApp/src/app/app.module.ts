import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddMatchComponent } from './form/add-match/add-match.component';
import { AddCompetitionComponent } from './form/add-competition/add-competition.component';
import { AddSeasonComponent } from './form/add-season/add-season.component';
import { CheckFormService } from './check-form.service';
import { SendFormService } from './send-form.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule,InputModule,SelectModule } from 'carbon-components-angular';
import { MatchComponent } from './match/match.component';


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
    SelectModule
  ],
  providers: [CheckFormService, SendFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
