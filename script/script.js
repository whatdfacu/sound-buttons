/*  function playSound(event) {
    const soundFile = event.target.getAttribute('data-sound');
    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();
    }
  }

const soundButtons = document.querySelectorAll('.audio-button');
soundButtons.forEach(button => {
  button.addEventListener('click', playSound);
});


 */



/*    function playSound(input) {
   for (i=0; i<=11; i++){
    var audio = document.getElementsByClassName("audio-button");
    var targetAudio = audio[i];
    var audio2 = targetAudio.getAttribute('data-sound')
//    audio2.play()
    console.log(audio2)
  }
}; */

var sonido = document.getElementsByClassName("audio-button");

function playSound(input) {
  var targetAudio = sonido[input]
  var audioFile = targetAudio.getAttribute('data-sound')
  console.log(audioFile)
  const realAudio=new Audio(audioFile);
  realAudio.play()
};

sonido[0].onclick = function (){playSound(0);};
sonido[1].onclick = function (){playSound(1);};
sonido[2].onclick = function (){playSound(2);};
sonido[3].onclick = function (){playSound(3);};
sonido[4].onclick = function (){playSound(4);};
sonido[5].onclick = function (){playSound(5);};
sonido[6].onclick = function (){playSound(6);};
sonido[7].onclick = function (){playSound(7);};
sonido[8].onclick = function (){playSound(8);};
sonido[9].onclick = function (){playSound(9);};
sonido[10].onclick = function (){playSound(10);};