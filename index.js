var drumButtons = document.querySelectorAll('.drum');
console.log(drumButtons)

for(var i = 0; i < drumButtons.length; i++ ){
    
    drumButtons[i].addEventListener('click', playSound);

}

// Adding function to play sounds when a drum is clicked 

function playSound () {
    if(this.innerHTML === 'w'){
    
    let audio = new Audio('/sounds/crash.mp3');
     audio.play();
    } 
    else if(this.innerHTML === 'a'){
        audio = new Audio('/sounds/kick-bass.mp3');
        audio.play();
    }
    else if (this.innerHTML === 's') {
        audio = new Audio('/sounds/snare.mp3');
        audio.play();
    }
    else if (this.innerHTML === 'd') {
        audio = new Audio('/sounds/tom-1.mp3');
        audio.play();
    }
    else if (this.innerHTML === 'j') {
        audio = new Audio('/sounds/tom-2.mp3');
        audio.play();
    }
    else if (this.innerHTML === 'k') {
        audio = new Audio('/sounds/tom-3.mp3');
        audio.play();
    }
    else {
        audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
}

