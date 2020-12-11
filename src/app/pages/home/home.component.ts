import { Component, OnInit } from '@angular/core';

import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// 09) Importa autenticação
import { AngularFireAuth } from '@angular/fire/auth';

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
    private afs: AngularFirestore,
    // 09) Injeta autenticação
    public auth: AngularFireAuth,
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
