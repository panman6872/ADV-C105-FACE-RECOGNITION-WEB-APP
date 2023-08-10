Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="caputure_image" src="'+data_uri+'"/>';
     });
}
console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7Bubc46Jh/model.json',modelLaoded);

function modelLaoded(){
    console.log('Model loaded!');
}

function check(){
img = document.getElementById('caputure_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("Accuracy_level").innerHTML = results[0].confidence.toFixed(3);
    }
}