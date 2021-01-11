import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { PayrollComponent } from '../payroll/payroll.component';
import { ShareRegistrationComponent } from '../share-registration/share-registration.component';
import { IssuersComponent } from '../issuers/issuers.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'share-registration', component: ShareRegistrationComponent },
  { path: 'issuers', component: IssuersComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
