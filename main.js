noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 380);
    video.position(70, 170);

    canvas = createCanvas(500, 380);
    canvas.position(700, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}
function draw(){
    background('#d8bdf0');
    text("Srishti", noseX, noseY);
    textSize(difference);
    fill("white");
    stroke("white");
}