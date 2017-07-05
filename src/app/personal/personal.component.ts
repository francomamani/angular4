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

  personal:Personal = {
  	nombres: "Juan",
  	apellidos: "Mendoza",
  	cargo: "Soporte Tecnico",
  	carnet: "7275047-OR"   	
  };
  cargos: Cargo[] = [
  	{ nombre: "Auxiliar Tecnico", value: "auxiliar_tecnico"},
  	{ nombre: "Soporte Tecnico", value: "soporte_tecnico"}
  ];
  personales: Personal[];//lista de personales
  personalSeleccionado: Personal;
  edicion = false;
  constructor(private personalService: PersonalService) { }
  ngOnInit() {
    this.personalService.getPersonal().subscribe(datos => {
       this.personales = datos;
    });
  }

  registrar(personal: Personal):void{
  	this.personales.push(personal);//agrega un personal a la lista de personales
  }
  editar(personal: Personal):void{
  	this.personalSeleccionado = personal;
  	console.log(this.personalSeleccionado);
  	this.edicion = true;
  }
  actualizar(personalSeleccionado:Personal, $index):void{
  	this.personales.splice(1, $index, personalSeleccionado);
  }
}
