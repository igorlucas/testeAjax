import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // stilos
  containerStyle = {
    'height': `${screen.height}px`
  }

  sidenavStyle = {
    'background-color': 'darkblue',
    'width': `200px`
  }

}
