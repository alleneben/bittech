import { Component, OnInit } from '@angular/core';

import { UtilService } from  '../../util.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private usv: UtilService) { }

  ngOnInit() {
  }

  navigate(path:string){
    if(path === 'pop') return this.usv.pop();
    this.usv.navigate(path)
  }
}
