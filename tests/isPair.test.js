const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isPair returns truthy if pair', () => {
  let hand = new Hand('♥9', '♦9', '♣7', '♥5', '♦6');
  expect(CompareHands.isPair(hand)).toBeTruthy();
});