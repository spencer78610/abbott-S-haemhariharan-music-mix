console.log('JS iss running...')

let instermentIcons = document.querySelectorAll('#music-images img'),
    audioEl = null,
    playbutton = document.querySelectorAll('#play'),
    pausebutton = document.querySelectorAll('#pause'),
    theInsterments = document.querySelectorAll('#music-images img'),
    musicPlayer = document.querySelector('#music-player'),
    dropZones = document.querySelectorAll('.drop-zone');
let playingAudio = [];


function loadaudio() {
    let newAudioEl = document.createElement('audio');
    newAudioEl.src = `audio/${this.dataset.trackref}.mp3`;
    newAudioEl.load();
    newAudioEl.play();
    playingAudio.push(newAudioEl);
    musicPlayer.classList.add('playing');
}

function playtrack() {
    playingAudio.forEach(audio => {
        if (audio.paused) {
            audio.play();
        }
    });
    if (playingAudio.some(audio => !audio.paused)) {
        musicPlayer.classList.add('playing');
    }
}

function pausetrack() {
    playingAudio.forEach(audio => audio.pause());
    if (playingAudio.every(audio => audio.paused)) {
        musicPlayer.classList.remove('playing');
    }
}

function handleStartDrag() {
    console.log('started dragging this piece:', this);
    
	draggedPiece = this;
}

function handleDragOver(e) { 
    e.preventDefault(); 
	console.log('dragged over me');     
	
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something on me');
    const dropZone = this;
    loadaudio.call(draggedPiece);
}

instermentIcons.forEach(icon => icon.addEventListener('drop', loadaudio));

playbutton.forEach(sound => sound.addEventListener('click', playtrack));

pausebutton.forEach(sound => sound.addEventListener('click', pausetrack));

theInsterments.forEach(image => image.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

// bugs

// UX UI fixing