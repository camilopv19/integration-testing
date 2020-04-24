import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  // let component: DirectiveHostComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });
  
  it('Should highlight the first element with cyan',() => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];   //First element: [0]
    
    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });
  it('Should highlight the second element with the default color',() => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];   //Second element: [1]
    let directive = de.injector.get(HighlightDirective);
    
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});

