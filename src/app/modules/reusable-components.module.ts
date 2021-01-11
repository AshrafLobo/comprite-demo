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
  CarouselComponent,
  CompanyTestimonialCardComponent,
  ClientCardComponent,
} from '../components/index';

// Modules
import { AppMaterialModule } from './app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  CarouselComponent,
  CompanyTestimonialCardComponent,
  ClientCardComponent,
];

@NgModule({
  declarations: [reusableComponents],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, NgbModule],
  exports: [reusableComponents],
})
export class ReusableComponentsModule {}
