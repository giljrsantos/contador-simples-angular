# Contador Simples Angular

Esse é um projetinho simples.

O objetivo da aplicação é para que o contador aumente em um sempre que o botão `[Contador]` for pressionado.

## Codigo HTML

```html
<div class="mainArea">
  <p>
    Contagem de Botão: <span>{{ contagemBotao }}</span>
  </p>
  <button (click)="incrementaContador()">Contador</button>
</div>
  
```

## Codigo JavaScript

```javascript
  // Varivel que recebe o valor quando o botão for clicado  
  contagemBotao: number = 0;

  // Função que chamada no (click) do button
  incrementaContador() {
    this.contagemBotao++;
  }
```

<p align="center">
<img src="https://github.com/giljrsantos/contador-simples-angular/blob/master/src/assets/img/1.png" width="100%">
<img src="https://github.com/giljrsantos/contador-simples-angular/blob/master/src/assets/img/2.png" width="100%">
<img src="https://github.com/giljrsantos/contador-simples-angular/blob/master/src/assets/img/3.png" width="100%">
</p>


<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>
