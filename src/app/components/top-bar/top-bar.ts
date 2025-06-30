import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { User } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [MatButtonModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar implements OnInit {
  constructor(private userService:User,private router:Router){}
  ngOnInit(): void {
    if(this.userService.user == undefined){
      let str = localStorage.getItem('user');
      if(str!==null){
      this.userService.user = JSON.parse(str);
      }
      else{
      this.router.navigate(['/login']);
      }
    }
  }
}
