import { VoterComponent } from './voter.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Should create the voter component', () => {
    expect(component).toBeTruthy();
  });

  it('Should render total votes',() => {
    component.myVote = 1;
    component.othersVote = 20;
    fixture.detectChanges();  //Compiles the HTML with the new values: myVote and othersVote

    let debugEl = fixture.debugElement.query(By.css('.vote-count')); //query returns true if some conditions are met, in this case: 
    //                                                  By.css which looks for a specific class-->see the html
    //                                                  By.directive(VoterComponent)
    //                  .queryAll(...all that matches this condition..)
    let el: HTMLElement = debugEl.nativeElement; // the property nativeElement is of type 'any', that's why the definition to HTMLElement

    expect(el.innerText).toContain('21');
  });

  it('Should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes.highlighted).toBeTruthy();
    // expect(de.classes['highlighted']).toBeTruthy();
  });
  
  it('Should increase the total votes if I click the upvote button', () => {
    let btn = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    btn.triggerEventHandler('click',null);

    expect(component.totalVotes).toBe(1);
  });
});
