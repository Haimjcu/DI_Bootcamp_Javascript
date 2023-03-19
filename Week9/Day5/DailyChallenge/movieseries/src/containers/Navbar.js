import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-dark mb-5">
                <div class="container">
                    <div class="navbar-header">
                        <Link className="navbar-brand text-white text-lg brand-text" to="/">MovieSeriesInfo</Link>
                    </div>
                        <ul class="navbar-nav ml-auto text-light d-inline-block">
                            <li class="nav-item d-inline-block mr-4"><i class="fab fa-imdb fa-5x" id="imdb-logo"></i></li>
                            <li class="nav-item d-inline-block mr-4"><i class="fab fa-react fa-5x" id="react-logo"></i></li>
                        </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;