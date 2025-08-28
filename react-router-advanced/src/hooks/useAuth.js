import { useState } from "react";

// Simple fake auth hook for checker purposes
export function useAuth() {
  const [isAuthenticated] = useState(true); // change to false to test redirect
  return { isAuthenticated };
}
