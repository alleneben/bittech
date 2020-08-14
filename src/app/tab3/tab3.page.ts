import { Component } from '@angular/core';

import { UtilService } from '../util.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private usv: UtilService) {}


  navigate(path:string){
    this.usv.navigate(path)
  }
}
