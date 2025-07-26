// =============================================
// STEP 1: Set up the image array 
// =============================================
// Array of all images to cycle through
// Customize these paths to your own images
const images = [
  './assets/image-content/image-1.png',
  './assets/image-content/image-2.png',
  './assets/image-content/image-3.png',
  './assets/image-content/image-4.png',
  './assets/image-content/image-5.png',
  './assets/image-content/image-6.png'
];

const beachImages = [
  {
    src: './assets/beach-images/beach1.png',
    caption: 'You made it to the beach 🌴'
  },
  {
    src: './assets/beach-images/beach2.png',
    caption: 'You are the kitty by the way :333'
  },
  {
    src: './assets/beach-images/beach-tj-talking.png',
    caption: 'He says hi :)'
  },
  {
    src: './assets/beach-images/beach-bella.png',
    caption: 'Now Bella is here too!!'
  }
  // Add more as needed
];

let beachIndex = 1;

const beachImg = document.getElementById('beach-image');
const beachCaption = document.getElementById('beach-caption');
const beachContent = document.getElementById('beach-content');
const beachButton = document.getElementById('beach-next-button');

function updateBeachScene() {
  const scene = beachImages[beachIndex];
  beachImg.src = scene.src;
  beachCaption.textContent = scene.caption;

  beachIndex = (beachIndex + 1) % beachImages.length; // loop around if needed
}

beachButton.addEventListener('click', updateBeachScene); // handles mobile tap too

// =============================================
// STEP 2: Reference HTML elements 
// =============================================
// Connect to the elements we need to change
const imageContent = document.querySelector('#intro-content .image-content');
const mainButton = document.getElementById('main-button');      // Image switch button
const finalMessage = document.querySelector('.final-message');  // Final message

// =============================================
// STEP 3: Track what image we're at 
// =============================================
// Start with the first image (index 0)
let currentIndex = 0;

// =============================================
// STEP 4: Update image function 
// =============================================
// Function to change images with fade effect
function updateImage() {
  // Fade out current image
  imageContent.style.opacity = 0;
  
  // Preload next image
  const img = new Image();
  img.src = images[currentIndex];
  
  // When image is loaded
  img.onload = () => {
    // Change to new image
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Fade in new image
    imageContent.style.opacity = 1;
  };
}

// =============================================
// STEP 5: Initial image display 
// =============================================
// Show first image when page loads
updateImage();

// =============================================
// STEP 6: Button click handler 
// =============================================
// Change image when button is clicked
mainButton.addEventListener('click', () => {
  // Go to next image
  currentIndex++;
  
  // Update if not at the end
  if (currentIndex < images.length) {
    updateImage();
  }
  
  // Once at the last image, show the final message and hide the button 
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';

    // Show the beach button!
    document.getElementById('beach-button').style.display = 'inline-block';
  }
});

document.getElementById('beach-button').addEventListener('click', () => {
  document.getElementById('intro-content').style.display = 'none';
  document.getElementById('beach-content').style.display = 'flex';
  document.getElementById('beach-caption').style.display = 'flex';
  document.getElementById('beach-next-button').style.display = 'inline-flex';
  document.getElementById('beach-image').style.display = 'block';
});