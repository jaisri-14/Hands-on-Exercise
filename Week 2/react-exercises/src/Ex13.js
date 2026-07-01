import React from "react";
import ReactDOM from "react-dom/client";

// ---------------- Book Details ----------------
function BookDetails() {
  const books = [
    { id: 1, title: "React Basics", author: "Jordan Walke" },
    { id: 2, title: "JavaScript Essentials", author: "Brendan Eich" },
    { id: 3, title: "Learning ES6", author: "John Doe" }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <b>{book.title}</b> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------- Blog Details ----------------
function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Components" },
    { id: 2, title: "Conditional Rendering" },
    { id: 3, title: "Using Hooks" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

// ---------------- Course Details ----------------
function CourseDetails() {
  const courses = [
    { id: 1, name: "React JS" },
    { id: 2, name: "Node JS" },
    { id: 3, name: "MongoDB" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

// ---------------- Main Component ----------------
class BloggerApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBooks: true,
      showBlogs: true,
      showCourses: false
    };
  }

  render() {
    // Element Variable
    let courseComponent;
    if (this.state.showCourses) {
      courseComponent = <CourseDetails />;
    }

    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>Blogger App</h1>

        {/* Conditional Rendering using && */}
        {this.state.showBooks && <BookDetails />}

        <hr />

        {/* Conditional Rendering using Ternary Operator */}
        {this.state.showBlogs ? (
          <BlogDetails />
        ) : (
          <h3>No Blogs Available</h3>
        )}

        <hr />

        {/* Conditional Rendering using Element Variable */}
        {courseComponent}

        {/* Conditional Rendering using IIFE */}
        <hr />
        {(() => {
          if (this.state.showCourses) {
            return <h3>Courses Available</h3>;
          } else {
            return <h3>Courses are currently unavailable.</h3>;
          }
        })()}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BloggerApp />);