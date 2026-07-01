import React from "react";
import ReactDOM from "react-dom/client";

class EventExamples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      rupees: "",
      euro: ""
    };
  }

  // Increment Counter
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // Decrement Counter
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  // Say Hello
  sayHello = () => {
    alert("Hello! Have a Nice Day.");
  };

  // Multiple Methods
  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  // Welcome Message
  sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event
  onPress = () => {
    alert("I was clicked");
  };

  // Handle Input
  handleChange = (event) => {
    this.setState({
      rupees: event.target.value
    });
  };

  // Currency Conversion (1 Euro = ₹100)
  handleSubmit = () => {
    const euro = (this.state.rupees / 100).toFixed(2);

    this.setState({
      euro: euro
    });
  };

  render() {
    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        &nbsp;

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br />
        <br />

        <button
          onClick={() => this.sayWelcome("Welcome to React Events!")}
        >
          Say Welcome
        </button>

        <br />
        <br />

        <button onClick={this.onPress}>
          OnPress
        </button>

        <hr />

        <h2>Currency Convertor</h2>

        <label>Indian Rupees: </label>

        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
        />

        <br />
        <br />

        <button onClick={this.handleSubmit}>
          Convert
        </button>

        <h3>Euro: € {this.state.euro}</h3>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventExamples />);