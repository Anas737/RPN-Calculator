import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Stack } from '../models/stack';

@Injectable({
  providedIn: 'root',
})
export class StackService {
  private readonly API_URL: string = 'http://127.0.0.1:5000/rpn';
  private readonly HTTP_OPTIONS: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getOperands(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/op`);
  }

  applyOperand(operand: string, stackId: number): Observable<Stack> {
    return this.http.post<Stack>(
      `${this.API_URL}/op/${operand}/stack/${stackId}`,
      null
    );
  }

  getStacks(): Observable<Stack[]> {
    return this.http.get<Stack[]>(`${this.API_URL}/stack`);
  }

  createStack(): Observable<Stack> {
    return this.http.post<Stack>(`${this.API_URL}/stack`, null);
  }

  getStack(stackId: number): Observable<Stack> {
    return this.http.get<Stack>(`${this.API_URL}/stack/${stackId}`);
  }

  deleteStack(stackId: number): Observable<Stack> {
    return this.http.delete<Stack>(`${this.API_URL}/stack/${stackId}`);
  }

  pushValue(stackId: number, value: number): Observable<any> {
    return this.http.post(
      `${this.API_URL}/stack/${stackId}`,
      { value },
      this.HTTP_OPTIONS
    );
  }
}
