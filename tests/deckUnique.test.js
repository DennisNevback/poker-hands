const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const DeckOfCards = require('../DeckOfCards');
const Card = require('../Card');
const suits = '♥♦♣♠';

test('Test that a single card only occurs once', () => {
  let deck = new DeckOfCards();
  expect(DeckOfCards.deckUnique(deck)).toEqual(52);
});
