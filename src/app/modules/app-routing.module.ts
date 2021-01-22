import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
} from '../pages/index';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'share-registration', component: ShareRegistrationComponent },
  { path: 'issuers/:issuer_name', component: IssuerProfileComponent },
  { path: 'issuers', component: IssuersComponent },
  { path: 'shareholders', component: ShareholdersComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact-us', component: ContactsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
