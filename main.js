//https://teachablemachine.withgoogle.com/models/5evLd04tC/
function start(){
    navigator.mediaDevices.getUserMedia({aduio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5evLd04tC/model.json",modelready)
    
}
function modelready(){
    classifier.classify(gotresults)

}
function gotresults(error,results){
if (error) {
  console.error(error)  
} else {
  console.log(results) 
  document.getElementById("p1").innerHTML="sound is- "+results[0].label
  document.getElementById("p2").innerHTML="accuracy is- "+(results[0].confidence*100).toFixed(2)+"%"
  img1=document.getElementById("img1")
  img2=document.getElementById("img2")
  img3=document.getElementById("img3")
  img4=document.getElementById("img4")
  if (results[0].label=="clap") {
      img1.src="aliens-01.gif"
      img2.src="aliens-02.png"
      img3.src="aliens-03.png"
      img4.src="aliens-04.png"
  } else if(results[0].label=="flute"){
    img1.src="aliens-01.png"
    img2.src="aliens-02.gif"
    img3.src="aliens-03.png"
    img4.src="aliens-04.png" 
  }
  else if(results[0].label=="blowing"){
    img1.src="aliens-01.png"
    img2.src="aliens-02.png"
    img3.src="aliens-03.gif"
    img4.src="aliens-04.png" 
  }
  else{
    img1.src="aliens-01.png"
    img2.src="aliens-02.png"
    img3.src="aliens-03.png"
    img4.src="aliens-04.gif" 
  }

}
}


