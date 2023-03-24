console.log('JS iss running...')

let instermentIcons = document.querySelectorAll('#music-images img'),
    audioEl = document.querySelector('audio'),
    playbutton = document.querySelectorAll('#play'),
    pausebutton = document.querySelectorAll('#pause'),
    theInsterments = document.querySelectorAll('#music-images img'),
    musicPlayer = document.querySelector('#music-player'),
    dropZones = document.querySelectorAll('.drop-zone');


function loadaudio() {
    let newAudioEl = document.createElement('audio');
    newAudioEl.src = `audio/${this.dataset.trackref}.mp3`;
    newAudioEl.load();
    newAudioEl.play();
}


function playtrack() { audioEl.play();}

function pausetrack() { audioEl.pause();}

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

// playbutton.addEventListener('click', playtrack);

// pausebutton.addEventListener('click', pausetrack);

playbutton.forEach(sound => sound.addEventListener('click', playtrack));

pausebutton.forEach(sound => sound.addEventListener('click', pausetrack));

theInsterments.forEach(image => image.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

// bugs

// music doesn't overlap or repeat

// UX UI fixing