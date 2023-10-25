import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  contagemBotao: number = 0;

  incrementaContador() {
    this.contagemBotao++;
  }

  ngOnInit(): void {
    // A logica de inicialização vai aqui
  }
}
