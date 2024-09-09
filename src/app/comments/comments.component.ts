import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg" >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt illum error nisi maiores laudantium, ex quibusdam molestias sed ducimus sapiente. Id nihil minus eaque cumque quibusdam perspiciatis tenetur inventore.</p>
  `,
  styles: `
    img {
      width: 100%;
      heigth: auto;
    }
  
  `
})
export class CommentsComponent {

}
