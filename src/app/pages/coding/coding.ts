import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coding',
  imports: [MonacoEditorModule,CommonModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule,],
  templateUrl: './coding.html',
  styleUrl: './coding.scss'
})
export class Coding implements OnInit {
  constructor(){}
  ngOnInit(){}
    editorOptions: any = {
    theme: 'vs-dark',
    language: 'javascript',
    automaticLayout: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false
  };
  code: string = 'function hello() {\n\tconsole.log("Hello world!");\n}';
}
