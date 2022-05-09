import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})

export class SidebarComponent implements OnInit  {

  menuItems: any[];

  constructor( private sidebarService: SidebarService) {

    this.menuItems = sidebarService.menu;
    console.log(this.menuItems);
  }

  ngOnInit() {
  }


}
