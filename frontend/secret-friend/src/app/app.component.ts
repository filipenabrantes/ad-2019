import { Component, OnInit } from '@angular/core';
import { FriendsService } from './core/http/services/friends.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'secret-friend';
  public friends

  constructor(private friendsService: FriendsService) {

  }

  ngOnInit() {
    this.getFriends();
  }

  getFriends() {
    this.friendsService.getFriends()
      .subscribe((res) => {
        this.friends = res
      }, (error) => {
        console.log(error);
      })
  }

  sortFriends() {
    this.friendsService.sortFriends()
      .subscribe((res) => {
        this.friends = res
        console.log(res);
      }, (error) => {
        console.log(error);
      })
  }
}
