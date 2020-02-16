import { Injectable } from '@angular/core';
import { Personas } from './personas';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  constructor(private http: HttpClient) {
    console.log('servicio activo');
   }
  
  headers : HttpHeaders  = new HttpHeaders({
    "Content-Type": "application/json",

  }) 

  obtenerDatos(){
    //return <Personas>;
    //return this.http.get<Personas[]>("assets/json/personas.json"); objetner datos de un archivo json
    //return this.http.get<Personas[]>('https://jsonplaceholder.typicode.com/posts'); 
    //return this.http.get<Personas[]>("https://api.myjson.com/bins/m6180");//obtener datos de una api
    //return this.http.get<Personas[]>("https://192.168.,0,106/php/obtener_comentarios.php");
    //return this.http.get<Personas[]>("https://pruebasangular123456789.000webhostapp.com/php/obtener_comentarios.php");
    return this.http.get<Personas[]>("http://pruebaservicio.mipropia.com/php/obtener_comentarios.php");
  }
  
  guardarDatos(perso){//: Observable<any>
    //return this.http.post<Personas[]>("https://pruebasangular123456789.000webhostapp.com/php/registrar_comentarios.php",perso);//enviar datos a una base de datos, direccion mas el dato
    //return this.http.post("https://pruebasangular123456789.000webhostapp.com/php/registrar_comentarios.php", perso, {headers: this.headers});
  }
}
