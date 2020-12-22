var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById('messageAea');
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}

var model = {
  boardSize : 7,
  numShips : 3,
  shipLength : 3,
  shipsSunk : 0,

  ships : [
    {locations: ["06","16","26"], hits: ["", "", ""]},
    {locations: ["24","34","44"], hits: ["", "", ""]},
    {locations: ["10","11","12"], hits: ["", "", ""]}
  ],

  fire : function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var locations = ship.locations;
      // console.log('ship: '+ i + ' locations: '+ locations);
      var index = locations.indexOf(guess);
      if (index >= 0) {
       console.log('we have a hit!');
       view.displayHit(guess);
       view.displayMessage(guess);
        ship.hits[index] = "hit";
        if (this.isSunk(ship)) {
          console.log('ship sunk');
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage(guess);
    return false;
  },

  isSunk : function(ship) {
    for (var i = 0; i < this.shipLength; i ++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    console.log('ship is sinking');
    return true;
  }

};


// console.log(model.fire('10'));
// model.fire("53");
// model.fire('06');
// model.fire('16');
// model.fire('26');
// model.fire('34');
// model.fire('24');
// model.fire('44');
// model.fire('12');
// model.fire('11');
// model.fire('10');

var controller = {
  guesses: 0,

  processGuess: function (guess) {
  //  more code will follow
  }

};

function parseGuess(guess) {
  var alphabet = ["A", "B","C","D","E", "F", "G"];

  if (guess === null || guess.length != 2) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);
    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that's not on the board.");
    } else if (row <0 || row > model.boardSize || column < 0 || column > model.boardSize) {
      alert("Oops, " + guess +  " that's not on the board.");
    } else {
      return row + column;
    }
  }
  return null;
}


console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0"));
console.log(parseGuess("A7"));
