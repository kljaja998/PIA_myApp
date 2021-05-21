import { Component, OnInit } from '@angular/core';
import { Writer } from '../models/writer';
import { WritersService } from '../writers.service';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent implements OnInit {

  constructor(private writerService: WritersService) { }

  allWriters: Writer[];
  birthdaySorted: boolean;
  awardsSorted: boolean;
  // ascendingSort: boolean;
  message = 'All writers';

  ngOnInit(): void {
    this.allWriters = this.writerService.getAllWriters();
    this.birthdaySorted = false;
    this.awardsSorted = false;
    // this.ascendingSort = false;
  }

  sortByAwards(): void{
    if (!this.awardsSorted ){
      this.allWriters = this.writerService.sortWritersByAward();
      this.birthdaySorted = false;
      this.awardsSorted = true;
    } else {
      this.allWriters.reverse();
    }

  }
  sortByBirthday(): void{
    if (!this.birthdaySorted){
      this.allWriters = this.writerService.sortWritersByBirthday();
      this.awardsSorted = false;
      this.birthdaySorted = true;
    } else {
      this.allWriters.reverse();
    }
  }
}
