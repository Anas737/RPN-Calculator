import { Component, OnInit } from '@angular/core';

// Services
import { StackService } from './services/stack.service';
// Models
import { Stack } from './models/stack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RPN Calculator';

  stacks: Stack[];
  selectedStack: Stack;

  constructor(private stackService: StackService) {}

  ngOnInit(): void {
    this.stackService.getStacks().subscribe((stacks) => {
      this.stacks = stacks;
    });
  }

  onCreate(): void {
    this.stackService.createStack().subscribe((createdStack) => {
      this.stacks = [...this.stacks, createdStack];
    });
  }

  onSelect(stack: Stack): void {
    this.selectedStack = stack;
  }

  onApply(data: any): void {
    const operand: string = data.operand;
    const stackId: number = data.stackId;

    this.stackService
      .applyOperand(operand, stackId)
      .subscribe((updatedStack) => {
        const updatedStackIndex = this.stacks.findIndex(
          (stack) => stack.id === updatedStack.id
        );

        this.stacks[updatedStackIndex] = updatedStack;
        this.selectedStack = updatedStack;
      });
  }

  onPush(data: any): void {
    const stackId: number = data.stackId;
    const value: number = data.value;

    this.stackService.pushValue(stackId, value).subscribe((updatedStack) => {
      const updatedStackIndex = this.stacks.findIndex(
        (stack) => stack.id === updatedStack.id
      );

      this.stacks[updatedStackIndex] = updatedStack;
      this.selectedStack = updatedStack;
    });
  }

  onDelete(stackId: number): void {
    this.stackService.deleteStack(stackId).subscribe((deletedStack) => {
      this.stacks = this.stacks.filter((stack) => stack.id !== deletedStack.id);
      this.selectedStack = null;
    });
  }
}
