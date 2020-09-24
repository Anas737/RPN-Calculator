import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { StackDisplayerComponent } from './components/stackdisplayer/stackdisplayer.component';
import { StackComponent } from './components/stack/stack.component';
import { OperandsComponent } from './components/operands/operands.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    StackDisplayerComponent,
    StackComponent,
    OperandsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
