import { Routes } from "@angular/router";
import { BoucleComponent } from "./boucle/boucle.component";
import { ListeChienComponent } from "./liste-chien/liste-chien.component";
import { TemplateComponent } from "./template/template.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoSecondComponent } from "./todo-second/todo-second.component";
import { ErrorComponent } from "./error/error.component";
import { ChienComponent } from "./chien/chien.component";


export const appRoutes:Routes = [
    {path:'boucle', component:BoucleComponent},
    {path:'liste-chien', component:ListeChienComponent},
    {path:'template', component:TemplateComponent},
    {path:'todo', component:TodoComponent},
    {path:'todo-second', component:TodoSecondComponent},
    {path:'chien/:id', component:ChienComponent},
    {path:'', pathMatch:'full' ,redirectTo:'template'},
    {path:'**', component:ErrorComponent}
]