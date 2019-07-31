import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import {OurServiceComponent} from './our-service/our-service.component';
import {RentingComponent} from './renting/renting.component';
import {NavBar} from '../model/navBar';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: NavBar.product,
    component: ProductComponent
  },
  {
    path: NavBar.aboutus,
    component: AboutusComponent
  },
  {
    path: NavBar.contactus,
    component: ContactusComponent
  },
  {
    path: NavBar.ourService,
    component: OurServiceComponent
  },
  {
    path: NavBar.renting,
    component: RentingComponent
  },
  {
    path: NavBar.login,
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
