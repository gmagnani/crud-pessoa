import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../shared/models/pessoa.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-pessoa',
  imports: [CommonModule],
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css'
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    //return this.pessoaService.listarTodos();
    return[
      new Pessoa(1, "João", 25),
      new Pessoa(2, 'Maria', 30),
      new Pessoa(3, 'Pedro', 30),
      new Pessoa(4, 'Joada', 30),
      new Pessoa(5, 'Luiz', 30),
      
    ];
  }


}
