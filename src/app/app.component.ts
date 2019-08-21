import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NavBar} from '../model/navBar';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RentingMonthly-Angular-Frontend';
  valArr: object[];
  navToTop = faChevronUp;
  navbar: NavBar;

  constructor(private routes: Router
              ) {
    this.valArr = Object.values(NavBar);
    this.navbar = new NavBar();
  }

  onClickSwitch(clickString): void {
    switch (clickString) {
      case NavBar.ourService:
        this.routes.navigate([NavBar.ourService]);
        break;
      case NavBar.product:
        this.routes.navigate([NavBar.product]);
        break;
      case NavBar.renting:
        this.routes.navigate([NavBar.renting]);
        break;
      case NavBar.contactus:
        this.routes.navigate([NavBar.contactus]);
        break;
      case NavBar.aboutus:
        this.routes.navigate([NavBar.aboutus]);
        break;
      default:
        console.log('cannot find routes');
        break;
    }
  }
}
