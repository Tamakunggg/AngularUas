import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-menu',
  imports: [],
  templateUrl: './tarjeta-menu.html',
  styleUrl: './tarjeta-menu.css'
})

export class TarjetaMenu {
  @Input() texto : string = '';
  @Output() clickTarjeta = new EventEmitter();
  seleccionar(){
    this.clickTarjeta.emit();
  }

}