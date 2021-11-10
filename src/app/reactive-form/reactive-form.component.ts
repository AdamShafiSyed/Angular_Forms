import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName:  [''],
  address: this.fb.group({
    street:  [''],
    city:  [''],
    state:  [''],
    zip:  ['']
  }),
  skils: this.fb.array([])
});
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get skils() {
    return this.profileForm.get('skils') as FormArray;
  }

  addSkils() {
    this.skils.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skils.removeAt(index)
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
