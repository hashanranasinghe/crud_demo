const axios = require("axios");
const e = require("express");

exports.homeRoute = (req, res) => {
  axios.get("http://localhost:3000/api/users").then(function (response) {
    console.log(response.data);
    res.render("index", { users: response.data });
  });
};

exports.addRoute = (req, res) => {
  res.render("add_user");
};

exports.updateRoute = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userData) {
      console.log(req.query.id);

      res.render("update_user", { user: userData.data });
      
    })
    .catch((err) => {
        
        console.log(err)
      res.send(err);
    });
};
