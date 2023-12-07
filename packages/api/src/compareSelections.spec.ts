import { compareSelections } from "./compareSelections"

describe('Compare Players Selection', () => {
  it.each([
    { selections: "rock" },
    { selections: "paper" },
    { selections: "scissors" },
  ])('both players select ($selections), returns draw', ({ selections }) => {
    const result = compareSelections({
      selectionOne: selections,
      selectionTwo: selections
    })

    expect(result).toEqual("draw")
  });

  it.each([
    { selectionOne: "rock", selectionTwo: "scissors" },
    { selectionOne: "paper", selectionTwo: "rock" },
    { selectionOne: "scissors", selectionTwo: "paper" },
  ])('player one selects ($selectionOne), player two selects ($selectionTwo), return player one win', ({ selectionOne, selectionTwo }) => {
    const result = compareSelections({
      selectionOne,
      selectionTwo
    })

    expect(result).toEqual("player-1-wins")
  });

  it.each([
    { selectionOne: "rock", selectionTwo: "paper" },
    { selectionOne: "paper", selectionTwo: "scissors" },
    { selectionOne: "scissors", selectionTwo: "rock" },
  ])('player one selects ($selectionOne), player two selects ($selectionTwo), return player one wins', ({ selectionOne, selectionTwo }) => {
    const result = compareSelections({
      selectionOne,
      selectionTwo
    })

    expect(result).toEqual("player-2-wins")
  });
})