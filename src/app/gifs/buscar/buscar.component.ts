import { query } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {


  constructor(private GifsService: GifsService) { }

  //Este decorador es como documento.querySelector()
  //tambien se pueden seleccionar elementos como un div, h1, etc
  /* ! Operador para permitir que la variable acepte null (non null asertion operator)
  permite que la variable pueda vernir nula (null)*/
  @ViewChild('inputBuscar') inputBuscar!: ElementRef<HTMLInputElement>;
  //Se le agrega el tipo <T> HTMLInputElement para que VSC muestre todos sus metodos


  buscar(): void {

    this.GifsService.buscarGif(this.inputBuscar.nativeElement.value);

    this.inputBuscar.nativeElement.value = "";

    this.inputBuscar.nativeElement.focus();

  }

}
