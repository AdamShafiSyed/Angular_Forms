import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/form-model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() {
     this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
