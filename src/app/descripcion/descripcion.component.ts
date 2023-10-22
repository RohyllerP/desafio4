import { Component, OnInit } from '@angular/core';
import { productos } from '../productos';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],

})
export class DescripcionComponent {
  constructor(private activatedRoute: ActivatedRoute) { }
  productos = productos;
  id = this.activatedRoute.snapshot.params['id'];
  product = {
    id: this.id,
    nombre: productos[this.id - 1].nombre,
    precio: productos[this.id - 1].precio,
    precioBs: productos[this.id - 1].precioBs,
    tipoEnvio: productos[this.id - 1].tipoEnvio,
    imagenUrl: productos[this.id - 1].imagenUrl
  };

}
