const canvas = document.getElementById('my_canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const backgroundImg = new Image();
backgroundImg.src = 'https://s3.envato.com/files/170596024/City_Background_Ny_4267x2133.jpg';

const heroImg = new Image();
heroImg.src = 'https://ladygeekgirl.files.wordpress.com/2014/04/zerosuitsamussmash4.png';

const badGuyImg = new Image();
badGuyImg.src = 'https://vignette3.wikia.nocookie.net/ssb/images/8/87/Meta_Knight_Clear_SSBB.png/revision/latest?cb=20160118005844';

const gameData = {
	hero: {
		x		:0,
		y		:canvas.height - 200,
		width	:150,
		height	:150,
		img		:heroImg,
		xDelta	:0,
		yDelta	:0,
	},
	
	badGuys		:[
	{ 
		x		: 100,
		y		:canvas.height - 170,
		width	:150,
		height	:150,
		img		:badGuyImg,
		xDelta	:1,
	},
	]
	
}

const hero = gameData.hero;
const badGuy = gameData.badGuys[0];
const maxJump = canvas.height - hero.y - 50;

const draw =  function () 
{
	const hero = gameData.hero;
	ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(hero.img, hero.x, hero.y, hero.width, hero.height);
	const badGuy = gameData.badGuys[0];
	ctx.drawImage(badGuy.img, badGuy.x, badGuy.y, badGuy.width, badGuy.height);
};

const updateData = function () 
{
	const hero = gameData.hero;
	if(hero.yDelta !== 0)
	{
		hero.y = hero.y - hero.yDelta;
	}
	if(hero.y < maxJump) {
		hero.yDelta = -hero.yDelta;
	}
	else if(hero.y > canvas.height - 200)
	{
		hero.y = canvas.height - 200;
	}

};

const loop = function ()
{
	draw();
	updateData();
	requestAnimationFrame(loop);
};

loop();



	const leftKey = 37;
	const upKey = 38;
	const rightKey = 39;
	const downKey = 40;
	

document.addEventListener('keydown', function(event) {
	if (event.keyCode === rightKey) {
       const hero = gameData.hero;
	   hero.x = hero.x + 10;
	   if(hero.x > canvas.width) {
		   hero.x = 0;
	   }
  	}
	else if (event.keyCode === leftKey) {
		const hero = gameData.hero;
		hero.x = hero.x - 10;
		if(hero.x < 0) {
			hero.x = canvas.width - hero.width;
		}
	}
	else if(event.keyCode === upKey)
	{
		const hero = gameData.hero;
		if(hero.yDelta === 0) {
		hero.yDelta = 3;
		}
	}
}, false);



const aKey = 65;
const dKey = 68;

document.addEventListener('keydown', function(event) {
	if (event.keyCode === dKey) {
		const badGuy = gameData.badGuys[0];
		badGuy.x = badGuy.x + 7;
		if(badGuy.x > canvas.width)
		{
			badGuy.x = 0;
		}
	}
	
	else if (event.keyCode === aKey)
	{
		const badGuy = gameData.badGuys[0];
		badGuy.x = badGuy.x - 7;
		if(badGuy.x < 0)
		{
			badGuy.x = canvas.width - badGuy.width;
		}
	}
}, false);

























const canvas = document.getElementById("my_canvas");
const context = canvas.getContext("2d");

const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const colorArray = [
'red',
'blue',
'pink',
];

const  points = [];
const createPoints = function(count, canvasWidth, canvasHeight) {

	const rec = function(index)
		{
			if(index === count) return;
			points[index] = 
			{	
				x		: rand(canvasWidth - 30) ,
				y		: rand(canvasHeight - 20) ,
				width  	: 30,
				height 	: 20,
				xDelta 	: 3,
				yDelta 	: 3,
				color 	: colorArray[rand(3) - 1],
			}
			rec(index + 1);
		};
		rec(0);
		return points;
	
};


createPoints(10 , canvas.width , canvas.height)

const randColor = function(num)
{
	if( num === points.length)
	{
		return;
	}
	else
	{
		points[num].color = "rgb( " + Math.floor(Math.random() * 244) + " , " +  Math.floor(Math.random() * 244) + " , "  +  Math.floor(Math.random() * 244) +")";
	}	
	
	randColor(num + 1);
}	

randColor(0);	
	
const draw = function()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	const randPose = function(num)
	{
	if (num === points.length )
	{
		return ;
	}
	else
	{	
	context.fillStyle = points[num].color;
	context.fillRect(points[num].x, points[num].y, points[num].width, points[num].height);
	}
	
	randPose(num + 1);
	}
	
	
randPose(0);	
}	

const updateData = function() {
	const move = function(num)
	{
		if(num === points.length)
		{
			return;
		}
		else
		{	
			if(points[num].x >= canvas.width - points[num].width)
			{	
				points[num].xDelta = -3;
			}
			else if(points[num].x <= 0)
			{	
				points[num].xDelta = 3;
			}
			
			if(points[num].y >= canvas.height - points[num].height)
			{	
				points[num].yDelta = -3;
			}
			else if(points[num].y <= 0)
			{	
				points[num].yDelta = 3;
			}
			
			
			points[num].x = points[num].x + points[num].xDelta;
			points[num].y = points[num].y + points[num].yDelta;
				
		}
		
		move(num + 1);
	}	
	
	move(0);
};	

const loop = function()
{
	draw();
	updateData();
	requestAnimationFrame(loop);
}

loop();






