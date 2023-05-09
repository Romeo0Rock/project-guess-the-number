// generation of random value
 var y = Math.floor(Math.random() * 10 + 1);
// count of attempts
// until hit
 var x = document.getElementById("guessField").value;  
// function for the number sent by the user
 if(x == y)
{
    alert("CONGRATULATIONS!!!" +playername+" YOU GUESSED THE ANSWER IN"
     + guess + "GUESS");

     guess= 1;
}

else if(x > y)

{
    guess++;
    alert("OOPS SORRY!!! PLEASE TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! PLEASE TRY A GREATER NUMBER");
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}