/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:200, x:100}); // change the width and add and x and y values to move the box
//startButton.img.src="images/mrt.jpg"

console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/mrt.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`) // this and below is what needs to change the button
		}

		//Hover Effect Graffic
		startButton.color = `blue`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `teal`// color of the button
	}
	
	menuBackground.drawStaticImage();
	startButton.render() //this is where the button gets drawn
}
	
	
