import { Observable } from 'rxjs';
import { SharedService } from './../shared/shared.service';
import { userDetails } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { GetUsers } from '../services/getUser.service';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  users: Observable<userDetails[]>;

  message: String;

  constructor(private getUser: GetUsers,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.sharedService.searchText.subscribe(data => {
      this.getUserData(data);

    })


  }
  getUserData(txt?) {

    this.users = this.getUser.GetUsersFromApi(txt);


  }
  // search(txt) {

  //   this.users = this.users.pipe(map(result => result.filter(one => one.name.toLowerCase().includes(txt.toLowerCase()))));

  // }







}
