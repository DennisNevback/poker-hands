const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that twoPair returns truthy is two pair', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠2');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});