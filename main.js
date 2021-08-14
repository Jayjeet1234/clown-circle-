nosex=0;
nosey=0;
function preload(){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
x=ml5.poseNet(video,modelloaded);
x.on('pose',gotposes);
}
function modelloaded(){
console.log("posenetisinitialised");
}
function gotposes(result){
if(result.length>0){
console.log(result);
nosex=result[0].pose.nose.x-5;
nosey=result[0].pose.nose.y-5;
}
}
function snapshot(){
save('play.png');
}
function draw(){
image(video,0,0,300,300)
fill(120,60,255);
stroke(32,190,10);
circle(nosex,nosey,20,30);
}