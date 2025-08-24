import axios from "axios";

const API_BASE = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const res = await axios.get(`${API_BASE}/users/${username}`, {
      headers: {
        Authorization: import.meta.env.VITE_GITHUB_TOKEN
          ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
          : undefined
      }
    });
    return res.data;
  } catch (err) {
    throw new Error("User not found");
  }
};

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = username ? `${username} in:login` : "";

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: import.meta.env.VITE_GITHUB_TOKEN
          ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
          : undefined,
      },
    }
  );

  return response.data.items;
};

export async function searchUsers(query) {
  const response = await fetch(`https://api.github.com/search/users?q=${query}`);
  const data = await response.json();
  return data.items || [];
}
 