import { Component, OnInit } from '@angular/core';

import { UtilService } from '../../util.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usv: UtilService) { }

  ngOnInit() {
  }

  navigate(path:any){

    this.usv.navigate(path);
  }

}
