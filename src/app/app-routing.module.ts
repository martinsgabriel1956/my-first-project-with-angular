import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ViewComponent } from './pages/view/view.component';

// Aula 09) Importa a página 'login'
import { LoginComponent } from './pages/login/login.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';

// Se não está logado, roteia para 'login'
const toLogin = () => redirectUnauthorizedTo(['/login']);

// Se está logado, roteia para a 'raiz'
const isLogged = () => redirectLoggedInTo(['/']);

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

   // Aula 08) Rota para exibir um artigo único
   {
    path: 'view/:id',
    component: ViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { title: 'Artigo', authGuardPipe: toLogin }
  },

  // Aula 09) Página de login
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { title: 'Faça login' , authGuardPipe: isLogged }
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { title: 'Perfil de usuário', authGuardPipe: toLogin }
  },

  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout de usuário' }
  },

//Rota para a página 'e404'
  {
    path: '**', 
    component: E404Component, 
    data: { title: 'ERRO 404' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
