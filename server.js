const express = require('express');
const app = express();

const{ Deck, Hand } = require('./Deck')

  app.get('/',(req, res) => {
    const deck = new Deck();
    


    res.send({
      cards: deck.cards,
      //handUser1 : hand1.cards,
      //handUser2 : hand2.cards,
      //handUser3 : hand3.cards,
      //handUser4 : hand4.cards,
      //handUser5 : hand5.cards,
    });
  });
  app.listen(8880, () =>{
  console.log('Server running on port 4001');
  }); //the server object listens on port 8080

