import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, winningTiles }) {
    return (
        <div className="board">
            {tiles.map((value, index) => (
                <Tile 
                    key={index}
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(index)} 
                    value={value}
                    className={`${index % 3 === 2 ? '' : 'right-border'} ${index > 5 ? '' : 'bottom-border'}`}
                    isWinning={winningTiles.includes(index)}
                />
            ))}
        </div>
    );
}

export default Board;
