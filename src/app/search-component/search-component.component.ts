import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from "../shared/shared.service"
@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {


  constructor(private shared: SharedService) { }


  // clearText() {
  //   this.searchText.next('');
  // }

  ngOnInit(): void {

    // console.log(this.info);

  }
  setSearchText(txt) {
    console.log("txt", txt);
    this.shared.searchText.next(txt);
  }



}
