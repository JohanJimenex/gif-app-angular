import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  //Con esta propiedad no es necesario colocarlo en Providers en el modulo, Valido para Angular version x
  providedIn: 'root'
})
export class GifsService {

  private urlBase: string = "https://api.giphy.com/v1/gifs/search";
  private apiKey: string = "S5AT6UKQ8VX4NxpEPQYGOLE4m0EV1Oob";

  public arrObjImagenes: any[] = [];

  private _arrHistorialBusqueda: string[] = [];

  get arrHistorialBusqueda(): string[] {
    return [...this._arrHistorialBusqueda];
  }

  constructor(private http: HttpClient) { }

  buscarGif(query: string): void {

    query = query.trim().toLowerCase();

    this.http.get(`${this.urlBase}?api_key=${this.apiKey}&q=${query}&limit=20`)
      .subscribe((resp: any) => {

        this.arrObjImagenes = resp.data;

        console.log(this.arrObjImagenes);

      })

    if (this._arrHistorialBusqueda.includes(query) || query.trim().length == 0) {
      return
    }

    this._arrHistorialBusqueda.unshift(query)
    this._arrHistorialBusqueda = this._arrHistorialBusqueda.splice(0, 10);

  }




}
