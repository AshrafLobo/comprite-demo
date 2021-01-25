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
  PriceCardComponent,
  TestimonialCardComponent,
  AccordionComponent,
  EnquiryFormComponent,
  PayrollFormComponent,
  PayrollSubmissionFormComponent,
  ShareRegistrationFormComponent,
  CarouselComponent,
  CompanyTestimonialCardComponent,
  ClientCardComponent,
  TestimonialsComponent,
  GoogleMapsComponent,
} from '../components/index';

// Modules
import { AppMaterialModule } from './app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

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
  PriceCardComponent,
  TestimonialCardComponent,
  AccordionComponent,
  EnquiryFormComponent,
  PayrollFormComponent,
  PayrollSubmissionFormComponent,
  ShareRegistrationFormComponent,
  CarouselComponent,
  CompanyTestimonialCardComponent,
  ClientCardComponent,
  TestimonialsComponent,
  GoogleMapsComponent,
];

@NgModule({
  declarations: [reusableComponents],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeJ1-R1eGxmLCAIPENZQKGXz6tYaFijAo',
    }),
  ],
  exports: [reusableComponents],
})
export class ReusableComponentsModule {}
