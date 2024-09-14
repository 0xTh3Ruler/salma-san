const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");


var question = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = null;
var count = 1;
var finalNoCounts = 0;


startButton.addEventListener("click", () => {
    input = document.getElementById("fname").value = "Salma";

    if (input == "") {
        gifLanding.src = "https://media.giphy.com/media/VB3cK9oA48BbQWcObd/giphy.gif";
        questionLanding.innerHTML = "Please give  me your name before you start!"
    }
    else {
        document.head.innerHTML = "<meta charset='UTF-8'>" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
            "<title>Do You Love Me?</title>" +
            "<link rel='stylesheet' href='styleMain.css'/>"

        document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Hello " + input + "! Will you go out with me?</h2>" +
            "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>" +
            "<div class='btn-group'><button class='yes-btn'>Yes</button>" +
            "<button class='no-btn'>No</button></div></div>"

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);

        playAudio('Sounds/Hi.mp3');

    }
});


// Array of audio file URLs
const audioFiles = [
    'https://www.myinstants.com/media/sounds/happy-happy-happy-song.mp3',
    'https://www.myinstants.com/media/sounds/m_fixed_9asHrPg.mp3',
    'https://www.myinstants.com/media/sounds/lwy-hbyb-qlby.mp3',
    'https://www.myinstants.com/media/sounds/skibidi-toilet.mp3',
    'https://www.myinstants.com/media/sounds/lmfao-everyday-im-shuffling.mp3',
    'https://www.myinstants.com/media/sounds/yt1s_NSjFWNC.mp3',
    'https://www.myinstants.com/media/sounds/maitake-guru-guru.mp3',
    'https://www.myinstants.com/media/sounds/pinktrilobite_takeonme.mp3',
    'https://www.myinstants.com/media/sounds/cat-vibing-to-ievan-polkka.mp3',
    'https://www.myinstants.com/media/sounds/brr-shikiri-bi-dop-phonk-10-sec.mp3',
    'https://www.myinstants.com/media/sounds/meghan-cindy-theme-02_RQD1NRF.mp3',
    'https://www.myinstants.com/media/sounds/memes-music-v1.mp3',
    'https://www.myinstants.com/media/sounds/white-tee-rizz_Pw3bPh4.mp3',
    'https://www.myinstants.com/media/sounds/sticking-out-ur-gyat-for-the-rizzler.mp3',
    'https://www.myinstants.com/media/sounds/all-my-fellaz.mp3'
];

let currentAudio = null;

function playRandomAudio() {
    // Stop and reset the current audio if it's playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset audio playback position to start
    }

    // Get a new random audio
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudio = new Audio(audioFiles[randomIndex]);

    // Set the new audio as the current one
    currentAudio = randomAudio;
    
    // Set loop and play the new audio
    randomAudio.loop = true;
    randomAudio.play();
}


// Array of GIF URLs
const gifLinks = [
    'https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif',
    'https://media.giphy.com/media/UBl3wsQldC8dVbpFq5/giphy.gif',
    'https://media.giphy.com/media/fC57chcxAehVzAAJ2m/giphy.gif',
    'https://media.giphy.com/media/73wXWfiOGtooIZaAal/giphy.gif',
    'https://media.giphy.com/media/AvnMvXYzYCP7t9dzPs/giphy.gif',
    'https://media.giphy.com/media/8DfVtebeXew3HhfDWb/giphy.gif',
    'https://media.giphy.com/media/BhxUTi4u3TmwmJtHU8/giphy.gif',
    'https://media.giphy.com/media/WeVgblTusuhkDZwzox/giphy.gif',
    'https://media.giphy.com/media/Gk8bdnaKQkpWHTFhpc/giphy.gif',
    'https://media.giphy.com/media/zY7kaXnH3xHhxOsDS1/giphy.gif',
    'https://media.giphy.com/media/gQg8E7ZaaLyPHOBoj7/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZzMW80MGhpeGw4M3hoZzIwbGJnNXF4c3NzMGZwNnBjYzFoZm9vYSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/LHkAoszzROhIL4qZKl/giphy.gif',
    'https://media.giphy.com/media/usUwmY9oz6POKF9Fck/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXQ0azR6cnJpdzVwc2p5ZHViYWRxMmlkcGJmMnpqb2ZiOWRxYjcwbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JA1kmF8xsLQCm2qMcA/giphy.gif',
    'https://media.giphy.com/media/1mKXOVMIsnWjuQt5S9/giphy.gif',
    ''
];

// Function to get a random GIF
function getRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifLinks.length);
    return gifLinks[randomIndex];
}

function yesButtonListener() {

    gifMain.src = getRandomGif();
    questionMain.innerHTML = "Yiiiippeeeee! Thank you for loving me ❤️, " + input + "!";
    yesButton.innerHTML = "Shuffle!";
    yesButton.style.marginLeft = "0px";
    yesButton.style.width = "75%";
    noButton.style.display = "none";

    playRandomAudio();

}

