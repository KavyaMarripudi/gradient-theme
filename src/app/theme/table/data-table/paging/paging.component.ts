import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  rowsClient = [];

  constructor() {
    this.fetch((data) => {
      this.rowsClient = data;
      console.log("length",this.rowsClient.length);
    });
  }

  ngOnInit() {
    
  }
  onPage(event){
    console.log("event : ",event);
  }

  fetch(cb) {
    console.log("cb cb cb cb : ",cb);
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    console.log("cb cb cb cb : ",req);
    req.send();
  }

}
