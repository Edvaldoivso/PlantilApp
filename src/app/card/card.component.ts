import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public tituloCard = "Titulo"
  public subtituloCard = "Subtitulo"
  public conteudoCard = `If not specified (default),
   the shadow is assumed to be a drop shadow (as if the box were raised above the content).
    The presence of the inset keyword changes the shadow to one inside the frame 
    (as if the content was.`

  public constructor() { }

  @Input() tipoCard: string = 'teste 3'

  ngOnInit(): void {
    console.log('iniciado Card');
    this.iniciaCard();

  }

  iniciaCard() {
    switch (this.tipoCard) {
      case 'tempo':
        console.log('Tempo')
        this.tituloCard = 'Tempo'
        break;
      case 'saude':
        console.log('Saude')
        this.tituloCard = 'Saude'
        break
      default:
        console.log('default')
        this.tituloCard = 'default'

    }
  }




}
