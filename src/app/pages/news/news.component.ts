import { Component, OnInit } from '@angular/core';

// Aula 11) Importa dependências
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  // Aula 11) Atributos
  apiKey = '18a25c1feed841af9cd2bf1a5225f707'; // API Key do serviço, obtida em 'https://newsapi.org/account'
  apiQuery = 'Pets'; // Palavra chave de busca
  apiItens = 10; // Quantidade de notícias à exibir. No máximo de 20.

  // Aula 11) Cuidado ao alterar
  apiURL = `http://newsapi.org/v2/everything?apiKey=${this.apiKey}&source=google-news-br&language=pt&q=${this.apiQuery}`;
  newsList: any;

  constructor(

    // Aula 11) Injeta dependências
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    // Aula 11) Obtém notícias da API REST
    this.http.get(this.apiURL).subscribe(
      (data: any) => {
        this.newsList = data.articles.slice(0, this.apiItens);
        // console.log(this.newsList);
      }
    );
  }
}