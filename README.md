# Rock-Paper-Scissors
 A simple game of Quartz-Parchment-Shares.

However, this version sees the game played as a 'Best-of-Five' (Bo5) moves which makes the game shorter as a player can win in as little as three arounds and also allows for the possibility of a draw.

I have added a simple UI to the game with buttons for player seclections as well as a div with paragraphs that displays the results.

However, in this implementation I have used for loops to stop the implementation of the event listener after five rounds have been played.
I undertstand that a more optimal way to solve this is to use the remove eventlistner method but my first implementation of this failed due to scoping isses with the call back function.
I will resolve this in the next commit.
