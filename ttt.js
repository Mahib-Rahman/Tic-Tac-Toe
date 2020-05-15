//importing the variables
var one_display = document.getElementById("one_dis");
var two_display = document.getElementById("two_dis");
var three_display = document.getElementById("three_dis");
var four_display = document.getElementById("four_dis");
var five_display = document.getElementById("five_dis");
var six_display = document.getElementById("six_dis");
var seven_display = document.getElementById("seven_dis");
var eight_display = document.getElementById("eight_dis");
var nine_display = document.getElementById("nine_dis");
var winner_display = document.getElementById("result");
var player1_display = document.getElementById("player1_score");
var player2_display = document.getElementById("player2_score");
//the turn variable is used to dictate which player's turn it is
//after the game resets, there is no reason to reset the turn variable 
//because the (other) player should go first on the next game

//if the spots_filled equals 9 and no winner then the game was a tie
var player1_score = 0, player2_score = 0, spots_filled = 0, turn = 0;
//the status variables wil be used to check 
var one_status = false, two_status = false, three_status = false;
var four_status = false, five_status = false, six_status = false;
var seven_status = false, eight_status = false, nine_status = false;
//the grid is used to keep an updated array of the tis-tac-toe board
var grid = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

main()

function main()
{
    move();
}

function update_html()
{//this function updates the html/css of the tis-tac-toe board using the grid(two-dimensional array)
    if(grid[0][0] === "X" || grid[0][0] === "O")
    {
        one_display.innerHTML = grid[0][0];
        document.getElementById("one_dis").style.color = "white";
    }
    if(grid[0][1] === "X" || grid[0][1] === "O")
    {
        two_display.innerHTML = grid[0][1];
        document.getElementById("two_dis").style.color = "white";
    }
    if(grid[0][2] === "X" || grid[0][2] === "O")
    {
        three_display.innerHTML = grid[0][2];
        document.getElementById("three_dis").style.color = "white";
    }
    if(grid[1][0] === "X" || grid[1][0] === "O")
    {
        four_display.innerHTML = grid[1][0];
        document.getElementById("four_dis").style.color = "white";
    }
    if(grid[1][1] === "X" || grid[1][1] === "O")
    {
        five_display.innerHTML = grid[1][1];
        document.getElementById("five_dis").style.color = "white";
    }
    if(grid[1][2] === "X" || grid[1][2] === "O")
    {
        six_display.innerHTML = grid[1][2];
        document.getElementById("six_dis").style.color = "white";
    }
    if(grid[2][0] === "X" || grid[2][0] === "O")
    {
        seven_display.innerHTML = grid[2][0];
        document.getElementById("seven_dis").style.color = "white";
    }
    if(grid[2][1] === "X" || grid[2][1] === "O")
    {
        eight_display.innerHTML = grid[2][1];
        document.getElementById("eight_dis").style.color = "white";
    }
    if(grid[2][2] === "X" || grid[2][2] === "O")
    {
        nine_display.innerHTML = grid[2][2];
        document.getElementById("nine_dis").style.color = "white";
    }
    return;
}

function reset_game()
{//this function resets the javascript variables and the html/css of the tit-tac-toe board
    grid = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
    ];
    if(turn % 2 == 0)
        turn++;
    spots_filled = 0;
    one_status = false, two_status = false, three_status = false;
    four_status = false, five_status = false, six_status = false;
    seven_status = false, eight_status = false, nine_status = false;
    one_display.innerHTML = "_";
    two_display.innerHTML = "_";
    three_display.innerHTML = "_";
    four_display.innerHTML = "_";
    five_display.innerHTML = "_";
    six_display.innerHTML = "_";
    seven_display.innerHTML = "_";
    eight_display.innerHTML = "_";
    nine_display.innerHTML = "_";
    document.getElementById("one_dis").style.color = "cornflowerblue";
    document.getElementById("two_dis").style.color = "cornflowerblue";
    document.getElementById("three_dis").style.color = "cornflowerblue";
    document.getElementById("four_dis").style.color = "cornflowerblue";
    document.getElementById("five_dis").style.color = "cornflowerblue";
    document.getElementById("six_dis").style.color = "cornflowerblue";
    document.getElementById("seven_dis").style.color = "cornflowerblue";
    document.getElementById("eight_dis").style.color = "cornflowerblue";
    document.getElementById("nine_dis").style.color = "cornflowerblue";
    return;
}

