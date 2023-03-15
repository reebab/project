import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { LoginComponent } from './pages/login/login.component';
import { BookingComponent } from './pages/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ContactusComponent,
    PoliciesComponent,
    ReviewsComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
    LoginComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
