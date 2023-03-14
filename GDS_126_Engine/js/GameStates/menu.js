/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject(); // change the width and add and x and y values to move the box
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
			sounds.play(`bg`, 0);
		}

		//Hover Effect Graffic
		startButton.img.src = `images/loading.png`;
	}
	else
	{
		//Default Button Graphic
		startButton.img.src = `images/play.png`;// color of the button
	
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage() //this is where the button gets drawn
	
}
	
	
