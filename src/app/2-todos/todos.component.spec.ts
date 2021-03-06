/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent ],
      providers: [ TodoService]
    })
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  }));

  // it('Should load todos from the server', async(() => {    // Method 1: Using async
  it('Should load todos from the server', fakeAsync(() => {
    let service = TestBed.get(TodoService); 
    spyOn(service,'getTodosPromise').and.returnValue(Promise.resolve([1,2,3]));

    fixture.detectChanges();
    tick();                                       //Simulates the passing of time

    expect(component.todos.length).toBe(3);       // _ functions are executed

    /*  Method 1: Using async */
    // fixture.whenStable().then(() => {               //Beause I'm expecting a Promise, whenStable returns a promise after all async _
    //   expect(component.todos.length).toBe(3);       // _ functions are executed
    // })
  }));

  //Old version: TESTING AN OBSERVABLE
  // it('Should load todos from the server', () => {
  //   let service = TestBed.get(TodoService);  // TestBed.get looks for the dependency injection at the
  //   //                                           Module level: app.module.ts --> Providers
  //   spyOn(service,'getTodos').and.returnValue(from([[1,2,3]]));
  //   fixture.detectChanges(); // This calls the ngOnInit method! so, for the getTodos() to be mocked, it should be populated before

  //   expect(component.todos.length).toBe(3);
  // });

  
});
