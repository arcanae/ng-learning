import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chien',
  templateUrl: './chien.component.html',
  styleUrls: ['./chien.component.css']
})
export class ChienComponent implements OnInit {
  chien:Chien = {
    id:1,
    nom:'placeholder name',
    race: 'placeholder race',
    dateNaissance: new Date() 
  };
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => console.log(params));
  }


}
