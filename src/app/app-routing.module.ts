import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CollectionCentersComponent } from './collection-centers/collection-centers.component';
import { ContactComponent } from './contact/contact.component';
import { CsrComponent } from './csr/csr.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LogisticPartnerComponent } from './logistic-partner/logistic-partner.component';
import { RequestPickupComponent } from './request-pickup/request-pickup.component';
import { ServiceComponent } from './service/service.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'collection-centers',
    component: CollectionCentersComponent,
  },
  {
    path: 'logistic-partner',
    component: LogisticPartnerComponent,
  },
  {
    path: 'request-pickup',
    component: RequestPickupComponent,
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
  {
    path: 'csr',
    component: CsrComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
