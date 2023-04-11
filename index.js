const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

// ♥♦♣♠

let deck = new DeckOfCards();
let hand1 = deck.dealHand();
let hand2 = deck.dealHand();
/*let hand1 = new Hand('♥5', '♠5', '♦5', '♥A', '♥A');
let hand2 = new Hand('♠4', '♦4', '♣4', '♦K', '♣K');*/
console.log(hand1);
console.log(hand2);
console.log(CompareHands.comparer(hand1, hand2));

static gameloop() {
  let hand1 = deck.dealHand();
  let hand2 = deck.dealHand();
  console.log('player1 hand: ' + hand1);
  player1Discard = prompt('Which cards would you like to discard?');
}