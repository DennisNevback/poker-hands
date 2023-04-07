const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isFourOfAKind returns truthy', () => {
  let hand = new Hand('♥Q', '♦Q', '♣Q', '♥5', '♠Q');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('check that isFourOfAKind returns falsy', () => {
  let hand = new Hand('♥Q', '♦Q', '♣Q', '♥5', '♠K');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});