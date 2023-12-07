import { getGreeting } from '../support/app.po';

describe('game', () => {
  beforeEach(() => cy.visit('/'));

  it('renders title', () => {
    cy.findByText('Rock Paper Scissors');
  });

  // TODO: make this test green
  it('should not render outcome without result', () => {
    cy.findByText(/outcome/i).should('not.be.visible');
  });

  describe('draw', () => {
    [
      { selection: "rock" },
      { selection: "paper" },
      { selection: "scissors" },
    ].forEach(data => {

      it(`both players select ${data.selection}`, () => {

        cy.get(`[name="player-one"][value=${data.selection}]`).check()
        cy.get(`[name="player-two"][value=${data.selection}]`).check()

        cy.get('button[type="submit"]').click()

        cy.wait(100)

        cy.findByText(/draw/i)
      })
    })
  })


  describe('players one wins', () => {
    [
      { selectionOne: "rock", selectionTwo: "scissors" },
      { selectionOne: "paper", selectionTwo: "rock" },
      { selectionOne: "scissors", selectionTwo: "paper" },
    ].forEach(data => {

      it(`player one selects ${data.selectionOne}, player two selects ${data.selectionTwo}`, () => {

        cy.get(`[name="player-one"][value=${data.selectionOne}]`).check()
        cy.get(`[name="player-two"][value=${data.selectionTwo}]`).check()

        cy.get('button[type="submit"]').click()

        cy.wait(100)

        cy.findByText(/player-1-wins/i)
      })
    })
  })


  describe('players two wins', () => {
    [
      { selectionOne: "rock", selectionTwo: "paper" },
      { selectionOne: "paper", selectionTwo: "scissors" },
      { selectionOne: "scissors", selectionTwo: "rock" },
    ].forEach(data => {

      it(`player one selects ${data.selectionOne}, player two selects ${data.selectionTwo}`, () => {

        cy.get(`[name="player-one"][value=${data.selectionOne}]`).check()
        cy.get(`[name="player-two"][value=${data.selectionTwo}]`).check()

        cy.get('button[type="submit"]').click()

        cy.wait(100)

        cy.findByText(/player-2-wins/i)
      })
    })
  })
});
