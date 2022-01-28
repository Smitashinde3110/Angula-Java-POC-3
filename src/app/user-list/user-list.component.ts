import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(userId: number){
    this.router.navigate(['user-details', userId]);
  }

  updateUser(userId: number){
    this.router.navigate(['update-user', userId]);
  }

  deleteUser(userId: number){
    this.userService.deleteUser(userId).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

}
