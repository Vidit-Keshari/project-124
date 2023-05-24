var text_1 = "This is developed by The developer VIDIT KESHARI";
var text_2 = "This is developed by The developer VIDIT KESHARI and this app name is FONT MANIPULATOR, you can have fun in controlling text";
function developer() {
    window.alert(text);
}

function app() {
    window.alert(text_2);
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(520, 400);
    canvas.position(560, 130);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log("poseNet modal is initialized succesfully");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}