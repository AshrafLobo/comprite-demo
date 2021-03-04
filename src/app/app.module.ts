// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import {
  FaqService,
  IssuersService,
  NewsService,
  AgmsService,
  EgmsService,
  DividendsService,
} from './services/index';

import { AppErrorHandler } from './common/app-error-handler';

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
    HttpClientModule,
  ],
  providers: [
    IssuersService,
    NewsService,
    FaqService,
    AgmsService,
    EgmsService,
    DividendsService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
