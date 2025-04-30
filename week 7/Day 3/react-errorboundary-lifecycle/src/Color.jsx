import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert("The component has been unmounted!");
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true }; 
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  // Part I:
  shouldComponentUpdate(nextProps, nextState) {
    return true; 
  }

  // Part II:
  componentDidUpdate(prevProps, prevState) {
    console.log("after update");
  }

  // Part III:
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate"); 
    return null;
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };


  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor} id="btnBlue">
          Change color to blue
        </button>
        {this.state.show && <Child />}
        <button onClick={this.handleDelete}>Delete Child</button>
      </div>
    );
  }
}

export default Color;