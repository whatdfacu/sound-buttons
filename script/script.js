var sonido = document.getElementsByClassName("audio-button");

function playSound(input) {
  var audioFile = sonido[input].getAttribute('data-sound')
  console.log(audioFile)
  const realAudio = new Audio(audioFile);
  realAudio.play()
};

for(let i=0; i<=11; i++){
  sonido[i].onclick = function (){
  playSound(i);
  };
};