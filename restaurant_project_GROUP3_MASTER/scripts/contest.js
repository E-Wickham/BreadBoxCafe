window.onload = function () {
    
    // counter variable
    var count = 0;
    // receive the number of rolls the user can perform
    var chances = document.getElementById("chances").innerHTML;
    // 6 sides for a dice
    var sides = 6;
    
    var dice = {
        roll: function () {
            // condition to make sure the player never wins
            if(count > 0){
                sides = 5;
            }
            var randomNumber = Math.floor(Math.random() * sides) + 1;
            return randomNumber;
        }
    }
    
    // get button
    var button = document.getElementById('button');

    // listener function to roll the dice
    button.onclick = function () {
        var result = dice.roll();
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        // load a different image according to the result
        diceDOM.src = 'images/game/dice-' + result + '.png'
        if(result === 6){
            count++;
            document.getElementById("tracker").innerHTML = count;
        }
        chances--;
        document.getElementById("chances").innerHTML = chances;
        // error message once the user exhausts their chance
        if(chances === 0){
            document.getElementById("button").disabled = true;
            document.getElementById("button").style.backgroundColor = "grey";
            document.getElementById("msg").style.display = "block";
        }
    };

};