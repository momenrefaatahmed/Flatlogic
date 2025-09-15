// isAuthenticated.js
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return Boolean(token);
};

export const isAdminUser = () => {
  return localStorage.getItem("isAdmin") === "true";
};
