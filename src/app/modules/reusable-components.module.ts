import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import {
  NavigationComponent,
  SidenavComponent,
  FooterComponent,
  CardComponent,
  NewsCardComponent,
  CustomButtonComponent,
  BannerComponent,
  SplitBannerComponent,
  TimelineComponent,
  MapComponent,
  PriceCardComponent,
  TestimonialCardComponent,
  AccordionComponent,
  EnquiryFormComponent,
} from '../components/index';

// Modules
import { AppMaterialModule } from './app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

const reusableComponents = [
  NavigationComponent,
  SidenavComponent,
  FooterComponent,
  CardComponent,
  NewsCardComponent,
  CustomButtonComponent,
  BannerComponent,
  SplitBannerComponent,
  TimelineComponent,
  MapComponent,
  PriceCardComponent,
  TestimonialCardComponent,
  AccordionComponent,
  EnquiryFormComponent,
];

@NgModule({
  declarations: [reusableComponents],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
  exports: [reusableComponents],
})
export class ReusableComponentsModule {}
