const express = require("express");
const db = require("./userDb");

const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  db.getById(req.params.id)
    .then((user) => {
      // if (user) {
      //   req.user = user;
      // } else {
      //   res.status(400).json({ message: "invalid user id" });
      // }
      user
        ? (req.user = user)
        : res.status(400).json({ message: "invalid user id" });
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to validate user ID", err });
    });
}

function validateUser(req, res, next) {
  req.body === {} || !req.body
    ? res.status(400).json({ message: "missing user data" })
    : !body.name
    ? res.status(400).json({ message: "missing required name field" })
    : next();
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
