import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	authors;
  constructor() {
  	this.authors = [{name : "All"},{name : "victor"	},{name : "Jean"},{name : "Albert"}];
  }
}
