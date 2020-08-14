import { Component, OnInit } from '@angular/core';

import { UtilService } from '../../util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private usv: UtilService) { }

  ngOnInit() {
  }

  navigate(path:any){
    console.log(path);
    
    this.usv.navigate(path)
  }
}
