import { Component, OnInit } from '@angular/core';
import { UtilService } from  '../../util.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  items:any = [
    {name: 'HOME', path:'/home', img: 'icons8-home-512.png'},
    {name: 'APPLY', path:'/apply', img: 'icons8-apply-80.png'},
    {name: 'SUGGESTION BOX', path:'/suggestion', img: 'icons8-hint-64.png'},
    {name: 'VOLUNTEER', path:'/volunteer', img: 'icons8-volunteering-80.png'},
    {name: 'ABOUT US', path:'/about', img: 'icons8-about-480.png'},
    {name: 'NEWS', path:'/news', img: 'icons8-news-512.png'},
    {name: 'MESSAGES', path:'/messages', img: 'icons8-chat-64.png'},
    {name: 'SUPPORT', path:'/support', img: 'icons8-online-support-64.png'},
    {name: 'DONATE', path:'/donate', img: 'icons8-donate-240.png'},
    {name: 'COMPLAINTS', path:'/complaints', img: 'icons8-complaints-96.png'},
    {name: 'EVENTS/PROGRAMS', path:'/events', img: 'icons8-event-accepted-150.png'},
  ]
  constructor(private usv: UtilService) { }

  ngOnInit() {
  }

  navigate(path:string){
    if(path === 'pop') return this.usv.pop();
    this.usv.navigate(path)
  }

}
