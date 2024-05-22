Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function  take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'" />'; 
    });
}
 
function check ()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

console.log('ml5.version', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Mfcb2UhG_/model.json',modellLoaded);
function modellLoaded(){
    console.log("model is loaded successfully");
}

function gotResult (error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        if(results[0].label == "With Mask")
        {
            document.getElementById("update_emoji").innerHTML = "&#128567"
        }
        if(results[0].label == "Without Mask")
        {
            document.getElementById("update_emoji").innerHTML = "&#128542"
        }
        if(results[0].label == "Improper Mask")
        {
            document.getElementById("update_emoji").innerHTML = "&#128529"
        }
    }
}