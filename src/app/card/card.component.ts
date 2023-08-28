import { Component, OnInit } from '@angular/core';

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


  ngOnInit(): void {
    console.log('iniciado Card');

  }




}
