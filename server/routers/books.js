const express = require("express");
const BookModule = require("../models/books");
const router = express.Router();

router.get("/", (req, res) => {
  BookModule.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
router.post("/new", async (req, res) => {
  const book = req.body;
  const newBook = new BookModule(book);
  await newBook.save();
  res.json(book);
});
router.delete("/delete/:id", async (req, res) => {
  await BookModule.findByIdAndDelete(req.params.id);
});
router.put("/update/:id", async (req, res) => {
  book = await BookModule.findById(req.params.id);

  try {
    book.title = req.body.title;
    book.startDate = req.body.startDate;
    book.finishDate = req.body.finishDate;
    book.page = req.body.page;
    book.author = req.body.author;

    await book.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
