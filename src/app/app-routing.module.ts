import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
 //Rota padrão da página principal
  {
   path: '', 
   redirectTo: 'home', 
   pathMatch: 'full'
  },
   
//Rota para a página 'Home'
  {
    path: 'home', 
    component: HomeComponent, 
    data: { title: '' }
  },

//Rota para a página 'News'
  {
    path: 'news', 
    component: NewsComponent, 
    data: { title: 'Noticias' }
  },

//Rota para a página 'News'
  {
    path: 'contacts', 
    component: ContactsComponent, 
    data: { title: 'Contatos' }
  },

//Rota para a página 'News'
  {
    path: 'about', 
    component: AboutComponent, 
    data: { title: 'Sobre' }

  },
//Rota para a página 'e404'
  {
    path: '**', 
    component: E404Component, 
    data: { title: 'ERRO 404' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
