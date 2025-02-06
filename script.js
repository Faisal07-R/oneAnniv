const loveButton = document.getElementById('love-button');
const initialScreen = document.getElementById('initial-screen');
const videoContainer = document.getElementById('video-container');
const anniversaryVideo = document.getElementById('anniversary-video');
const photoContainer = document.getElementById('photo-container');
const backgroundAudio = document.getElementById('background-audio');
const slides = document.querySelectorAll('.slide');
const messageContainer = document.getElementById('message');

const messages = [
    "Hari pertama kita bersamaan, awal cerita indah kita ❤️",
    "Petualangan kita yang tak terlupakan di bulan kedua bersama",
    "Kenangan manis bulan ketiga yang selalu membuatku tersenyum",
    "Kebersamaan kita yang semakin berarti di bulan ke dua belas",
    "Cinta kita tumbuh seiring berjalannya waktu",
    "Setiap detik bersamamu adalah anugerah",
    "Hari pertama kita bersamaan, awal cerita indah kita ❤️",
    "Petualangan kita yang tak terlupakan di bulan kedua bersama",
    "Kenangan manis bulan ketiga yang selalu membuatku tersenyum",
    "Kebersamaan kita yang semakin berarti di bulan ke dua belas",
    "Hari pertama kita bersamaan, awal cerita indah kita ❤️",
    "Petualangan kita yang tak terlupakan di bulan kedua bersama",
    "Kenangan manis bulan ketiga yang selalu membuatku tersenyum",
    "Kebersamaan kita yang semakin berarti di bulan ke dua belas",
    "Cinta kita tumbuh seiring berjalannya waktu",
    "Setiap detik bersamamu adalah anugerah",
    "Hari pertama kita bersamaan, awal cerita indah kita ❤️",
    "Petualangan kita yang tak terlupakan di bulan kedua bersama",
    "Kenangan manis bulan ketiga yang selalu membuatku tersenyum",
    "Kebersamaan kita yang semakin berarti di bulan ke dua belas"
];

let currentIndex = 0;

loveButton.addEventListener('click', () => {
    initialScreen.classList.add('hidden'); 
    videoContainer.style.display = 'flex'; 
    anniversaryVideo.play(); 
});

anniversaryVideo.addEventListener('ended', () => {
    videoContainer.style.display = 'none'; 
    photoContainer.classList.remove('hidden'); 
    backgroundAudio.play(); 
    startSlideshow();
});

function startSlideshow() {
    showSlide(currentIndex);
    showMessage(currentIndex);

    let slideshowInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex < slides.length) {
            showSlide(currentIndex);
            showMessage(currentIndex);
        } else {
            clearInterval(slideshowInterval);
        }
    }, 5000);
}

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function showMessage(index) {
    messageContainer.innerText = messages[index];
}
