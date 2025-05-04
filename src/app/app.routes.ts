import { Routes } from '@angular/router';
import { HomeComponent } from './components/navBar/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ElencoComponent } from './components/elenco/elenco.component';
import { UltimosTitulosComponent } from './components/ultimos-titulos/ultimos-titulos.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProximosGamesComponent } from './components/proximos-games/proximos-games.component';

export const routes: Routes = [


{path:"",component:SobreNosComponent}, // path: significa endereço exemplo : localhost:4020/SobreNos
{path:"elenco",component:ElencoComponent}, // component: significa aonde o path vai levar exemplo /SobreNos encaminha para a page sobreNos
{path:"ultimosTitulos", component:UltimosTitulosComponent},
{path: "chatbot" , component:ChatComponent},
{path:"proximosGames", component:ProximosGamesComponent}
];


