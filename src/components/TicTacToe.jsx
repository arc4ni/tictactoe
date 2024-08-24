import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
    { combo: [0, 1, 2], strikeClass: "strike-row-1"},
    { combo: [3, 4, 5], strikeClass: "strike-row-2"},
    { combo: [6, 7, 8], strikeClass: "strike-row-3"},
    { combo: [0, 3, 6], strikeClass: "strike-column-1"},
    { combo: [1, 4, 7], strikeClass: "strike-column-2"},
    { combo: [2, 5, 8], strikeClass: "strike-column-3"},
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1"},
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2"},
];

function checkWinner(tiles, setWinningTiles, setGameState) {
    for (const { combo } of winningCombinations) {
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];

        if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
            setWinningTiles(combo);
            if (tileValue1 === PLAYER_X) {
                setGameState(GameState.playerXWins);
            } else {
                setGameState(GameState.playerOWins);
            }
            return;
        }
    }

    if (tiles.every(tile => tile !== null)) {
        setGameState(GameState.draw);
    }
}

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [gameState, setGameState] = useState(GameState.inProgress);
    const [winningTiles, setWinningTiles] = useState([]);

    const handleTileClick = (index) => {
        if (gameState !== GameState.inProgress || tiles[index] !== null) {
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
    };

    const handleReset = () => {
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(PLAYER_X);
        setWinningTiles([]);
    };

    useEffect(() => {
        checkWinner(tiles, setWinningTiles, setGameState);
    }, [tiles]);

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board 
                tiles={tiles}
                onTileClick={handleTileClick}
                playerTurn={playerTurn}
                winningTiles={winningTiles}
            />
            <GameOver gameState={gameState} />
            <Reset gameState={gameState} onReset={handleReset} />
        </div>
    );
}

export default TicTacToe;
