import { Component , OnInit, HostListener } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 

interface Player {
  name: string;
  realName?:NamedCurve;
  role: string;
  image: string;
  roleIcon?:string;
  game: 'lol' | 'valorant' | 'cs';
}
@Component({
  selector: 'app-elenco',
  standalone: true,
  imports:[CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css'],
})
export class ElencoComponent {
  players: Player[] = [
    // LOL
    { name: 'Tutsz', realName:"ARTHUR MACHADO",  role: 'Mid Laner', image: 'assets/timeFuria2/LOL/tutz.png',roleIcon:'assets/timeFuria2/rotas/lol-role-icon-mid.png', game: 'lol' },
    { name: 'Guigo', realName:"GUILHERME RUIZ", role: 'Top Laner', image: 'assets/timeFuria2/LOL/guigo.png',roleIcon:'assets/timeFuria2/rotas/lol-role-icon-top.png', game: 'lol' },
    { name: 'Tatu', realName:"PEDRO SEIXAS", role: 'Jungler', image: 'assets/timeFuria2/LOL/tatu.png',roleIcon:'assets/timeFuria2/rotas/lol-role-icon-jungle.png', game: 'lol' },
    { name: 'Ayu', realName:"ANDREY SARAIVA", role: 'ADC', image: 'assets/timeFuria2/LOL/ayu.png',roleIcon:'assets/timeFuria2/rotas/lol-role-icon-botton.png', game: 'lol' },
    { name: 'JoJo', realName:"GABRIEL DZELME", role: 'Support', image: 'assets/timeFuria2/LOL/JOJO.png',roleIcon:'assets/timeFuria2/rotas/lol-role-icon-support.png', game: 'lol' },
    // Valorant
    { name: 'Mazino', role: 'Duelist', image: 'assets/valorant/mazino.jpg', game: 'valorant' },
    { name: 'Havoc', role: 'Sentinel', image: 'assets/valorant/khalil.jpg', game: 'valorant' },
    { name: 'Heat', role: 'Duelist', image: 'assets/valorant/mazino.jpg', game: 'valorant' },
    { name: 'Raafa', role: 'Sentinel', image: 'assets/valorant/khalil.jpg', game: 'valorant' },
    { name: 'Pryze', role: 'Sentinel', image: 'assets/valorant/khalil.jpg', game: 'valorant' },
    // CS
    { name: 'Fallen', realName:"Gabriel Toledo" , role: 'Rifler', image: 'assets/timeFuria2/CS/Fallen.png', game: 'cs' },
    { name: 'KSCERATO', realName:"Kaike Silva Cerato",  role: 'Entry Fragger', image: 'assets/timeFuria2/CS/Kscerato.png', game: 'cs' },
    { name: 'Yuurih',realName:"Yuri Gomes",  role: 'Rifler', image: 'assets/timeFuria2/CS/Yuurih.png', game: 'cs' },
    { name: 'Molodoy', realName:"Danil Golubenko" , role: 'Entry Fragger', image: 'assets/timeFuria2/CS/M.png', game: 'cs' },
    { name: 'Yenkindar', realName:"Mareks Gaļinskis." , role: 'Entry Fragger', image: 'assets/timeFuria2/CS/Y.png', game: 'cs' }
  ];

  selectedGame: 'lol' | 'valorant' | 'cs' = 'lol';

  get filteredPlayers() {
    return this.players.filter(player => player.game === this.selectedGame);
  }

  selectGame(game: 'lol' | 'valorant' | 'cs') {
    this.selectedGame = game;
  }
  
}

register();


