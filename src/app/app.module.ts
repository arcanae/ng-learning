
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './shared/todo.service';
import { TodoSecondComponent } from './todo-second/todo-second.component';
import { CompteurService } from './shared/compteur/compteur.service';
import { TodoAjaxService } from './shared/todo-ajax.service';
import { ListeChienComponent } from './liste-chien/liste-chien.component';
import { ChienService } from './shared/chien/chien.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ErrorComponent } from './error/error.component';
import { ChienComponent } from './chien/chien.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BoucleComponent,
    TodoComponent,
    TodoSecondComponent,
    ListeChienComponent,
    ErrorComponent,
    ChienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService,
    CompteurService,
    TodoAjaxService,
    ChienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }