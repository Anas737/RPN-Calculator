import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Services
import { StackService } from '../../services/stack.service';
// Models
import { Stack } from '../../models/stack';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  title: string = 'RPN Calculator';

  operands: string[];
  inputValue: string = '';

  @Input()
  selectedStack: Stack;

  @Output()
  applyOperand: EventEmitter<{
    operand: string;
    stackId: number;
  }> = new EventEmitter<{ operand: string; stackId: number }>();

  @Output()
  pushValue: EventEmitter<{
    stackId: number;
    value: number;
  }> = new EventEmitter<{
    stackId: number;
    value: number;
  }>();

  constructor(private stackService: StackService) {}

  ngOnInit(): void {
    this.stackService.getOperands().subscribe((operands) => {
      this.operands = operands;
    });
  }

  onChange(e): void {
    if (isNaN(parseFloat(e.target.value))) return;

    this.inputValue = e.target.value;
  }

  onApply(operand): void {
    this.applyOperand.emit({ operand, stackId: this.selectedStack.id });
  }

  onPush(): void {
    if (isNaN(parseFloat(this.inputValue)) || !this.selectedStack) return;

    this.pushValue.emit({
      stackId: this.selectedStack.id,
      value: parseFloat(this.inputValue),
    });

    this.inputValue = '';
  }
}
