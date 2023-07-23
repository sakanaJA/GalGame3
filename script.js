var story = [
  {
    text: "Welcome to the game! Do you want to continue?",
    options: [
      {text: "Yes", next: 1},
      {text: "No", next: null},
    ],
    image: "character.png"
  },
  {
    text: "Great! Let's get started.",
    options: [
      {text: "I'm ready!", next: 2},
      {text: "Wait, I'm not ready yet.", next: null},
    ],
    image: "character_happy.png"
  },
  // Add more story parts here
];

var gameState = 0;

function updateGameState() {
  var part = story[gameState];
  document.getElementById('text-area').innerText = part.text;
  document.getElementById('choice1').innerText = part.options[0].text;
  document.getElementById('choice2').innerText = part.options[1].text;
  document.getElementById('character-image').src = part.image;
}

document.getElementById('choice1').addEventListener('click', function() {
  gameState = story[gameState].options[0].next;
  updateGameState();
});

document.getElementById('choice2').addEventListener('click', function() {
  gameState = story[gameState].options[1].next;
  updateGameState();
});

updateGameState();
