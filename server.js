var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//This is all of the gets
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation_view.html"));
});

app.get("/view/reservations", function(req, res) {
    return res.json(reservationList);
  });

  app.get("/view/waitList", function(req, res) {
    return res.json(waitingList);
  });

  app.post("/view/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newParty = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newParty.routeName = newParty.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newParty);
  
    reservationList.push(newParty);
  
    res.json(newParty);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  