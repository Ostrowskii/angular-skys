import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-auth-swiper',
  templateUrl: './auth-swiper.component.html',
  styleUrls: ['./auth-swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthSwiperComponent {

}
