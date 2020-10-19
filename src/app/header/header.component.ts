import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showOption: boolean = false;

  @Input() title: string;
  constructor() {
   }

  ngOnInit(): void {
  }



  themes(event) {
    event.stopImmediatePropagation();
    this.showOption =  !this.showOption;
  }

  onThemeSelect(color: string) {
    console.log(color);
    document.body.className = color;
  }
}
