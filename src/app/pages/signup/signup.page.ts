import { Component, OnInit } from '@angular/core';


import { UtilService } from '../../util.service';

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
  slider:any 
  constructor(private usv: UtilService) { }

  ngOnInit() {
    
    
  }
  ngAfterViewInit(){
    this.slider = document.getElementById('slider');    
  }

  slide(event){
    console.log(event);
    
    this.slider.addEventListener('mousedown touchstart', function(event){
      console.log(event);
      
    })
  }
  navigate(path:string){
    this.usv.navigate(path)
  }

}
