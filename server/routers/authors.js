const express = require("express");
const AuthorModule = require("../models/authors");
const router = express.Router();

router.get("/name", (req, res) => {
  AuthorModule.distinct('name', (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
      console.log( res.name)

    }
  });
});

router.get("/", (req, res) => {
  AuthorModule.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
router.post("/new", async (req, res) => {
  const author = req.body;
  const newAuthor = new AuthorModule(author);
  await newAuthor.save();
  res.json(author);
});
router.delete("/delete/:id", async (req, res) => {
  await AuthorModule.findByIdAndDelete(req.params.id);
});
router.put("/update/:id", async (req, res) => {
  author = await AuthorModule.findById(req.params.id);

  try {
    author.name = req.body.name;
    author.age = req.body.age;
    author.country = req.body.country;

    await author.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
