import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGif, IObjtResponse } from '../interfaces/gifs.interface';




@Injectable({
  //Con esta propiedad no es necesario colocarlo en Providers en el modulo, Valido para Angular version x
  providedIn: 'root'
})
export class GifsService {

  private urlBase: string = "https://api.giphy.com/v1/gifs/search";
  private apiKey: string = "S5AT6UKQ8VX4NxpEPQYGOLE4m0EV1Oob";

  public arrObjImagenes: IGif[] = [];

  private _arrHistorialBusqueda: string[] = [];

  get arrHistorialBusqueda(): string[] {
    return [...this._arrHistorialBusqueda];

  }

  constructor(private http: HttpClient) {
    this._arrHistorialBusqueda = JSON.parse(localStorage.getItem("arrHistorialBusqueda") || "[]");
    this.buscarGif(localStorage.getItem('ultimaBusqueda') || "");

  }

  buscarGif(query: string): void {

    query = query.trim().toLowerCase();

    localStorage.setItem("ultimaBusqueda", query);

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", query)
      .set("limit", "20");

    //con <IObjtResponse> indicamos que el objeto que vamos a recibir tiene esa estructura de la interface 
    this.http.get<IObjtResponse>(this.urlBase, { params })
      .subscribe((resp: IObjtResponse) => {
        this.arrObjImagenes = resp.data;

      })


    if (this._arrHistorialBusqueda.includes(query) || query.trim().length == 0) {
      return
    }

    this._arrHistorialBusqueda.unshift(query)
    this._arrHistorialBusqueda = this._arrHistorialBusqueda.splice(0, 10);

    //guardar data en el localstore, JSON.stringify() convierte un objeto/arreglo a string
    localStorage.setItem("arrHistorialBusqueda", JSON.stringify(this._arrHistorialBusqueda))
  }


  eliminarHistorial(): void {
    localStorage.clear()
    this._arrHistorialBusqueda = [];
  }

}
