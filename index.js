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
    src: './assets/beach-images/beach1.png',
    caption: 'I didn\'t write that flower growing code btw but its pretty cute huh'
  },
  {
    src: './assets/beach-images/beach1.png',
    caption: 'This is the story of how a kitty and a t rex fell deeply in luv (refresh da page if you wanna restart or get lost hehehehaw)'
  },
  {
    src: './assets/beach-images/beach2.png',
    caption: 'You are the kitty by the way :333'
  },
  {
    src: './assets/beach-images/beach3.png',
    caption: 'Oh who\'s that!!!???'
  }, // 5
  {
    src: './assets/beach-images/beach4.png',
    caption: 'Ohhh dats TJ!!!! :33333'
  },
  {
    src: './assets/beach-images/beach5.png',
    caption: 'OMGGGG WHY HE YELLINGGGG!!!!'
  },
  {
    src: './assets/beach-images/beach3.png',
    caption: '...'
  },
  {
    src: './assets/beach-images/beach3.png',
    caption: 'Shawty is unphased'
  },
  {
    src: './assets/beach-images/beach3.png',
    caption: 'hehehehaw...'
  }, // 10
  {
    src: './assets/beach-images/beach7.png',
    caption: 'meow :3'
  },
  {
    src: './assets/beach-images/beach5.png',
    caption: 'IM SORRY I ALWAYS ROAR EVEN WHEN IM TALKING NORMALLY CAUSE IM A TREX'
  },
  {
    src: './assets/beach-images/beach3.png',
    caption: '...'
  },
  {
    src: './assets/beach-images/beach7.png',
    caption: 'meow :3'
  },
  {
    src: './assets/beach-images/beach3.png',
    caption: '...'
  }, // 15
  {
    src: './assets/beach-images/beach5.png',
    caption: 'Well shawty do you speak English?'
  },
  {
    src: './assets/beach-images/beach5.png',
    caption: 'Lemme take you on a date :3333'
  },
  {
    src: './assets/beach-images/beach3.png',
    caption: 'Choose your option! (go on a date????)'
  },
  {
    src: './assets/beach-images/beach5.png',
    caption: 'Omggg you wanna go on a date with me :3333'
  },
  {
    src: './assets/beach-images/beach5.png',
    caption: 'Hows tomorrow night :33333'
  },
  {
    src: './assets/beach-images/beach7.png',
    caption: 'meow :3'
  },
  {
    src: './assets/beach-images/dinner1.png',
    caption: 'Da next day :3'
  },
  {
    src: './assets/beach-images/dinner2.png',
    caption: '[tj and bella have arrived at dinner]'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'Well this place is nice!!'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'So...'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'Whats your name again shawty?'
  },
  {
    src: './assets/beach-images/dinner4.png',
    caption: 'meow'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'Oh... heh...'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'I guess you only speak... cat.. heh'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'Wellpppp...'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'I love you :333333'
  },
  {
    src: './assets/beach-images/dinner4.png',
    caption: 'meow i meow love meow you meow too meow :33333'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'OMGGGGG'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'DO YOU WANNA BE MINE FOREVER AND BE MY WIFEY KITTY THEN :33333'
  },
  {
    src: './assets/beach-images/dinner2.png',
    caption: 'Choose your option! (Be his forever????)'
  },
  {
    src: './assets/beach-images/dinner3.png',
    caption: 'OMGGGG YAYYYYY. YOU WANNA BE MY WIFEY :33333'
  },
  {
    src: './assets/beach-images/dinner2.png',
    caption: 'And they lived happily ever after. The end'
  },
  {
    src: './assets/beach-images/dinner2.png',
    caption: 'Click the next button to restart the story!'
  }
  
];

let beachIndex = 1;

const beachImg = document.getElementById('beach-image');
const beachCaption = document.getElementById('beach-caption');
const beachContent = document.getElementById('beach-content');

const beachNextButton = document.getElementById('beach-next-button');
const choiceButtons = document.getElementById('choice-buttons');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

function updateBeachScene() {
  const scene = beachImages[beachIndex];
  beachImg.src = scene.src;
  beachCaption.textContent = scene.caption;
  console.log("Current beachIndex:", beachIndex);

  if (beachIndex === 17 || beachIndex === 34) {
    beachNextButton.style.display = 'none';
    choiceButtons.style.display = 'flex'; // show Yes/No
  } else {
    beachNextButton.style.display = 'flex';
    choiceButtons.style.display = 'none';
  }

  beachIndex = (beachIndex + 1) % beachImages.length; // loop around if needed
}

function clickNo() {
  beachCaption.textContent = 'Lol you don\'t get to say no lollll'
}

beachNextButton.addEventListener('click', updateBeachScene); // handles mobile tap too
yesButton.addEventListener('click', updateBeachScene);
noButton.addEventListener('click', clickNo);


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