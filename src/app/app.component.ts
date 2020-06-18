import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bemoacademicconsultant';
  condition = true;

  checkCondition(page) {
    if (page === 'Contact') {
      this.condition = false;
    } else if (page === 'Main') {
      this.condition = true;
    }
  }
}
