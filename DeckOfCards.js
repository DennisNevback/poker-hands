const Card = require('./Card');
const Hand = require('./Hand');


module.exports = class DeckOfCards {

  constructor() {
    this.createDeck();
    this.shuffle();
  }

  createDeck() {
    this.cards = [];
    for (let suit of '♥♦♣♠') {
      for (let rank of '23456789TJQKA') {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    let array = this.cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  dealHand() {
    return new Hand(...this.cards.splice(0, 5));
  }

  discardCards(string) { // input ser ut ex: H5, S8, SK
    string.splice(', ')
  }

  static deckUnique(deck) {
    let counter = 0;
    let deck2 = deck;
    for (let i = 0; i < deck.cards.length; i++) {
      for (let j = 0; j < deck2.cards.length; j++) {
        if (deck.cards[i] == deck2.cards[j])
          counter++;
      }
    }
    if (counter == 52) {
      console.log(counter);
      return counter;
    }
    else {
      return 0;
    }
  }
}