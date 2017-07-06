import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Personal } from './personal';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonalService {
  //php artisan serve --host=0.0.0.0
  base = "http://localhost:8000/api/"

  constructor(private http:Http) { }
  getPersonal(){
  	return this.http.get(this.base + "personals")
  			   .map(res => res.json().map(registro => {
  			   		return new Personal(registro.id, registro.nombres, registro.apellidos, registro.cargo, registro.carnet);
  			   }));
  }

  registrar(body){
  	return this.http.post(this.base+"personals", body)
               .map(res => {
                  let registro = res.json();
                  return new Personal(registro.id, registro.nombres, registro.apellidos, registro.cargo, registro.carnet);
               });
  }
  // http:localhost:8000/api/personals/{id}
  actualizar(body){
  	return this.http.put(this.base+"personals/"+body.id, body)
               .map(res => {
                 let registro = res.json();
                 return new Personal(registro.id, registro.nombres, registro.apellidos, registro.cargo, registro.carnet);
               });  	
  }
  eliminar(body){
    return this.http.delete(this.base+"personals/"+body.id);    
  }

}
