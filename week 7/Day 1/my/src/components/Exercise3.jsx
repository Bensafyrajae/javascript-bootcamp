import React, { Component } from "react";
import "../Exercise.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise3 extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Ceci est un titre</h1>
        <p className="para">Ceci est un paragraphe stylé avec CSS</p>
        <a href="https://reactjs.org">Lien vers React</a>
        <form>
          <input type="text" placeholder="Votre nom" />
          <button>Envoyer</button>
        </form>
        <img src="https://via.placeholder.com/150" alt="exemple" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise3;
