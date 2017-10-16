import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chien } from '../../shared/chien';

@Component({
  selector: 'app-ajout-chien',
  templateUrl: './ajout-chien.component.html',
  styleUrls: ['./ajout-chien.component.css']
})
export class AjoutChienComponent implements OnInit {
  nouveauChien:Chien;
  @Input()
  numeroChien: number = 0;
  @Output("onAdd")
  onAdd:EventEmitter<Chien> = new EventEmitter();

  constructor() { 
    this.nouveauChien = {
      nom: '',
      race: '',
      dateNaissance: null
    }
  }

  ngOnInit() {
  }

  ajouter() {
    this.onAdd.emit(this.nouveauChien);
  }
}
