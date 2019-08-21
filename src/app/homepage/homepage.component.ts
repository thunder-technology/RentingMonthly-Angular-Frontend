import { Component, OnInit } from '@angular/core';
import {faArrowDown, faBriefcase, faHouseDamage, faImages} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  faArrowDown = faArrowDown;
  iconList = [
    {
      icon: faHouseDamage,
      title: 'TU QUIDEM REDD',
      text: 'Propria Sunt Ut Sin'
    },
    {
      icon: faImages,
      title: 'TU QUIDEM REDD',
      text: 'Propria Sunt Ut Sin'
    },
    {
      icon: faBriefcase,
      title: 'TU QUIDEM REDD',
      text: 'Propria Sunt Ut Sin'
    }
  ];
  filter = (d: Date): boolean => {
    // Prevent Saturday and Sunday from being selected.
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  ngOnInit() {
  }

  scrollDown(): void {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth'
    });
  }

}
