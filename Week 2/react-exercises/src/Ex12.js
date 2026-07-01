import React from "react";
import ReactDOM from "react-dom/client";

// Guest Component
function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <h3>Available Flights</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>09:00 AM</td>
          </tr>

          <tr>
            <td>AI205</td>
            <td>Mumbai</td>
            <td>Bangalore</td>
            <td>01:30 PM</td>
          </tr>

          <tr>
            <td>AI309</td>
            <td>Madurai</td>
            <td>Hyderabad</td>
            <td>06:00 PM</td>
          </tr>
        </tbody>
      </table>

      <p><b>Please login to book tickets.</b></p>
    </div>
  );
}

// User Component
function UserPage() {
  return (
    <div>
      <h2>Welcome User!</h2>

      <h3>Flight Ticket Booking</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI205</td>
            <td>Mumbai</td>
            <td>Bangalore</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI309</td>
            <td>Madurai</td>
            <td>Hyderabad</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Main Component
class TicketBookingApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;

    if (this.state.isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>Ticket Booking App</h1>

        {this.state.isLoggedIn ? (
          <button onClick={this.logout}>Logout</button>
        ) : (
          <button onClick={this.login}>Login</button>
        )}

        <hr />

        {page}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TicketBookingApp />);