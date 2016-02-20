#Documentation

##Last updated Feb 19th

###Here are some descriptions for each of the functions and for the general operation of the snake.

##### Looking ahead at the start of each turn 
- Each turn, the first function to be called is 'peek()'.
	- The purpose of 'peek()' is to determine the 'decision' variable. Currently, peak only 
	
##### Behaviours
- With each decision, a different function is called to return the next move.
	- 'basicmotion()' does the simplest, single-direction shift movement towards the next food item.
	- 'escape()' will move the snake to the next co-ordinates in 'escArray'.
		- 'escArray' is an array of moves, with each successive move getting the snake away from collisions.
		- 'escIndex' keeps track of what move we need to use next in 'escArray'.
	- More behaviour functions will be added soon.