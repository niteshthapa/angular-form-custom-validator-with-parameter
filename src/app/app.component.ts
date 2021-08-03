import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormSubmit: boolean = false;
  validateForm = new FormGroup({
    country: new FormControl('Select', this.DropdownSelectValidation("Select"))
  })
  get country() { return this.validateForm.get('country'); }
  DropdownSelectValidation(validationValue: string) {
    return (control: AbstractControl) => {
      console.log(control)
      if (control.value === validationValue) {
        return { 'required': true }
      }
      else {
        return null;
      }
    }
  }
  onSubmit() {
    this.isFormSubmit = true;
    if (!this.validateForm.valid) {
      console.log("error");
    }
    else {
      console.log(this.validateForm.value)
    }
  }
}
