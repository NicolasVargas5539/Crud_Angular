import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //comunicamos la appo
import { Observable } from 'rxjs'; //observa lo que sucede con la información
import { Empleado } from './Empleado';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost/empleados/'; //Api CRUD
  constructor(private clienteHttp: HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosEmpleado);
  }

  obtenerEmpleados() {
    return this.clienteHttp.get(this.API);
  }

  borrarEmpleados(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?borrar=" + id);
  }

  obtenerEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?consultar=" + id);
  }

  editarEmpleado(id: any, datosEmpleado: any): Observable<any> {
    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosEmpleado);
  }
}

