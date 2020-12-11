import { Component, OnInit } from '@angular/core';

import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Aula 08) Estrutura do documento
export interface Art {
  date: string;
  title: string;
  intro: string;
  text: string;
  status: string;
  img: string;
  artId: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Aula 08) Atributos do objeto
  items: Observable<any>;

  constructor(

    // Aula 08) Injeta dependências
    private afs: AngularFirestore
) {

    // Aula 08) Conectando ao Firestore
    this.items = afs.collection(
      'articles',
      ref => ref
      .where('status', '==', 'ativo')
      .orderBy('date', 'desc')
    ).valueChanges({ idField: 'artId' });
  }

  ngOnInit(): void {}
}
