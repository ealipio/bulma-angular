import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: any;
  public order = 'title';
  public userFilter: any = { title: '' };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.books = this.dataService.getBooks();
  }
  add() {
    console.error('You can\'t add data in this DEMO');
  }

}
