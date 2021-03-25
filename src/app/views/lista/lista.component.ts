import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  // Propiedades del componente
  mensaje: string = ''; // Mensaje nuevo por defecto para la tarea nueva
  fecha: Date = new Date(); // Fecha nueva por defecto para la tarea nueva
  gradoImportancia: number = 4; // Grado de importancia por defecto para la tarea nueva
  // Lista de Tareas del componente
  tareas: Todo[] = []; 
  // Lista(Array) de Todos inicializada vacía
  tareasCompletadas:  Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  borrarTareaPadre($e) {
    this.tareasCompletadas.unshift($e);
    this.tareas.splice(this.tareas.indexOf($e), 1);
  }



 


  /**
   * Método crearTarea
   * Sirve para crear una nueva tarea y añadirla
   * a la lista de tareas del componente
   */
  crearTarea(): void {
    // Creamos la tarea
    let nuevaTarea = new Todo(this.mensaje, this.fecha, this.gradoImportancia, false);
    // La añadimos al final de la lista de tareas a través de push()

    this.tareas.push(nuevaTarea);
  
  }



}
