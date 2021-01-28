// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Custom Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { AppMaterialModule } from './modules/app-material.module';
import { ReusableComponentsModule } from './modules/reusable-components.module';

import { AppComponent } from './app.component';

// Pages
import {
  HomeComponent,
  AboutComponent,
  PayrollComponent,
  ShareRegistrationComponent,
  IssuersComponent,
  ShareholdersComponent,
  IssuerProfileComponent,
  NewsComponent,
  ContactsComponent,
} from './pages/index';

//Services
import { IssuersService, NewsService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PayrollComponent,
    ShareRegistrationComponent,
    IssuersComponent,
    ShareholdersComponent,
    IssuerProfileComponent,
    NewsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReusableComponentsModule,
    RouterModule,
  ],
  providers: [IssuersService, NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
