import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ServicesComponent } from './pages/services/services.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
 },
 {
  path:'login', component:LoginComponent
 },

 { 
   path:'aboutus', component:AboutusComponent
 },
 { 
   path:'services', component:ServicesComponent
 },
 {
    path:'contactus', component:ContactusComponent
   },
 {
    path:'policies', component:PoliciesComponent
   },
 {
    path:'reviews', component:ReviewsComponent
   },
   {
    path:'single', component:SinglepageComponent
   },
   {
    path:'booking',component:BookingComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
