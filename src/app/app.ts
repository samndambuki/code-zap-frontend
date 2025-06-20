import { Component } from '@angular/core';
import { TopBar } from "./components/top-bar/top-bar";
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatButtonModule, TopBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'code-zap';
}
