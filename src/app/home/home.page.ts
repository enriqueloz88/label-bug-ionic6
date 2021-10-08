import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      hello: ['', Validators.required],
    });
  }
}
