import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Stack } from '../../models/stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent {
  @Input()
  stack: Stack;

  @Output()
  selectStack: EventEmitter<Stack> = new EventEmitter<Stack>();

  @Output()
  deleteStack: EventEmitter<Stack> = new EventEmitter<Stack>();

  constructor() {}

  onSelect(stack) {
    this.selectStack.emit(stack);
  }

  onDelete(stack) {
    this.deleteStack.emit(stack.id);
  }
}
