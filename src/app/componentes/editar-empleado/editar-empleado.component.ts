import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDelEmpleado: FormGroup;
  elID: any;

  constructor(
    private formulario: FormBuilder,
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    private ruteador: Router

  ) {
    this.elID = this.activeRoute.snapshot.paramMap.get('id'); //capturamos el dato y lo guardamos en id
    console.log(this.elID);
    this.crudService.obtenerEmpleado(this.elID).subscribe(
      respuesta => {
        console.log(respuesta)
        this.formularioDelEmpleado.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo']
        })
      });
    this.formularioDelEmpleado = this.formulario.group({
      nombre: [''],
      correo: ['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log(this.elID);
    console.log(this.formularioDelEmpleado.value);

    this.crudService.editarEmpleado(this.elID, this.formularioDelEmpleado.value).subscribe(() => {
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
}
