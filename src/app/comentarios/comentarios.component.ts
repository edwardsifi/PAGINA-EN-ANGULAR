import { Component, OnInit } from '@angular/core';
import {MiservicioService} from '../servicio/miservicio.service';
import { Personas } from '../servicio/personas';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  public Res = [];

   perso = new Personas("juan", "ocotal", "img", "comentario");

  constructor(private Datos:MiservicioService) { 
   this.Datos.obtenerDatos().subscribe(data=>{//informacion delos comentarios
      console.log(data);
      this.comentarios = data;
    })
  }
  //comentarios=[];
  comentarios:Personas[];//en esta variable de tipo persona gurada los datos



  ngOnInit() {
  }

  /*cargarDatos(){ya esta echa en el constructor
    
    console.log(this.Datos.obtenerDatos()); 
    
  }*/

  guardar_comentario(){
    this.Datos.guardarDatos(this.perso).subscribe(perso1=>{
      console.log(perso1);
    
      alert("comentario agregado");
      
    })
    
  }

  

}
