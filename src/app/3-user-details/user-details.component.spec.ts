/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {
  }
}
class ActivatedRouteStub {
  private subject = new Subject();  //An observable but with additional features, like value "pushing" method
  push(value){
    this.subject.next(value);
  }

  get params(){     //Looks like a method but is a property of this class, according to the user-details.component (line 13)
      return this.subject.asObservable();
  }

  // params: Observable<any> = empty(); //First test
}


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },                    //Replaces the Router class with the Stub
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should redirect the user to the users page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('Should navigate the user to the not-found page when an invalid user id is passed', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');
    let activatedRoute: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    activatedRoute.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
