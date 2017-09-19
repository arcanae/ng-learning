import {Component} from '@angular/core';

@Component({
   
    selector: 'app-template',
    
    templateUrl:'./template.component.html'
})
export class TemplateComponent {
    title = 'app';
    inputShown:boolean = false;
    inputShown2:boolean = true; 
    person:object = {}

    display() {
        console.log(this.person);
    }

    methode() {
      this.title = 'autre chose';
    }
  
    toggleInput() {
      this.inputShown = !this.inputShown;
    }
}