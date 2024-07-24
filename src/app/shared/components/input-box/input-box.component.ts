import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-input-box',
  templateUrl: './input-box.component.html',
})
export class InputBoxComponent {

  @Input()
  public placeHolder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();


  emitValue(value: string): void {
    this.onValue.emit(value);
  }

}
