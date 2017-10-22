var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');




 // var x = 200;
 // var dx = 5;
 // var y = 200;
 // var dy = 5;
  // function animate()
 // {
	 // requestAnimationFrame(animate);
	 // c.clearRect(0, 0, innerWidth, innerHeight);
	// c.fillStyle = 'red';
	// c.fillRect(x, y, 150, 200);
	// x += dx;
	// y += dy;
// if(x > canvas.width - 150)
// {
	// dx = -dx;
// }
 
 // else if(x < 0)
 // {
	 // dx = -dx
 // }

 // if(y > canvas.height - 200)
// {
	// dy = -dy;
// }
 
 // else if(y < 0)
 // {
	 // dy = -dy
 // }
 // }
 
 // animate();

















for (var i = 0; i < 3; i++)
{
	var colorArray = [
	'blue',
	'orange',
	'pink',
	'black',
	'purple',
	'green',
	'yellow',
	'red',
	
	]
	
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	var w = Math.random() * 200;
	var h = Math.random() * 300;
	
c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
c.fillRect(x, y, w, h);

}



