import { Component, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Stack } from '../../models/stack';

@Component({
  selector: 'app-operands',
  templateUrl: './operands.component.html',
  styleUrls: ['./operands.component.css'],
})
export class OperandsComponent {
  @Input()
  operands: string[];

  @Input()
  selectedStack: Stack;

  @Output()
  applyOperand: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onApply(e) {
    if (!this.selectedStack) return;

    const operand = e.target.name;
    console.log(operand);
    this.applyOperand.emit(operand);
  }
}
