import React, { Component } from "react";

export default class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  // Lifecycle method
  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();

      this.setState({
        user: data.results[0],
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <h2>Loading user...</h2>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>User Details</h2>

        <img
          src={user.picture.large}
          alt="user"
          style={{ borderRadius: "50%" }}
        />

        <h3>
          {user.name.title} {user.name.first}
        </h3>
      </div>
    );
  }
}