import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { InputfieldComponent } from '../../components/inputfield/inputfield.component';
import { ButtonComponent } from '../../components/button/button.component';

import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    
  ],
  declarations: [SignupPage,InputfieldComponent, ButtonComponent]
})
export class SignupPageModule {}
