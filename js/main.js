(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button');
  document.querySelector('.stopButton').addEventListener('click', event => {
        audio.pause();
        audio.currentTime = 0;
        window.location.reload();
    });
  
  function playAudio() {
    document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
    document.querySelector("#line-1").classList.add('container-turn');
    
    audio.play();
  }


  playButton.addEventListener("click", playAudio);

})();
