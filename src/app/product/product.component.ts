import {Component, OnInit} from '@angular/core';
import {faBath, faBed, faCar, faWifi, faWheelchair, faSubway, faDumbbell, faSwimmingPool} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  samplePathArr: string[];
  address: string;
  city: string;
  roomType: string;
  price: number;
  star: number;
  iconList = [{
      icon: faBed,
      num: 1
    },
    {
      icon: faBath,
      num: 2
    }, {
      icon: faCar,
      num: 2
    }];

  amenityIconList = [{
      icon: faWifi,
      num: 1,
      text: 'Wifi'
  }, {
      icon: faWheelchair,
      num: 1,
      text: 'Accessible'
  }, {
      icon: faSubway,
      num: 1,
      text: 'Subway'
  }, {
      icon: faDumbbell,
      num: 0,
      text: 'Gym'
  }, {
      icon: faSwimmingPool,
      num: 0,
      text: 'Swimming pool'
  }];
  filter = (d: Date): boolean => {
    // Prevent Saturday and Sunday from being selected.
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  constructor() {
    this.samplePathArr = [
        '../assets/img/1.jpg',
        '../assets/img/2.jpg'
    ];
    this.address = '5 sheppard ave E.';
    this.city = 'TORONTO';
    this.roomType = 'BACHELOR';
    this.price = 1500;
    this.star = 5;
  }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }
}
