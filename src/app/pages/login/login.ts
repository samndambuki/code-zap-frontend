import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,RouterModule,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  loginForm: any;

  constructor(private fb:FormBuilder,private userService:User){}
  
  ngOnInit(): void {
  this.loginForm = this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(6)]],
    });
  }

  login(){
    this.userService.login(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}