function playAudio(url) {
    // If there is already an audio playing, pause it and reset its time
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the playback position
    }

    // Create a new Audio object for the new song
    currentAudio = new Audio(url);
    currentAudio.play();
}

function noButtonListener() {

    yesButton.style.marginLeft = "0px";
    yesButton.style.width = "75%";
    
    if (count == 1) {
        gifMain.src = "https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif";
        questionMain.innerHTML = "You don't love me?";

        playAudio('https://www.myinstants.com/media/sounds/_up_-sad-scene.mp3');

    }
    else if (count == 2) {
        gifMain.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxoZDB0Y3ExcTJobmtjcW56eDJoOHpzN2IzaW53b21rd3A5cnU3diZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/0eMumU6VJ01GPh9MI0/giphy.gif";
        questionMain.innerHTML = "Please love me?";

        playAudio('https://www.myinstants.com/media/sounds/xxxtentacion-everybody-dies-in-their-nightmares-audio-audiotrimmer.mp3');

    }
    else if (count == 3) {
        gifMain.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxoZDB0Y3ExcTJobmtjcW56eDJoOHpzN2IzaW53b21rd3A5cnU3diZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/3A19mlEm93sL50Oqxt/giphy.gif";
        questionMain.innerHTML = "Bach nchri lik cheklata!";

        playAudio('https://www.myinstants.com/media/sounds/past-lives-sad-sigma.mp3');

    }
    else if (count == 4) {
        gifMain.src = "https://media.giphy.com/media/lfDCxCbC7gTSDGFR7b/giphy.gif";
        questionMain.innerHTML = "Grrrrrr!";

        playAudio('https://www.myinstants.com/media/sounds/rick-and-morty-sad-f.mp3');

    }
    else if (count == 5) {
        gifMain.src = "https://media.giphy.com/media/fzCztgffWI2TnzfBzp/giphy.gif";
        questionMain.innerHTML = "3afak?";

        playAudio('https://www.myinstants.com/media/sounds/sad-meow-song.mp3');

    }
    else if (count == 6) {
        gifMain.src = "https://media.giphy.com/media/FfDhjJ5G6H1l8EfjxB/giphy.gif";
        questionMain.innerHTML = "Stop playing with me! Do you love me or not?!";

        playAudio('https://www.myinstants.com/media/sounds/ya-no-me-enojo-contigo-solo-observo-y-pienso.mp3');

    }
    else if (count == 7) {
        gifMain.src = "https://media.giphy.com/media/80F13cLZ5KEamnyGhn/giphy.gif";
        questionMain.innerHTML = "I cry!";

        playAudio('https://www.myinstants.com/media/sounds/gato-sad.mp3');

    }
    else if (count == 8) {
        gifMain.src = "https://media.giphy.com/media/aRXeM45svNsfWrsjKt/giphy.gif";
        questionMain.innerHTML = "Love me! Now! Lmakan mu7assar!";

        playAudio('https://www.myinstants.com/media/sounds/verbatim-xqc-meme.mp3');

    }
    else if (count == 9) {
        gifMain.src = "https://media.giphy.com/media/1xC3XRTwZ3uKd9wuBS/giphy.gif";
        questionMain.innerHTML = "Rah kan9ssed!";

        playAudio('https://www.myinstants.com/media/sounds/mangekyo-sharingan-sound-effect-with-download-link_pWHYt57.mp3');

    }
    else if (count == 10) {
        gifMain.src = "https://media.giphy.com/media/QuCslOrnS649PSCnn7/giphy.gif";
        questionMain.innerHTML = "LOVE ME. THIS IS AN ORDER! (Or you, Geh!)";

        playAudio('https://www.myinstants.com/media/sounds/pointless-button-do-not-push.mp3');

    }
    else {
        gifMain.src = "https://media.giphy.com/media/saTZnyc5qqEn8Uaj7r/giphy.gif";
        questionMain.innerHTML = "YOU ARE FORCED TO CLICK \"YES\", NOW!";

        const audioFiles = [
            'https://www.myinstants.com/media/sounds/dry-fart.mp3',
            'https://www.myinstants.com/media/sounds/perfect-fart.mp3',
            'https://www.myinstants.com/media/sounds/fart-with-extra-reverb.mp3',
            'https://www.myinstants.com/media/sounds/fart_2.mp3',
            'https://www.myinstants.com/media/sounds/fart_1.mp3'
        ];

        const audio = new Audio(audioFiles[finalNoCounts]);

        finalNoCounts = (finalNoCounts + 1) % audioFiles.length;

        audio.play();

    }
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    count = count + 1;
}
