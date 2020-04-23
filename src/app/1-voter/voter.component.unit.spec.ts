/** File made for unit tests as example in this Integration testing module */
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  var component: VoterComponent;

  beforeEach(() => {
    component = new VoterComponent();
  });

  it('Should raise voteChanged event when upvoted', () => {
    //Arrange
    let votes = null;
    component.vote.subscribe((_votes) => votes = _votes);

    //Act
    component.upVote();

    //Assert
    expect(votes['myVote']).toBe(1);
  });
});