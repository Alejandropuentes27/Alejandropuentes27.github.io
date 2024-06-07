const button = document.getElementById('button1');
const link = document.getElementById("nextPage");


const images = ['image/primo.jpg', 'image/bear-primo.jpg', 'image/primo-laying-down.jpg', 'image/cool-primo.jpg', 'image/primo-jump.jpg'];
let currentImage = 0;
const galleryImage = document.getElementById('galleryImage');

setInterval(() => {
    galleryImage.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
}, 3000);