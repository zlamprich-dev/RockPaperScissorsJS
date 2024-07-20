
# Rock-Paper-Scissors Game

Welcome to the Rock-Paper-Scissors game! This is a simple web-based game where you can play Rock-Paper-Scissors against the computer. The first player to reach 10 points wins the game.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Game Logic](#game-logic)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

You will need a web browser to run this game. No additional software is required.

### Installation

1. Clone the repository:
   \`\`\`sh
   git clone https://github.com/your-username/rock-paper-scissors.git
   \`\`\`
2. Open the \`index.html\` file in your preferred web browser.

## Usage

Once the game is loaded in your browser, you will see buttons for "Rock", "Paper", "Scissors", and "Exit". 

1. Click on one of the "Rock", "Paper", or "Scissors" buttons to make your choice.
2. The computer will randomly make its choice.
3. The result of the round will be displayed, and the scores will be updated.
4. The game continues until either you or the computer reaches 10 points.

## Game Logic

The game follows the standard rules of Rock-Paper-Scissors:

- Rock beats Scissors
- Scissors beat Paper
- Paper beats Rock
- If both players choose the same item, it's a tie

The game updates the scores and displays the current round number, player choices, computer choices, and results.

## Project Structure

\`\`\`
rock-paper-scissors/
├── index.html
└── rockPaperScissors.js
\`\`\`

### index.html

This file contains the HTML structure of the game. It includes buttons for player choices and placeholders for displaying game information.

### rockPaperScissors.js

This file contains the JavaScript logic for the game. It handles button clicks, game logic, and updates the DOM with the game results.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

Distributed under the MIT License. See \`LICENSE\` for more information.
