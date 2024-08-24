function Tile({ className, value, onClick, playerTurn, isWinning }) {
    let hoverClass = null;
    if (value == null && playerTurn != null) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }
    const tileClass = isWinning ? `tile ${className} ${hoverClass} winning-tile` : `tile ${className} ${hoverClass}`;
    return (
        <div onClick={onClick} className={tileClass}>
            {value}
        </div>
    );
}

export default Tile;