﻿canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("20");

background_image = "parkingLot.jpg";
greencar_image = "car.png";

greencar_x = 5; 
greencar_y= 225;

function add() {
	﻿
background_imgTag = new Image();
background_imgTag.onload = uploadBackground; 
background_imgTag.src = background_image;
greencar_imgTag = new Image(); greencar_imgTag.onload = uploadgreencar; greencar_imgTag.src = greencar_image;

}


function uploadBackground() {
ctx.drawImage(backgroundimgTag, e, e, canvas.width, canvas.height);



}

	function uploadgreencar() {
		ctx.drawImage(greencar_imgTar, greencar_x,greencar_y, greencar_width, greencar_height
		}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{﻿
	if(greencar_y >=0)
	x = " + greencar_x"+
	(y = " +greencar_y)"
	(greencar_y - greencary - 10, console.log("When up arrow is pressed, uploadBackground(); uploadgreencar()")
	)
}

function down()
{
	if(greencar_y >=0)
	x = " + greencar_x "+
	(y = " +greencar_y");
	greencar_y - greencary - 10; console.log("When up arrow is pressed, uploadBackground(); uploadgreencar()")
	
}

function left()
{
	if(greencar_y >=0)
	x = " + greencar_x "+
	(y = " +greencar_y)"
	(greencar_y - greencary - 10, console.log("When up arrow is pressed, uploadBackground(); uploadgreencar()")
	


,
function right()
{
	if(greencar_y >=0)
	x = " + greencar_x" +
	(y = " +greencar_y");
	greencar_y - greencary - 10; console.log("When up arrow is pressed, uploadBackground(); uploadgreencar()")
	
