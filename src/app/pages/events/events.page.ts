import { Component, OnInit } from '@angular/core';

import { UtilService } from  '../../util.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private usv: UtilService) { }

  ngOnInit() {
  }

  navigate(path:string){
    if(path === 'pop') return this.usv.pop();
    this.usv.navigate(path)
  }

}
