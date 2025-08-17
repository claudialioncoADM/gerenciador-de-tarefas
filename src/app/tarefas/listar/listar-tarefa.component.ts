import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  standalone: false,
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.css'
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos()

  }
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos()
  }
}




