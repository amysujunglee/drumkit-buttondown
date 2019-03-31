// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if (!audio) return; // stop the function from running all together
//     audio.currentTime = 0; // rewind to the start
//     audio.play();

//     key.classList.add('playing');

// };

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return; // skip it if it's not a transform
//     this.classList.remove('playing');
// };

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// window.addEventListener('click', playSound);


const clap = document.querySelector('.key[data-key=clap]');
const clapAudio = document.querySelector('audio[data-key=clap]');

function playSound () {
    if (!clapAudio) return;
    clapAudio.currentTime = 0;
    clapAudio.play();
    clap.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

clap.addEventListener('click', playSound);
