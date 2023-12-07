type PlayerSelection = {
  selectionOne: string;
  selectionTwo: string
};

const outcomes = ['player-1-wins', 'player-2-wins', 'draw'] as const;
type Outcome = typeof outcomes[number];

export const compareSelections = ({ selectionOne, selectionTwo }: PlayerSelection): Outcome => {
  if (selectionOne === selectionTwo) {
    return outcomes[2]
  }

  if (selectionOne === "rock") {
    if (selectionTwo === "scissors") return outcomes[0]
    if (selectionTwo === "paper") return outcomes[1]
  }

  if (selectionOne === "paper") {
    if (selectionTwo === "rock") return outcomes[0]
    if (selectionTwo === "scissors") return outcomes[1]
  }

  if (selectionOne === "scissors") {
    if (selectionTwo === "paper") return outcomes[0]
    if (selectionTwo === "rock") return outcomes[1]
  }
}