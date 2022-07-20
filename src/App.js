import "./styles.css";
import React from "react";

export default class App extends React.Component {
  state = {
    tables: [
      {
        name: "Leonardo",
        age: 26,
        music: "whatever it takes"
      },
      {
        name: "Andre",
        age: 31,
        music: "Don't give up"
      },
      {
        name: "Theo",
        age: 12,
        music: "When i can see you again"
      },
      {
        name: "Thaís",
        age: 14,
        music: "high hopes"
      },
      {
        name: "Julia",
        age: 17,
        music: "Have a nice day"
      },
      {
        name: "Laura",
        age: 18,
        music: "give me a shot at the night"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {this.state.tables.map((things) => (
          <div>
            <h2>Name: {things.name}</h2>
            <h2>Favorite music: {things.music}</h2>
          </div>
        ))}
      </div>
    );
  }
}
