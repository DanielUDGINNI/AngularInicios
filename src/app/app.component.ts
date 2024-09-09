import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from "./user/user.component";
import { CommentsComponent } from "./comments/comments.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  //template: '<h1>Hola angular desde {{ city }}</h1><app-user></app-user> ',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  // Agregado
  city = 'Barcelona';
}
