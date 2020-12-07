// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { AppMaterialModule } from './modules/app-material.module';

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Components
import {
  NavigationComponent,
  SidenavComponent,
  FooterComponent,
  NewsCardComponent,
  CustomButtonComponent,
  BannerComponent,
  SplitBannerComponent,
  TimelineComponent,
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    SidenavComponent,
    FooterComponent,
    NewsCardComponent,
    CustomButtonComponent,
    BannerComponent,
    SplitBannerComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
