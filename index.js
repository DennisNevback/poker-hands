const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

// ♥♦♣♠

let hand1 = new Hand('♥5', '♠5', '♦5', '♥A', '♥A');
let hand2 = new Hand('♠4', '♦4', '♣4', '♦K', '♣K');
console.log(CompareHands.comparer(hand1, hand2));

