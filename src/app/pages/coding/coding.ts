import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fiddle } from '../../services/fiddle';
import { User } from '../../services/user';
import { FiddleResponse } from '../../models/fiddle';

@Component({
  selector: 'app-coding',
  imports: [MonacoEditorModule,CommonModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule],
  templateUrl: './coding.html',
  styleUrl: './coding.scss'
})
export class Coding implements OnInit {
  fiddleid:string|undefined = '';
  fiddle:FiddleResponse|undefined;
  fiddleName:string = '';
  fiddleLanguage:string = '';
  code: string = '';
  stdin:string='';
  output:string='Run the code to get the output';

  editorOptions: any = {
  theme: 'vs-dark',
  language: 'javascript',
  automaticLayout: true,
  minimap: { enabled: false },
  scrollBeyondLastLine: false
};

  constructor(private route:ActivatedRoute,private router:Router,public fiddleService:Fiddle,public userService:User){}
  
  ngOnInit(){
    this.fiddleid = this.route.snapshot.paramMap.get('fiddleid') || ''
    if(this.fiddleid){
    this.fiddleService.getFiddleData(this.fiddleid).subscribe({
      next:(fiddle)=>{
        this.fiddle = fiddle;
        this.fiddleName = this.fiddle.name || 'Untitled Playground';
        this.fiddleLanguage = this.fiddle.language || '';
        this.code = this.fiddle.code || this.code;
        this.editorOptions.language = this.fiddle.language || '';
        console.log(this.fiddle);
      },
      error:(error)=>{
        console.log(error)
      }
    })
    }
  }

  save(){
    if(!this.fiddleid || !this.userService.user.userid){
      console.log('fiddleid or userid is missing')
      return
    }
    //Partial - means that only some of the fields are rquired
    //updates the fields from the ui
    const updatedFiddle:Partial<FiddleResponse>={
      fiddleid:this.fiddleid,
      name:this.fiddleName,
      code:this.code,
      language:this.fiddleLanguage,
      userid:this.userService.user.userid
    }

    //sends the upadted fields to the backed
    this.fiddleService.save(updatedFiddle).subscribe({
      next:(response)=>{
        this.fiddle = response;
        this.fiddleName = this.fiddle.name
        this.fiddleLanguage = this.fiddle.language
        this.code = this.fiddle.code
        console.log('fiddle saved',this.fiddle)
      },
      error:(error)=>{
        console.log('error saving the fiddle',error)
      }
    })
  }

  clear(){
    this.fiddleName = '';
    this.fiddleLanguage = '';
    this.code = '';
    this.editorOptions.language = '';
  }

}