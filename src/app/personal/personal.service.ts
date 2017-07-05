import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Personal } from './personal';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonalService {
  base = "http://localhost:8000/api/"

  constructor(private http:Http) { }
  getPersonal(){
  	return this.http.get(this.base + "personals")
  			   .map(res => res.json().map(registro => {
  			   		return new Personal(registro.nombres, registro.apellidos, registro.cargo, registro.carnet);
  			   }));
  }
}
