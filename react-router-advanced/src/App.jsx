import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

// --- Simulated authentication state ---
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return { isAuthenticated, login: () => setIsAuthenticated(true), logout: () => setIsAuthenticated(false) };
}

// --- Protected Route wrapper ---
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// --- Components ---
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
}

function Login({ auth }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={auth.login}>Login</button>
    </div>
  );
}

// Profile with nested routes
function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested route content here */}
    </div>
  );
}

function ProfileDetails() {
  return <h3>Profile Details Section</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings Section</h3>;
}

// Dynamic route example
function Post() {
  const { id } = useParams();
  return <h2>Viewing Post ID: {id}</h2>;
}

// --- Main App ---
export default function App() {
  const auth = useAuth();

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/post/123">Dynamic Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login auth={auth} />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={auth.isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}
