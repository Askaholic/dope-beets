import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export function izValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const goodiz = /^\d{0,6}$/.test(control.value);
        return goodiz ? null: {'badIZ': {value: control.value}};
      };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    izFormControl = new FormControl('', [
        Validators.required,
        izValidator()
    ]);

    matcher = new MyErrorStateMatcher();

    login(iz: string) {
        if (!/^\d{6}$/.test(iz)) {
            return;
        }

        this.router.navigate(['user', iz])
    }
}
