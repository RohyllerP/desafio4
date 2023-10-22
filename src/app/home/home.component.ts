import { Component } from '@angular/core';
import { productos } from '../productos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos = productos;
}
