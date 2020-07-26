import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputfieldComponent } from '../inputfield/inputfield.component';

@NgModule({
  declarations: [
    InputfieldComponent
  ],
  exports: [
    InputfieldComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
