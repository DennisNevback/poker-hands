const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

// ♥♦♣♠

let hand1 = new Hand('♥4', '♠4', '♦2', '♥5', '♥K');
let hand2 = new Hand('♠A', '♦2', '♣3', '♦5', '♣K');
console.log(CompareHands.comparer(hand1, hand2));

