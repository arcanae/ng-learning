import {Component} from '@angular/core';
import { CompteurService } from '../shared/compteur/compteur.service';

@Component({
    
    selector: 'app-template',
    
    templateUrl:'./template.component.html',
    providers: [
        CompteurService
    ]
})
export class TemplateComponent {
    title = 'app';
    inputShown:boolean = false;
    personne = {
        nom: '',
        prenom: '',
        age:0,
        chien: {}
    };
    constructor(private cs:CompteurService) { }
    
      ngOnInit() {
        console.log('compte initial dans template : ' +this.cs.compte);
        this.cs.increment();
        console.log('compte final dans template : ' +this.cs.compte);
      }

    afficher() {
        console.log(this.personne);
    }
  
    methode() {
      this.title = 'autre chose';
    }
  
    toggleInput() {
      this.inputShown = !this.inputShown;
    }
}