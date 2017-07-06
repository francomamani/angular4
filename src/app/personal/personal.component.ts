import { Component, OnInit } from '@angular/core';
/*
  importacion de clases
  import { nombreClase } from './ubicacion'
*/
import { Personal } from './personal';
import { Cargo } from './cargo';
import { PersonalService } from './personal.service';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'], 
  providers: [PersonalService]
})
export class PersonalComponent implements OnInit {

  index:number=null;
  personal:Personal = {
  	id: 0,
    nombres: "Juan",
  	apellidos: "Mendoza",
  	cargo: "Soporte Tecnico",
  	carnet: "7275047-OR"   	
  };
  cargos: Cargo[] = [
  	{ nombre: "Auxiliar Tecnico", value: "auxiliar_tecnico"},
  	{ nombre: "Soporte Tecnico", value: "soporte_tecnico"}
  ];
  //personales: Personal[];//lista de personales
  personales: Array<Personal>;
  
  personalSeleccionado: Personal;
  edicion = false;
  constructor(private personalService: PersonalService) { }
  ngOnInit() {
    this.personalService.getPersonal().subscribe(datos => {
       this.personales = datos;
    });
  }

  registrar(personal: Personal):void{
    this.personalService.registrar(personal).subscribe(registroNuevo => {
      this.personales.unshift(registroNuevo);
    });

  }
  editar(personal: Personal, index):void{
  	this.personalSeleccionado = personal;
  	console.log(this.personalSeleccionado);
  	this.edicion = true;
    this.index = index;
  }
  actualizar(personalSeleccionado:Personal):void{
    this.personalService
        .actualizar(personalSeleccionado)
        .subscribe(registroActualizado => {
          this.personales.splice(this.index, 1, registroActualizado)
        });
  }
  eliminar(personalSeleccionado:Personal, index){
    this.personalService
        .eliminar(personalSeleccionado)
        .subscribe(registroActualizado => {
            this.personales.splice(index, 1);
            console.log(registroActualizado);
        });
  }
}
