import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getTime()
      .subscribe(
        (time: Date) => {
          // console.log(`time component ${time}`);
        }, (err: Error) => {
          console.error(err);
        }, () => {
          // console.log('Observable completed');
        }
      );
    this.testService.getRandomNames()
      .subscribe(data => console.log(data));
  }

}
