import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorComponent } from './error/error.component';
import { NewsComponent } from './news/news.component';
import { CsrComponent } from './csr/csr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionCentersComponent } from './collection-centers/collection-centers.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { LogisticPartnerComponent } from './logistic-partner/logistic-partner.component';
import { RequestPickupComponent } from './request-pickup/request-pickup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    ErrorComponent,
    NewsComponent,
    CsrComponent,
    CollectionCentersComponent,
    ThankyouComponent,
    LogisticPartnerComponent,
    RequestPickupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
