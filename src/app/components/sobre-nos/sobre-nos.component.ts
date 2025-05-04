import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
register();

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {
  images = [
    'assets/images/Adidas.jpg',
    'assets/images/furiaGold.png'
  ];

  swiperConfig = {
    slidesPerView: 3,
    loop: true,
    pagination: true,
    navigation: true,
    centeredSlides: true,
    spaceBetween: 0
  };

  ngOnInit(): void {
    // Aqui você pode colocar mais lógicas, se quiser
  }
}
