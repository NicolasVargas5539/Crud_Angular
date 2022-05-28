import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  //Forms Groups y Builder
  formularioDelEmpleado: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
  ) {
    this.formularioDelEmpleado = this.formulario.group({
      nombre: [''],
      correo: ['']
    })
  }
  ngOnInit(): void {
  }

  enviarDatos(): any { //cualquier dato
    console.log('Aquí me presionaste.')
    console.log(this.formularioDelEmpleado.value)

    this.crudService.AgregarEmpleado(this.formularioDelEmpleado.value).subscribe(respuesta => {
      //regresa a la url de lista de empleado
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
}
