import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { UtilService } from '../../util.service';
import { UtilAppService } from '../../util.app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  fnm:any = 'Full Name'

  initialMouse:number = 0;
  slideMovementTotal:number = 0;
  mouseIsDown:boolean = false;
  slider:any;
  signinform: FormGroup;

  passwordtype: string = 'password';
  passwordicon: string = 'eye-off-outline';
  togglepassword: boolean = false;

  constructor(private router: Router,private asv: UtilAppService,private usv: UtilService,private formBuilder:FormBuilder) {
    this.signinform = this.formBuilder.group({
      username: new FormControl('',Validators.compose([Validators.required])),
      gender: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])),
      pass: new FormControl('',Validators.compose([Validators.required])),
    })
  }

  ngOnInit() {
    
    
  }
  ngAfterViewInit(){
    this.slider = document.getElementById('slider');    
  }

  slide(event:any){
    this.slider.addEventListener('mousedown touchstart', function(event){
      console.log(event);
      
    })
  }
  navigate(path:string){
    this.usv.navigate(path)
  }
  hideshowpassword(){
    this.togglepassword = !this.togglepassword;
    if(this.togglepassword) {
      this.passwordicon = 'eye-outline';
      this.passwordtype = 'text';
    } else {
      this.passwordicon = 'eye-off-outline';
      this.passwordtype = 'password';
    }
  }

}
