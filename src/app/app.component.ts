import { Component, HostListener } from '@angular/core';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scroll AngularJS';
  items = Array(50);
  value = false;
  beforeScroll = true;
  scrollvalue = false;
  @HostListener ('window:scroll', ['$event']) windowScroll(event: any) {
    setTimeout(() => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.beforeScroll = false;
        this.scrollvalue = true;
        setTimeout(() => {
          this.scrollvalue = false;
          this.value = true;
        }, 1000);
    }
    }, 3000);
  }
}

