import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../../material-component.module';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../customItems/formFieldErros';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MaterialComponentModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  clientForm = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    birthDate: ['', Validators.required],
    birthTime: ['', Validators.required]
  })

  constructor(private _errStateMatcher: MyErrorStateMatcher, private fb: FormBuilder) { }

  matcher = new MyErrorStateMatcher();

  saveForm() {
    console.log(this.clientForm.value);
  }

  resetClientForm() {
    this.clientForm.reset();
  }

}
