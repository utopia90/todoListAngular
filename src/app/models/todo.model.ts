import { ITodo } from './itodo.interface';

export class Todo implements ITodo {
  mensaje: string;
  fecha: Date;
  gradoImportancia: number;
  completada: boolean;

  // Constructor de la clase Todo
  constructor(mensaje: string, fecha: Date, gradoImportancia: number, completada: boolean) {
    this.mensaje = mensaje;
    this.fecha = fecha;
    this.gradoImportancia = gradoImportancia;
    this.completada = completada;
  }

  /**
   * Método MostrarTODO
   * Sirve para mostrar por consola los datos de un Todo
   * @returns string
   * Cadena de texto con los datos del Todo
   */
  mostrarTodo(): string {
    return `Todo: ${this.mensaje}\n¿Completada?: ${this.completada}`
  }

  /**
   * Método Completar
   * Sirve para cambiar el estado de una tarea de completada a no completada
   * y viceversa
   */
  completar(): void {
    this.completada = !this.completada;
    
  }

}
