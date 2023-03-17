console.log('JS iss running...')

// Drag and drop
let theInsterments = document.querySelectorAll('#music-images img'),
    dropZones = document.querySelectorAll('#music-player img');

function handleStartDrag() {
    console.log('started dragging this piece:', this);


	draggedPiece = this;
}

function handleDrop(e) {
    // e.preventDefult();

    const dropZone = this;
    const existingPiece = dropZone.querySelector('img');
    if (existingPiece) {
        puzzleBoard.insertBefore(draggedPiece, existingPiece);
        dropZone.removeChild(existingPiece);
        mainBoard.appendChild(existingPiece);
    }

    dropZone.appendChild(draggedPiece);

    draggedPiece.classList.add("dropped");

    draggedPiece;
    // get images to drop onto records and disapear
}

theInsterments.forEach(image => image.addEventListener("dragstart", handleStartDrag));

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
instermentIcons.forEach(icon => icon.addEventListener('dragstart', loadaudio));
// change dragstart to dropped for music to play on drop
// just need to make the drop box
playbutton.addEventListener('click', playtrack);

pausebutton.addEventListener('click', pausetrack);






















// Audio

// // select all place holder images
// let albumCovers = document.querySelectorAll('.audio img'),
// audioEl = document.querySelector('audio'),
// playbutton = document.querySelector("#playbutton"),
// pausebutton = document.querySelector("#pausebutton"),
// rewindbutton = document.querySelector("#rewindbutton");

// function loadAudio () {
//     // find the right audio track and 
//     audioEl.src = `audio/${this.dataset.trackref}.mp3`;
//     audioEl.load();

//     // now I can play without things breaking
//     playtrack();
// }

// // play the audio
// function playtrack() { audioEl.play();}

// function pausetrack() { audioEl.pause();}

// function rewindtrack() {audioEl.currentTime = 0 ;}
// // add the reactions (the event we want to listen for)

// albumCovers.forEach(album => album.addEventListener('click', loadAudio));

// playbutton.addEventListener('click',playtrack);
// pausebutton.addEventListener('click',pausetrack);
// rewindbutton.addEventListener('click',rewindtrack);
