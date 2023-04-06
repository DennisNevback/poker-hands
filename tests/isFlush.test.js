const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isFlush returns truthy if flush', () => {
  for (let suit of suits) {
    let hand = new Hand(suit + '2', suit + '6', suit + '4', suit + '8', suit + '7');
    expect(CompareHands.isFlush(hand)).toBeTruthy();
  }
});

test('check that isFlush returns falsey if not flush', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isFlush(hand)).toBeFalsy();
});

test('check that isFlush returns a higher score for a stronger hand (if two hands but with flush)', () => {
  let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♦Q', '♦A');
  let hand1Score = CompareHands.isFlush(hand1);
  let hand2Score = CompareHands.isFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});