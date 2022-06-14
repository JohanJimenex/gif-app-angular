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
  /* ! Operador para asegurar que la variable no es nulla (non null asertion operator)
  permite que la variable pueda vernir nula (null)*/
  @ViewChild('inputBuscar') inputBuscar!: ElementRef<HTMLInputElement>;
  //Se le agrega el tipo <T> HTMLInputElement para que VSC muestre todos sus metodos

  buscar(): void {

    const textoABuscar = this.inputBuscar.nativeElement.value;

    this.GifsService.buscarGif(textoABuscar);

    this.inputBuscar.nativeElement.value = "";

    this.inputBuscar.nativeElement.focus();

  }

}
