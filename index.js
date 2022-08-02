
// Create function to determin which sound to play

let playSound = function (trigger) {
    switch (trigger) {
        case "w":
            var crash = new Audio('/sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kickbass = new Audio('/sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case "s":
            var snare = new Audio('/sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
            break;

    
        default:
            var tom4 = new Audio('/sounds/tom-4.mp3');
            tom4.play();
            break;
              
    }
    
}


// Determining which key was pressed

document.addEventListener("keydown", function(e){
    playSound(e.key);
    animateButton(e.key);
    }
);

// Adding function to play sounds when a drum is clicked 


var drumButtons = document.querySelectorAll('.drum');
for(var i = 0; i < drumButtons.length; i++ ){
    drumButtons[i].addEventListener('click', function(){
        var but = this.innerHTML;
        playSound(but);
        animateButton(but);
        
    });
    
}   





//  Function to add animation to pressed keys  
function animateButton(currentKey){
    var activeKey = document.querySelector("."+ currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed")}, 100);


};
