import { Component, HostListener } from '@angular/core';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loader';
  contents = Array(50);
  afterLoader = false;
  firstContent = true;
  loader = false;
  @HostListener ('window:scroll', ['$event']) LoaderFunction(event: any) {
    setTimeout(() => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.firstContent = false;
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
          this.afterLoader = true;
        }, 1000);
    }
    }, 2000);
  }
}

