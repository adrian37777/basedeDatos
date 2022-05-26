import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input() progress: number = 20;
  @Input() btnClass: string = 'btn-primary';
  progreso = 0;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  get getPorcentage() {
    return `${this.progress}%`;
  }

  cambiarValor(valor: number) {
    let total = this.progress + valor;
    if (this.progress >= 100 && valor >= 0) {
      total = this.progress = 100;
    }
    if (this.progress <= 0 && valor < 0) {
      total = this.progress = 0;
    }

    this.valorSalida.emit(total);
    return (this.progress = total);
  }

  onChangue(nuevoValor: number) {
    this.progreso = nuevoValor;
    if (nuevoValor >= 100) {
      this.progress = 100;
    } else if (nuevoValor <= 0) {
      this.progress = 0;
    } else {
      this.progress = nuevoValor;
    }

    this.valorSalida.emit(this.progress);
  }
}
