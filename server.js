const express = require('express');
const app = express();

const{ Deck, Hand } = require('./Deck')

  app.get('/',(req, res) => {
    const deck = new Deck();
    const hand1 = new Hand(deck,5);
    const hand2 = new Hand(deck,5);
    const hand3 = new Hand(deck, 5);
    const hand4 = new Hand(deck, 5);
    const hand5 = new Hand(deck, 5);


    res.send({
      cards: deck.cards,
      handUser1 : hand1.cards,
      handUser2 : hand2.cards,
      handUser3 : hand3.cards,
      handUser4 : hand4.cards,
      handUser5 : hand5.cards,
    });
  });
  app.listen(8880, () =>{
  console.log('Server running on port 4001');
  }); //the server object listens on port 8080

