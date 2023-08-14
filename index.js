
//keypress event handeler when user clicks any key on keyborder

$(document).keypress(function(e){
    makeSound(e.key);
})

//button click handdler function ###################

$(".drum").click(function () {
    $(".drum").removeClass("pressed");
    $(this).addClass("pressed");
    setTimeout(function () {
        $(".drum").removeClass("pressed");
    }, 100)
    makeSound(this.innerHTML);
})


//audio play function to play audio on any event happense ############

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("/sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        default:
            break;
    }
}
