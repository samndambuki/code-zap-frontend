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
  imports: [MonacoEditorModule,CommonModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule,],
  templateUrl: './coding.html',
  styleUrl: './coding.scss'
})
export class Coding implements OnInit {
  fiddleid:string|undefined = '';
  fiddle:FiddleResponse|undefined;
  constructor(private route:ActivatedRoute,private router:Router,public fiddleService:Fiddle,public userService:User){}
  ngOnInit(){
    this.fiddleid = this.route.snapshot.paramMap.get('fiddleid') || ''
    this.fiddleService.getFiddleData(this.fiddleid).subscribe({
      next:(fiddle)=>{
        this.fiddle = fiddle;
         console.log(this.fiddle);
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
    editorOptions: any = {
    theme: 'vs-dark',
    language: 'javascript',
    automaticLayout: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false
  };
  code: string = 'function hello() {\n\tconsole.log("Hello world!");\n}';
}
