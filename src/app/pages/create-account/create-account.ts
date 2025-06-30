import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-create-account',
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule,RouterModule,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.scss'
})
export class CreateAccount implements OnInit {
createAccountForm:any;
constructor(private fb:FormBuilder,public userService:User){}
ngOnInit(): void {
  this.createAccountForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
}

create(){
  return this.userService.createAccount(this.createAccountForm.value).subscribe({
    next:(res)=>{
      console.log('account created successfully',res)
    },
    error:(err)=>{
      console.log('error creating account',err)
    }
  })
}

}
