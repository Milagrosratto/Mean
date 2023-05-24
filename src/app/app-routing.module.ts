import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
