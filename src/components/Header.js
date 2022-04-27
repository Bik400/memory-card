

const Header = (props) => {
    return(
        <div className="header">
            <div className="header-flex">
                <h1>Memory Game</h1>
                <div className="paragraph-flex">
                    <p>Score: {props.score}</p>
                    <p>High Score: {props.highScore}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;