import React, { Component } from "react";

class Ex4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Fetch posts from API
  loadPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      this.setState({ posts: data });
    } catch (error) {
      console.error("Error fetching posts:", error);
      this.setState({ hasError: true });
    }
  };

  // Lifecycle method - runs automatically after component loads
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling lifecycle method
  componentDidCatch(error, info) {
    alert("Error occurred in component!");
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Blog Posts</h1>

        {this.state.posts.slice(0, 10).map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Ex4;