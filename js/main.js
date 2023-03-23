console.log('JS iss running...')

// Drag and drop
let theInsterments = document.querySelectorAll('#music-images img'),
    musicPlayer = document.querySelector('#music-player'),
    dropZones = document.querySelectorAll('.drop-zone');

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

        playtrack();

    console.log('dropped something on me');

    const dropZone = this;
    
}

theInsterments.forEach(image => image.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

// audio
let instermentIcons = document.querySelectorAll('#music-images img'),
    audioEl = document.querySelector('audio'),
    playbutton = document.querySelector('#play'),
    pausebutton = document.querySelector('#pause');

function loadaudio() {
        audioEl.src = `audio/${this.dataset.trackref}.mp3`;
        audioEl.load();
        playtrack();
}

function playtrack() { audioEl.play();}

function pausetrack() { audioEl.pause();}



// audio
instermentIcons.forEach(icon => icon.addEventListener('drop', loadaudio));

playbutton.addEventListener('click', playtrack);

pausebutton.addEventListener('click', pausetrack);
