import { Component, Input } from '@angular/core';
import { Pessoa } from '../../shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskPipe } from 'ngx-mask';
@Component({
  selector: 'app-modal-pessoa',
  standalone: true,
  imports: [NgxMaskPipe],
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.css'],
})
export class ModalPessoaComponent {
  @Input() pessoa!: Pessoa;
  constructor(public activeModal: NgbActiveModal) {}
}
