const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isFullHouse returns truthy', () => {
  let hand = new Hand('♥Q', '♦Q', '♣Q', '♥5', '♠5');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('check that isFullHouse returns truthy', () => {
  let hand = new Hand('♥Q', '♦Q', '♣A', '♥5', '♠5');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});