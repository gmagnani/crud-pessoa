import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../shared/models/pessoa.model';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-listar-pessoa',
  imports: [CommonModule, RouterModule],
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
    return this.pessoaService.listarTodos();
    
  }


}
