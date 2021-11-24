function Goto() {
    window.location = "refer.html";
}

Prediction1 = "";
Prediction2 = "";

Webcam.set({
  width:350,
  height:300,
  image_format : 'jpg',
  jpg_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

    
function take_snapshot()
{
  Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  });
}
  
  console.log('ml5 version:', ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DWxnD_YW3/model.json',modelLoaded);
  
  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
function Speak() {
    var synth = window.speechSynthesis;
    SpeakData1 = "First prediction is " + Prediction1;
    SpeakData2 = "and the second prediction is " + Prediction2;
    var utterthis = new SpeechSynthesisUtterance(SpeakData1 + SpeakData2);
    synth.speak(utterthis);
}

function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    
    else{
        console.log(results);
        document.getElementById("ResultEmotionName").innerHTML = results[0].label;
        document.getElementById("ResultEmotion2").innerHTML = results[1].label;
        Prediction1 = results[0].label;
        Prediction2 = results[1].label;
        speak();

        if(results[0].label == "Good"){
            document.getElementById("Emoji1").innerHTML = "&#128077";
        }

        if(results[0].label == "Bad"){
          document.getElementById("Emoji1").innerHTML = "&#128078";
      }

      if(results[0].label == "Okay"){
        document.getElementById("Emoji1").innerHTML = "	&#128076";
    }

    if(results[0].label == "Talk To Hand"){
      document.getElementById("Emoji1").innerHTML = "&#9995";
  }

  if(results[0].label == "Hang Loose"){
    document.getElementById("Emoji1").innerHTML = "&#129304";
}

if(results[0].label == "Victory"){
  document.getElementById("Emoji1").innerHTML = "&#9994";
}

if(results[0].label == "Call Me"){
  document.getElementById("Emoji1").innerHTML = "&#129305";
}

if(results[0].label == "Gun"){
  document.getElementById("Emoji1").innerHTML = "&#128073";
}

if(results[0].label == "Just A Little"){
  document.getElementById("Emoji1").innerHTML = "	&#128406";
}

if(results[0].label == "Good Luck"){
  document.getElementById("Emoji1").innerHTML = "&#129310";
}

if(results[0].label == "Peace"){
  document.getElementById("Emoji1").innerHTML = "&#9996";
}






if(results[1].label == "Good"){
  document.getElementById("Emoji2").innerHTML = "&#128077";
}

if(results[1].label == "Bad"){
document.getElementById("Emoji2").innerHTML = "&#128078";
}

if(results[1].label == "Okay"){
document.getElementById("Emoji2").innerHTML = "	&#128076";
}

if(results[1].label == "Talk To Hand"){
document.getElementById("Emoji2").innerHTML = "&#9995";
}

if(results[1].label == "Hang Loose"){
document.getElementById("Emoji2").innerHTML = "&#129304";
}

if(results[1].label == "Victory"){
document.getElementById("Emoji2").innerHTML = "&#9994";
}

if(results[1].label == "Call Me"){
document.getElementById("Emoji2").innerHTML = "&#129305";
}

if(results[1].label == "Gun"){
document.getElementById("Emoji2").innerHTML = "&#128073";
}

if(results[1].label == "Just A Little"){
document.getElementById("Emoji2").innerHTML = "	&#128406";
}

if(results[1].label == "Good Luck"){
document.getElementById("Emoji2").innerHTML = "&#129310";
}

if(results[1].label == "Peace"){
document.getElementById("Emoji2").innerHTML = "&#9996";
}
    }
}