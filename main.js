function preload() {
	world_start = loadSound("world_start.wav");
	marioJump = loadSound("jump.wav");
	collectCoin = loadSound("coin.wav");
	gameEnd = loadSound("gameover.wav");
	marioKilling = loadSound("kick.wav");
	marioDie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('gameConsole');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log("Model Loaded");
}

function draw() {
	game();
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;		
	}
}