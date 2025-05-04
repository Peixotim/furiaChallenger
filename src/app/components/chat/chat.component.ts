import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  
  private apiKey = 'AIzaSyDS5r-SLY_AxGrKaIcMaY3E5-TGUMC4Me4';
  private apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`;

  messages: { from: 'user' | 'bot'; text: string }[] = [];
  userInput = '';
  private isFirstMessage = true;  

  constructor(private http: HttpClient) {

    this.messages.push({
      from: 'bot',
      text: '👋 Olá! Eu sou o Assistente Oficial da FURIA. Sou especialista em tudo que envolve o time de eSports FURIA. Me pergunte qualquer coisa!'
    });
  }

  private sendMessageToGemini(userMessage: string) {
    const prompt = `Responda de forma objetiva e clara. Se a pergunta mencionar jogadores, times ou competições, forneça a resposta com foco em FURIA. Pergunta: "${userMessage}"`;

    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    return this.http.post<any>(this.apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ from: 'user', text });
    this.userInput = '';

    this.sendMessageToGemini(text).subscribe({
      next: (res) => {
        const reply = res?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sem resposta da API.';
        this.messages.push({ from: 'bot', text: reply });
      },
      error: (err) => {
        console.error('Erro ao acessar a Gemini API:', err);
        this.messages.push({ from: 'bot', text: 'Houve um problema ao acessar a Gemini API. Tente novamente mais tarde.' });
      }
    });
  }
}
