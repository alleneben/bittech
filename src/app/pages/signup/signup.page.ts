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
  initform: FormGroup;
  finalform: FormGroup;
  init:boolean = true;
  final: boolean =  false;

  passwordtype: string = 'password';
  passwordicon: string = 'eye-off-outline';
  togglepassword: boolean = false;

  constructor(private router: Router,private asv: UtilAppService,private usv: UtilService,private formBuilder:FormBuilder) {
    this.initform = this.formBuilder.group({
      username: new FormControl('',Validators.compose([Validators.required])),
      gender: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])),
      pass: new FormControl('',Validators.compose([Validators.required])),
    })

    this.finalform = this.formBuilder.group({
      fname: new FormControl('',Validators.compose([Validators.required])),
      lname: new FormControl('',Validators.compose([Validators.required])),
      dob: new FormControl('',Validators.compose([Validators.required,])),
      phone: new FormControl('',Validators.compose([Validators.required])),
      country_list: new FormControl('',Validators.compose([Validators.required])),
      district_list: new FormControl('',Validators.compose([Validators.required])),
      const_list: new FormControl('',Validators.compose([Validators.required])),
      address: new FormControl('',Validators.compose([Validators.required])),
      daddress: new FormControl('',Validators.compose([Validators.required])),
      pp: new FormControl('',Validators.compose([Validators.required])),
      npp: new FormControl('',Validators.compose([Validators.required]))
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

  save(){
    if(!this.initform.valid) return this.usv.displayToast(`All fields marked * are required`,3000,true,'danger','top');
    
    this.usv.presentLoading()
    // this.asv.send(this.initform.value,'/registration/register.php')
    // .subscribe(rd => {
    //   this.usv.dismissloading()
    //   let out = rd
    //   if(out.response){
    //     this.final = true;
    //     this.init = false;
    //   }
    // },err => {
    //   this.usv.dismissloading()
    //   this.usv.displayToast(err.name,2000,'','danger','top')
    // })
    let rd = this.asv.simsend('','')
    if(rd.response){
      this.final = true;
        this.init = false;
    }
  }
  
}
