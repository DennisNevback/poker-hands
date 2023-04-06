const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isPair returns truthy', () => {
  let hand = new Hand('♥Q', '♦9', '♣7', '♥5', '♦6');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});