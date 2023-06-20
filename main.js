function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded); 
  synth = window.speechSynthesis;
}

function draw()
{
  image(video, 0 , 0, 300, 300) ;
  classifier.classify(video, gotResult);
}

function modelLoaded()
{
  console.log("modelo cargado");
}

var resultado_previo = "" 

function gotResult(error, results) 
{
     if (error) { console.error(error); }
     console.log(results);
     document.getElementById("label").innerHTML= results[0].label;
     document.getElementById("confidence").innerHTML = Math.round (results[0].confidence*100)+"%";
     utterThis = new SpeechSynthesisUtterance(results[0].label);
      synth.speak(utterThis); 

    }
