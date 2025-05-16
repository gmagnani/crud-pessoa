import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[numerico]',
})
export class NumericoDirective {
  constructor() {}

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    // expressão regular: remove tudo que não é número
    valor = valor.replace(/[\D]/g, '');
    $event.target.value = valor;
  }
}
