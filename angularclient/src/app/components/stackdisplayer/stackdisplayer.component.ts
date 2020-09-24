import { Component, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Stack } from '../../models/stack';

@Component({
  selector: 'app-stackdisplayer',
  templateUrl: './stackdisplayer.component.html',
  styleUrls: ['./stackdisplayer.component.css'],
})
export class StackDisplayerComponent {
  title: string = 'Stacks';

  @Input()
  stacks: Stack[];

  @Output()
  createStack: EventEmitter<Stack> = new EventEmitter<Stack>();

  @Output()
  selectStack: EventEmitter<Stack> = new EventEmitter<Stack>();

  @Output()
  deleteStack: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  onCreate(): void {
    this.createStack.emit();
  }

  onSelect(stack: Stack): void {
    this.selectStack.emit(stack);
  }

  onDelete(stackId: number): void {
    this.deleteStack.emit(stackId);
  }
}
