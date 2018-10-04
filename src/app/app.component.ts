import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My world!!';
  className: any;
  isChecked = false;

  constructor(
    private router: Router
  ){}

  goToTime() {
    this.router.navigate(['/time'])
  }
}
