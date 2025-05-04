import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/navBar/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { UltimosTitulosComponent } from './components/ultimos-titulos/ultimos-titulos.component';
import { ElencoComponent } from './components/elenco/elenco.component';
import { ChatComponent } from './components/chat/chat.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { HttpClientModule } from '@angular/common/http';

register();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,SobreNosComponent,UltimosTitulosComponent,ElencoComponent,ChatComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'furiaChallenger';
  ngOnInit(): void {
    initFlowbite();
  }
}
