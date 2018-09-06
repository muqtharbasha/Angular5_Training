import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-nested-content',
  templateUrl: './nested-content.component.html',
  styleUrls: ['./nested-content.component.css']
})
export class NestedContentComponent implements OnInit {

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.logTime();
  }

  logTime() {
    this.testService.getTime()
    .subscribe(
      (time: Date) => {
        // console.log(`nested component ${time}`);
      }, (err: Error) => {
        console.error(err);
      }, () => {
        // console.log('Observable completed');
      }
    );
  }

}
