// $(document).ready(function(){
// console.log('java script is loading')
// });

// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

// Pseudocode:
// computer generates random number visible 19-120
// computer affects a random number to each crystal 1-12
// player click on a crystal -> find a number
// each click for each crystal is stored and added -> store and add
// if player reaches the # he wins, if he goes above,he looses -> compare

var targetNumber = 0;
var playerNumber = 0; // Guess added

var crystalVal;
var crystalRed;
var crystalBlue;
var crystalOrange;
var crystalGreen;

var wins = 0;
var losses = 0;

$(document).ready(function(){

    function startGame() {
    reset();

    // function myFunction() {
    //     document.getElementById('#ranNumb').innerHTML = 
    //     Math.floor(Math.random() * 120) + 19;
    //     console.log(targetNumber);
    // }


    // Generate Random Number for Target Number
    targetNumber = Math.floor(Math.random() * 120) + 19 ;
        
        // targetNumber = parseInt(targetNumber);
        console.log(targetNumber);

        // Print to Target Placeholder
        $("#ranNumb").text(targetNumber);
        
        // Print to Score Placeholder
        $("#score").text(playerNumber);
        

        // Each crystal gets a random value 

            for (var i = 1; i < 5; i++) {
                crystalVal = [Math.floor(Math.random() * 12) + 1] ;
                console.log("crystalVal = " + crystalVal);

                // Push random CrystalVal into Crystal Vals array
                crystalVals.push(crystalVal);
                console.log("crystalVals = " + crystalVals);

            }
        }
     //. Start Game Function 


    // When Clicking Crystal One Assign Value of CrysalVals[0]
    $(".crystal1").on("click", function() {
        
        crystalRed = parseInt(crystalVals[0]);
        yourScore += crystalRed;
        console.log("crystalRed = " + crystalRed);
        console.log("yourScore = " + yourScore);
        $("#your-score").text(yourScore);
        winLoss();

    });

    

    $(".crystal2").on("click", function() {
        
        crystalBlue = parseInt(crystalVals[1]);
        yourScore += crystalBlue;
        console.log("yourScore = " + yourScore);
        $("#your-score").text(yourScore);
        winLoss();
    });

    $(".crystal3").on("click", function() {
        
        crystalOrange = parseInt(crystalVals[2]);
        yourScore += crystalOrange;
        console.log("yourScore = " + yourScore);
        $("#your-score").text(yourScore);
        winLoss();

    });

    $(".crystal4").on("click", function() {
        
        crystalGreen = parseInt(crystalVals[3]);
        yourScore += crystalGreen;
        console.log("yourScore = " + yourScore);
        $("#your-score").text(yourScore);
        winLoss();

    });

     // Reset score and crystals   
    function reset() {
        yourScore = 0; 
        crystalVals = [];
        crystalVal = 0;
    }



    // Records wins and losses
    function winLoss() {
        if (yourScore === targetNumber) {
            wins++
            $("#win-ct").text(wins);
            
            startGame();
        } else if (yourScore > targetNumber) {
            losses++
            $("#loss-ct").text(losses);
            
            startGame();
        }  
    } 



startGame();

});
 //. Document Ready


// function myFunction() {
//     document.getElementById('ranNumb').innerHTML = 
//     Math.floor(Math.random() * 120) + 19;
// }