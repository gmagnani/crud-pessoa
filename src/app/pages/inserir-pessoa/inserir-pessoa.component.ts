import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NumericoDirective } from '../../shared/directives/numerico.directive';
import { MinimoValidatorDirective } from '../../shared/directives/minimo-validator.directive';

@Component({
  selector: 'app-inserir-pessoa',
  imports: [CommonModule, FormsModule, RouterModule, NumericoDirective, MinimoValidatorDirective],
  templateUrl: './inserir-pessoa.component.html',
  styleUrl: './inserir-pessoa.component.css',
})
export class InserirPessoaComponent {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService, private router: Router) {}

  inserir() {
    if (this.formPessoa.valid) {
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(['/pessoas']);
    } else {
      alert('Formulário inválido');
    }
  }
}
