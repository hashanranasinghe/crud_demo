var userDb = require("../model/model");

//create and save new user

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty." });
    return;
  }

  const user = new userDb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  console.log(req.body);

  user
    .save(user)
    .then((data) => {
      res.redirect("/add_user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went to wrong",
      });
    });
};
exports.find = (req, res) => {
  if (req.query.id) {
    console.log(req.query.id);
    userDb
      .findById(req.query.id)
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: "not found a user" });
        } else {
          res.send(user);
        }
      })
      .catch((err) => {
        res.status(500).send({
          massage: err.message || "Something went to wrong",
        });
      });
  } else {
    userDb
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          massage: err.message || "Something went to wrong",
        });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data to update cannot be empty." });
    return;
  }

  const id = req.params.id;
  userDb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "cannot update user with ${id}" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        massage: err.message || "Something went to wrong",
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  userDb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "cannot delete user with ${id}" });
      } else {
        res.send({ message: "user was deleted successefully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        massage: err.message || "Something went to wrong",
      });
    });
};
