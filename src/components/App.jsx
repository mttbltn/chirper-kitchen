import React from "react";

// const App = props => {
//   return <h1>Hello, {props.name}</h1>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = { text: "Who's on first" };
    }
  }
  handleChange(words) {
    this.setState({ text: words });
  }
  render() {
    return (
      <React.Fragment>
        <h1> Hello {this.props.name} </h1>
        <h2> {this.state.text} </h2>
        <input
          type="text"
          value={this.state.text}
          onChange={event => {
            this.handleChange(event.target.value);
          }}
        />
        <button type="submit" />
      </React.Fragment>
    );
  }
}

export default App;
