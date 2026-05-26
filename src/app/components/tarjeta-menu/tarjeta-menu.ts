import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-menu',
  imports: [],
  templateUrl: './tarjeta-menu.html',
  styleUrl: './tarjeta-menu.css'
})
export class TarjetaMenu {

  @Input() texto : string = '';

}