import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cursos: Object[]

  nome: string
  preco: number
  avaliacao: number
  

  constructor(){
    this.nome = ""
    this.preco = 0
    this.avaliacao = 0

    this.cursos = [
      {
        nome: 'Laravel básico',
        preco: 70.00,
        avaliacao: 4
      },
      {
        nome: 'Empreendedorismo',
        preco: 60.00,
        avaliacao: 3
      },
      {
        nome: 'Java 8',
        preco: 50.00,
        avaliacao: 4
      }
    ]

  }

  add(){
    this.cursos.unshift({nome: this.nome,
      preco: this.preco, avaliacao: this.avaliacao });
  }
}
