import React from 'react';
require ('./memory.css');

const Header = (props) => {
    let {score, topScore} = props;
    return (
        <header class="container-fluid fixed-top">
        <div class="row">
            <h1 class="col-sm-8">Superheroes Memory Game</h1>
            <nav class="col-sm-4">
                <p>Score: <span>{score}</span></p>
                <p>Top Score: <span>{topScore}</span></p>
            </nav>
        </div>
    </header>
    )
}

export default Header;