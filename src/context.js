import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NOTES":
      return {
        ...state,
        note_list: action.payload,
        heading: "Search Results",
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    note_list: [],
    heading: "New 20 Notes",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  componentDidMount() {
    axios
      .get(`https://qiita.com/api/v2/items?page=1&per_page=20`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        //  console.log(res.data)
        this.setState({ note_list: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
