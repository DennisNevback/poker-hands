const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraightFlush returns truthy', () => {
  let hand = new Hand('♥K', '♥Q', '♥J', '♥T', '♥9');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that isStraightFlush returns falsy', () => {
  let hand = new Hand('♥K', '♥Q', '♥6', '♥T', '♥9');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});