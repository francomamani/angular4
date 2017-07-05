/*
	tecnico1 = new Personal("juan", "mendoza", "tecnico", "12354");
*/
export class Personal {
	nombres: string;
	apellidos: string;
	cargo: string;
	carnet: string;

	constructor(nombres, apellidos, cargo, carnet){
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.cargo = cargo;
		this.carnet = carnet;
	}
	
}