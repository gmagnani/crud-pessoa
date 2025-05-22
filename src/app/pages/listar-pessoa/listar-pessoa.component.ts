import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../shared';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from '../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPessoaComponent } from '../modal-pessoa/modal-pessoa.component';

@Component({
  selector: 'app-listar-pessoa',
  imports: [CommonModule, RouterModule, NgxMaskPipe, SharedModule],
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css',
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];
  constructor(
    private pessoaService: PessoaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return this.pessoaService.listarTodos();
  }

  abrirModalPessoa(pessoa: Pessoa) {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }
}
