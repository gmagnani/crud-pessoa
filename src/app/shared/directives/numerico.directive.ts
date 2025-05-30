import { Directive, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numerico]',
  standalone: false,
  providers: [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: NumericoDirective,
  multi: true
  }]
  })
export class NumericoDirective implements ControlValueAccessor {
  constructor(private el: ElementRef) {}
  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    // expressão regular: remove tudo que não é número
    valor = valor.replace(/[\D]/g, '');
    $event.target.value = valor;
    this.onChange(valor);
  }
}
