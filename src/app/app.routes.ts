import { Routes } from '@angular/router';
import { LoginComponent } from "./login-component/login-component";
import { RegisterComponent } from './register-component/register-component';

export const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "", redirectTo: "login", pathMatch: "full" }, // ruta por defecto
  { path: '**', redirectTo: '/login' } // ruta por defecto para errores
];