function updateGrid(choice, turn)
{
//updates the grid(array) and checks for the results of the game(o wins, x wins, or tie)
//also updates the player score
    var x, y;
    choice--;
    x = Math.floor(choice / 3);
    y = Math.floor(choice % 3);
    if(turn % 2 == 0)
        grid[x][y] = "X";
    if(turn % 2 != 0)
        grid[x][y] = "O";
    spots_filled++;
    if(check_for_winner() == true)
    {
        winner_display.innerHTML = "Player 1 WINS!";
        setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 2000);
        player1_score++;
        player1_display.innerHTML = player1_score;
        setTimeout(reset_game, 1000);
        spots_filled -= spots_filled;
    }
    else if(check_for_Owinner() == true)
    {
        winner_display.innerHTML = "Player 2 WINS!";
        setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 2000);
        player2_score++;
        player2_display.innerHTML = player2_score;
        setTimeout(reset_game, 1000);
        spots_filled -= spots_filled;
    }
    else if((spots_filled == 9))
    {
        winner_display.innerHTML = "Awww its a Tie. Let's Continue!";
        setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 2000);
        setTimeout(reset_game, 1000);
        spots_filled -= spots_filled;
    }
    return;
}
function check_for_winner()
{//checks all possibilities for X winning the game
    if(grid[0][0] === "X" && grid[0][1] === "X" && grid[0][2] === "X")
        return true;
    if(grid[1][0] === "X" && grid[1][1] === "X" && grid[1][2] === "X")
        return true;
    if(grid[2][0] === "X" && grid[2][1] === "X" && grid[2][2] === "X")
        return true;
    if(grid[0][0] === "X" && grid[1][0] === "X" && grid[2][0] === "X")
        return true;
    if(grid[0][1] === "X" && grid[1][1] === "X" && grid[2][1] === "X")
        return true;
    if(grid[0][2] === "X" && grid[1][2] === "X" && grid[2][2] === "X")
        return true;
    if(grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X")
        return true;
    if(grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X")
        return true;
    return false;
}
function check_for_Owinner()
{//checks all the possibilities for O winning
    if(grid[0][0] === "O" && grid[0][1] === "O" && grid[0][2] === "O")
        return true;
    if(grid[1][0] === "O" && grid[1][1] === "O" && grid[1][2] === "O")
        return true;
    if(grid[2][0] === "O" && grid[2][1] === "O" && grid[2][2] === "O")
        return true;
    if(grid[0][0] === "O" && grid[1][0] === "O" && grid[2][0] === "O")
        return true;
    if(grid[0][1] === "O" && grid[1][1] === "O" && grid[2][1] === "O")
        return true;
    if(grid[0][2] === "O" && grid[1][2] === "O" && grid[2][2] === "O")
        return true;
    if(grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O")
        return true;
    if(grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O")
        return true;
    return false;
}
function move() 
{
//this function adds eventListeners to all of the sections of the tic-tac-toe board
//Also calles the updateGrid/Update_html functions(If the the place on the board isn't already filled)
    one_display.addEventListener('click', function() {
        if(one_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        one_status = true;
        var choice = 1;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    two_display.addEventListener('click', function() {
        if(two_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        two_status = true;
        var choice = 2;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    three_display.addEventListener('click', function() {
        if(three_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        three_status = true;
        var choice = 3;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    four_display.addEventListener('click', function() {
        if(four_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        four_status = true;
        var choice = 4;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    five_display.addEventListener('click', function() {
        if(five_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        five_status = true;
        var choice = 5;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    six_display.addEventListener('click', function() {
        if(six_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        six_status = true;
        var choice = 6;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    seven_display.addEventListener('click', function() {
        if(seven_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        seven_status = true;
        var choice = 7;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    eight_display.addEventListener('click', function() {
        if(eight_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        eight_status = true;
        var choice = 8;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
    nine_display.addEventListener('click', function() {
        if(nine_status == true)
        {
            winner_display.innerHTML = "Sorry that Spot is occupied";
            setTimeout(function(){ winner_display.innerHTML = "Lets play"; }, 1000);
            return;
        }
        nine_status = true;
        var choice = 9;
        updateGrid(choice, turn);
        update_html();
        turn++;
        return;
    });
}
