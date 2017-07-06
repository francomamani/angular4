/*
	tecnico1 = new Personal("juan", "mendoza", "tecnico", "12354");
*/
export class Personal {
	id: number;
	nombres: string;
	apellidos: string;
	cargo: string;
	carnet: string;

	constructor(id, nombres, apellidos, cargo, carnet){
		this.id = id;
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.cargo = cargo;
		this.carnet = carnet;
	}
	
}