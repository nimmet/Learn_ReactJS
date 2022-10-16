import React, { Component, useRef } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class Monster extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      // {
      //     name: 'Linda'
      // },

      // {
      //     name: 'Frank'
      // },

      // {
      //     name: 'Atilla'
      // }
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <SearchBox
          className="sarch-box"
          onChangeHandler={onSearchChange}
          placeholder="Search box"
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default Monster;
