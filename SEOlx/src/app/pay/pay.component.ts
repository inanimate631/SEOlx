import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './pay.component.html',
})
export class PayComponent implements OnInit {
  PayForm!: FormGroup;
  regex = /^[0-9]{13,19}$/;
  constructor() {}

  ngOnInit() {
    this.PayForm = new FormGroup({
      card: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.regex),
      ]),
      cvc: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[0-9]+$/),
      ]),
      mm: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[0-9]+$/),
      ]),
      yy: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[0-9]+$/),
      ]),
      balance: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
    });
  }

  submit() {
    if (this.PayForm.invalid){
      return
    }
    console.log(this.PayForm.value);
  }
}
