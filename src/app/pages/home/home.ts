import {Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Fiddle } from '../../services/fiddle';
import { User } from '../../services/user';
import { Router, RouterModule } from '@angular/router';
import { FiddleResponse } from '../../models/fiddle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatIconModule,MatButtonModule,CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  fiddles:FiddleResponse[] = [];
  public fiddleService = inject(Fiddle);
  public userService = inject(User);
  public  router = inject(Router);
  
  constructor(){}

  ngOnInit(){
    this.fiddleService.getFiddles().subscribe({
      next:(response)=>{
        console.log(response)
        this.fiddles = response;
        console.log("fiddles:", this.fiddles);
      },
      error:(error)=>{
        console.log('error getting fiddles',error);
      }
    })
  }

  createNewFiddle(){
    this.fiddleService.newFiddle().subscribe({
      next:(newFiddle)=>{
        console.log('new fiddle',newFiddle);
      },
      error:(error)=>{
        console.log('error creating fiddle',error);
      }
    })
  }
}
