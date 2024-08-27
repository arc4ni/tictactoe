# React Tic Tac Toe

This is a simple implementation of the classic game Tic Tac Toe built with React. Players can enjoy a game of Tic Tac Toe where they can compete against each other. The game also tracks the number of wins for each player.

## Features

- Playable Tic Tac Toe game with a clean and interactive UI.
- Responsive design for desktop and mobile view.
- Game state tracking with total wins for X and O.
- Animated tiles for wins and hover effects.
- Reset button to clear the board and start a new game.

## Built With

- React
- CSS

## Installation

1. Clone the repo:
   ```bash
   git clone <your-repo-url>

2. Install dependencies:
    cd <project-directory>
    npm install
    npm install --save typescript

3. Start the development server:
    npm start

## Usage

To play the game, simply start the server and access `http://localhost:3000` in your browser. Click on the tiles to make your move. The game will indicate when a player has won or if the game ends in a draw.

## Code Overview

### Components

- **Board**: Handles the layout of the game tiles.
- **Tile**: Represents each tile on the board.
- **GameOver**: Displayed when a game has ended showing the winner or if it's a draw.
- **Reset**: Button to reset the game.

## Styles

This project uses CSS for styling with animations for the winning tiles and hover effects for a better user experience.
