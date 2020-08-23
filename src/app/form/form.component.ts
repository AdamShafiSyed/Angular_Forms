import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
Data = [];
   constructor(private fb: FormBuilder) { }
form: FormGroup;
  ngOnInit() {
this.form = this.fb.group({
  addresses: this.fb.array([
    this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    })
  ])
}) ;
  }
addForms() {
  const address = <FormArray> this.form.get('addresses');
  address.push(this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required]
  }));
}
removeForm() {
  const address = <FormArray> this.form.get('addresses');
address.removeAt(1);

}
processForm() {
  this.Data = [];
this.form.value.addresses.map( x => {
  this.Data.push(x);
});
}
removeData(i) {
  this.Data.splice(i, 1);
}
}
