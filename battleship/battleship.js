var view = {displayMessage: function(msg) {
                                     var messageArea = document.getElementById("messageArea");
                                     messageArea.innerHTML = msg;
                                    },
            displayHit: function(location) {
                                 var cell = document.getElementById(location);
                                 cell.setAttribute("class", "hit");
                                },
            displayMiss: function(location) {
                                  var cell = document.getElementById(location);
                                  cell.setAttribute("class", "miss");
                                 }
           };
var model = {boardSize: 7,
             numShips: 3,
             shipLength: 3,
             shipsSunk: 0,           
             ships: [{ locations: [0, 0, 0], // свойство ships это массив с 3-мя объектами,-
                       hits:      ["", "", ""]        // из которых каждый имеет свойства locations,-
                     },                               // hits
                     { locations: [0, 0, 0], 
                       hits:      ["", "", ""] 
                     },
                     { locations: [0, 0, 0], 
                       hits:      ["", "", ""] 
                     }
                    ],
             generateShip: function() {
                                    var direction = Math.floor(Math.random() * 2);
                                    var row, col;
                                    if (direction === 1) {
                                        row = Math.floor(Math.random() * this.boardSize);
                                        col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
                                      } 
                                       else {
                                             row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
                                             col = Math.floor(Math.random() * this.boardSize);
                                            }
                                    var newShipLocations = [];
                                    for (var i = 0; i < this.shipLength; i++) {
                                         if (direction === 1) {
                                             newShipLocations.push(row + "" + (col + i));
                                             } 
                                              else {
                                                    newShipLocations.push((row + i) + "" + col);
                                                   }
                                        }
                                    return newShipLocations;       
                                   },
             collision: function(locations) {
                                 for (var i = 0; i < this.numShips; i++) {
                                      var ship = model.ships[i];
                                      for (var j = 0; j < locations.length; j++) {
                                           if (ship.locations.indexOf(locations[j]) >= 0) {
                                               return true;
                                              }
                                          }
                                     }
                                 return false;
                                } ,                     
             generateShipLocations: function() {
                                             var locations;
                                             for (var i = 0; i < this.numShips; i++) {
                                                  do {
                                                      locations = this.generateShip();
                                                     } 
                                                      while (this.collision(locations));
                                                  this.ships[i].locations = locations;
                                                 }
                                            },       
             fire: function(guess) {
                            for (var i = 0; i < this.numShips; i++) {
                                 var ship = this.ships[i];
                                 var index = ship.locations.indexOf(guess);
                                 if (index >= 0) {
                                     ship.hits[index] = "hit";  // Есть попадание
                                     view.displayHit(guess); //в клетке guess маркер попадания
                                     view.displayMessage("HIT!");// вывести сообщение “HIT!”.
                                     if (this.isSunk(ship)) {
                                         view.displayMessage("You sank my battleship!");//Сообщение,что потопил корабль
                                         this.shipsSunk++;// увеличиваем на 1 число -
                                        }                 // потопленных кораблей
                                     return true;
                                    }
                                }
                             view.displayMiss(guess); //в клетке guess маркер промаха
                             view.displayMessage("You missed."); //Сообщение,что промахнулся  
                             return false;   
                           } ,
             isSunk: function(ship) { 
                              for (var i = 0; i < this.shipLength; i++) {
                                   if (ship.hits[i] !== "hit") {
                                       return false;
                                      }
                                  }
                              return true;
                             }                    
            } ;
var controller = {guesses: 0,
                  processGuess: function(guess) {
                                         var location = parseGuess(guess);
                                         if (location) {
                                             this.guesses++;
                                             var hit = model.fire(location);
                                             if (hit && model.shipsSunk === model.numShips) {
                                                 view.displayMessage("You sank all my battleships, in " +
                                                 this.guesses + " guesses");
                                                }
                                            } 

                                        }
                 };   
function parseGuess(guess) {
                    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
                    if (guess === null || guess.length !== 2) {
                        alert("Oops, please enter a letter and a number on the board.");
                       }
                        else {
                              var firstChar = guess.charAt(0);
                              var row = alphabet.indexOf(firstChar);
                              var column = guess.charAt(1);
                              if (isNaN(row) || isNaN(column)) {
                                  alert("Oops, that isn't on the board.");
                                 } 
                                  else {
                                        if (row < 0 || row >= model.boardSize || 
                                            column < 0 || column >= model.boardSize) {

                                            alert("Oops, that's off the board!");
                                           }
                                            else { 
                                                  return row + column;
                                                 }
                                       }    
                             }
                     return null;       
                    };  
function init() {
          var fireButton = document.getElementById("fireButton");
          fireButton.onclick = handleFireButton;
          var guessInput = document.getElementById("guessInput");
          guessInput.onkeypress = handleKeyPress;
          model.generateShipLocations();
         }  ;  
function handleFireButton() {
          var guessInput = document.getElementById("guessInput");
          var guess = guessInput.value;
          controller.processGuess(guess);
          guessInput.value = "";
         }
function handleKeyPress(e) {
          var fireButton = document.getElementById("fireButton");
          if (e.keyCode === 13) {
              fireButton.click();
              return false;
             }
         }         
window.onload = init;

/*controller.processGuess("A0");
controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");
controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");
controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");   */                                         
/*model.fire("34");
model.fire("24");
model.fire("53");
model.fire("32");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");*/


/*var ships = [{ locations: ["10", "20", "30"], 
               hits:      ["", "", ""] 
             },
             { locations: ["32", "33", "34"], 
               hits:      ["", "hit", ""] 
             },
             { locations: ["63", "64", "65"], 
               hits:      ["hit", "", ""] 
             }
            ];             
var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);  
var ship3 = ships[2];
var hits = ship3.hits;
if (hits[0] === "hit") {
    console.log("Ouch, hit on third ship at location one");
   }            
var ship1 = ships[0];
hits = ship1.hits;
hits[2] = "hit";
if(hits[2]!=="hit"){
   console.log("You do not write" + hits[2] +" at location three");
  }
   else {
         console.log("Ouch, " + hits[2] +" on first ship at location three");
        }*/



/*view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");    
view.displayMessage("Tap tap, is this thing on?");  */     
/*var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
                         guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
                         if (guess < 0 || guess > 6) {
                             alert("Please enter a valid cell number!");
                            } 
                             else {
                                   guesses = guesses + 1;
                                   if (guess == location1 || guess == location2 || guess == location3) {
                                       alert("HIT!");
                                       hits = hits + 1;
                                      }
                                       else {
                                             alert("MISS");
                                            }
                                   if (hits == 3) {
                                       isSunk = true;
                                       alert("You sank my battleship!");
                                      }
                                  }

                        }
var stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3/guesses);
alert(stats);*/