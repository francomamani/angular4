import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { PersonalComponent } from './personal/personal.component';

const appRutas: Routes = [
	{ path:"login", component: LoginComponent},
	{ path:"personal", component: PersonalComponent},
	{ path:"", redirectTo: '/login', pathMatch: 'full'},	
	{ path:"**", component: PaginaNoEncontradaComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNoEncontradaComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
	  RouterModule.forRoot(appRutas) 
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
