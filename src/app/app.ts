import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaMenu } from './components/tarjeta-menu/tarjeta-menu';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TarjetaMenu],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  datos : any[] = [];
  tituloTabla : string = '';
  cargando : boolean = false;

  constructor(
    private api : ApiService,
    private cd : ChangeDetectorRef
  ){}

  mostrarGastos(){
    this.tituloTabla = 'Gastos';
    this.cargando = true;
    this.api.obtenerGastos().subscribe((respuesta : any) => {
      this.datos = respuesta;
      this.cargando = false;
      this.cd.detectChanges();

    });

  }


  mostrarIngresos(){
    this.tituloTabla = 'Ingresos';
    this.cargando = true;
    this.api.obtenerIngresos().subscribe((respuesta : any) => {
      this.datos = respuesta;
      this.cargando = false;
      this.cd.detectChanges();
    });
  }

}