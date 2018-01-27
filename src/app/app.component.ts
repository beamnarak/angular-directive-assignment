import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  msgs = [];
  count = 0;

  onClick(event: any) {
    this.display = !this.display;
    this.count += 1;
    this.msgs.push(this.count);
  }
}
