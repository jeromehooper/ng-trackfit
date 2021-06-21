import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FieldErrorDisplayComponent } from '../_components/field-error-display/field-error-display.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FieldErrorDisplayComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FieldErrorDisplayComponent]
})
export class LoginModule { }
