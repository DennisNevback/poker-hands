const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});