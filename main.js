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
    }
}
function draw(){
    background('#d8bdf0');
}