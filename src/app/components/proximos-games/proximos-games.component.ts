import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-proximos-games',
  templateUrl: './proximos-games.component.html',
  styleUrls: ['./proximos-games.component.css'],
  imports:[CommonModule, HttpClientModule]
})
export class ProximosGamesComponent implements OnInit {
  jogos: any[] = [];
  carregando: boolean = true;
  erro: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const apiUrl = 'https://esports-api.lolesports.com/persisted/gw/getSchedule';
    const headers = { 'x-api-key': 'EsportsExternalProdKey' };
    const params = { leagueId: 'brazil' };

    this.http.get<any>(apiUrl, { headers, params }).subscribe({
      next: (res) => {
        const eventos = res.data.schedule.events;
        this.jogos = eventos.filter((evento: any) =>
          evento.match.teams.some((time: any) =>
            time.name.toLowerCase().includes('furia')
          )
        );
        this.carregando = false;
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Erro ao carregar os jogos.';
        this.carregando = false;
      }
    });
  }
}
