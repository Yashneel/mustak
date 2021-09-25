noseX = ""
noseY = ""
function setup() {
	canvas =  createCanvas(400, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function preload(){
	img1 = loadImage("m.png")
}
function saves(){
	saveCanvas('Mustachok', 'png')
}
function draw() {
	image(video, 0, 0, 400, 400);
	image(img1,noseX,noseY,50,50)
}
function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
  
  