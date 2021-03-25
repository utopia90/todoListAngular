import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // El Input que se va a pasar desde el Padre (ListComponent)
  // Si tuviéramos Angular Strict Mode nos obligaría adarle un valor por defecto
  @Input() tarea: Todo;
  @Output() borrarTareaHijo: EventEmitter<Todo> = new EventEmitter<Todo>();
  
 

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Método completar
   * Sirve para cambiar el estado de la tarea del componente
   * Llamamos al método de la clase "completar()"
   */
  completar(): void {
    this.tarea.completar();
    this.borrarTareaHijo.emit(this.tarea);
  }

  /**
   * Método getColor
   * Sireva para darle color al componente
   * @return string
   * El color de la tarea según su gradoImportancia
   */
  getColor(): string {
    switch (this.tarea.gradoImportancia) {
      case 1:
        return '#EF4816';
      case 2:
        return '#EA631F';
      case 3:
        return '#EEAE38';
      default:
        return '#57B9B0';
    }
  }



}
