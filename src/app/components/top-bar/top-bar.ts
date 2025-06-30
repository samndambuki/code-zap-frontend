import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { User } from '../../services/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [MatButtonModule,MatMenuModule,MatIconModule,CommonModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar implements OnInit {
  constructor(public userService:User,private router:Router){}
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
  logout(){
    this.userService.user=undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
