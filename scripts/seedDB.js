const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/booskDB"
);

const bookSeed = [
  {
    title: "The Hunger Games",
    authors: "Suzanne Collins",
    description:
      "First in the ground-breaking HUNGER GAMES trilogy, this new foiled edition of THE HUNGER GAMES is available for a limited period of time. Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    link: "https://books.google.com/books?id=_zSzAwAAQBAJ&printsec=frontcover&dq=hunger+games&hl=&cd=1&source=gbs_api#v=onepage&q=hunger%20games&f=false",
    image: "https://books.google.com/books?id=_zSzAwAAQBAJ&printsec=frontcover&dq=hunger+games&hl=&cd=1&source=gbs_api#v=onepage&q=hunger%20games&f=false"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });