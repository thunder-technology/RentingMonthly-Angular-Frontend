import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatSelectModule, MatSliderModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { OurServiceComponent } from './our-service/our-service.component';
import { RentingComponent } from './renting/renting.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { HomepageComponent } from './homepage/homepage.component';

library.add(fas, far, fab);


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OurServiceComponent,
    RentingComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatMenuModule,
    FontAwesomeModule,
    CarouselModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent],
  exports: [
    AngularFontAwesomeModule,
    FontAwesomeModule
  ]
})
export class AppModule {}
