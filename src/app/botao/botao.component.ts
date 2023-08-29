import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() tituloBotao: string = ''
  @Input() IconeBotao: string = ''

  public constructor() { }


  ngOnInit(): void {
    console.log('iniciado Botão');

  }

}