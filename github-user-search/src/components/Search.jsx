import { useState } from "react";
import { fetchAdvancedusers } from "../services/githubService";

import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [location, setLocation] = useState("")
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    try {
      if (location || minRepos) {
        // Advanced search
        const data = await fetchAdvancedUsers({ username, location, minRepos });
        setResults(data || []);
      } else {
        // Simple username search
        const data = await fetchUserData(username);
        setUser(data);
      }
    } catch (err) {
      setError("Looks like we can’t find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded mr-2"
        />

        <input 
          type="text" 
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}

        />

        <input 
          type="number"
          placeholder="Minimum repos..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />

        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user{error}</p>}
      
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="80" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}

      {results.length > 0 && (
        <ul>
          {results.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} width="50" />
              <p>{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
            </li>
          ))}
        </ul>
      )} 

          </div>
        );
      };

export default Search;
