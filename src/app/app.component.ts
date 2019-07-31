import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NavBar} from '../model/navBar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RentingMonthly-Angular-Frontend';

  constructor(private routes: Router) {
  }

  onClickOurService(): void {
    this.routes.navigate([NavBar.ourService]);
  }

  onClickProduct(): void {
    this.routes.navigate([NavBar.product]);
  }

  onClickRenting(): void {
    this.routes.navigate([NavBar.renting]);
  }

  onClickContactUs(): void {
    this.routes.navigate([NavBar.contactus]);
  }

  onClickAboutUs(): void {
    this.routes.navigate([NavBar.aboutus]);
  }

  onClickLogin(): void {
    this.routes.navigate([NavBar.login]);
  }
}
