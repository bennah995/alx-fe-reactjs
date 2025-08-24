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
