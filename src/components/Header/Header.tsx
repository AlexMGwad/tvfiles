import React from "react";

class Header extends React.Component{
    render(){
    return(
        <div className="header">
        <nav>
        <ul>
        <li><a href="/films">Films</a></li>
        <li><a href="/series">Séries</a></li>
        <li><a href="/inscription">S'inscrire</a></li>
        <li><a href="/connexion">Se connecter</a></li>
        </ul>
        </nav>
        </div>
    );
}
}

export default Header;