import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Class39';
  
  numbs: any[] = [];
  onClick() {
    this.numbs = []
    for(let i=0; i<10; i++){
      let x =  Math.floor(Math.random() * 100) 
      this.numbs.push(x)
    }
  } 
}
