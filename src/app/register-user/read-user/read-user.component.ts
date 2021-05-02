import { RegisterUserService } from '../register-user.service';
import { RegisterUser } from '../register-user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  registerUser: RegisterUser[]
  displayedColumns = ['id', 'name', 'email', 'action']
  
  constructor(private registerUserService: RegisterUserService) { }

  ngOnInit(): void {
    this.registerUserService.read().subscribe(registerUser => {
      this.registerUser = registerUser
    })
  }

}
