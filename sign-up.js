// signup.js (use this)
const API_BASE = "https://auth-api-0dk2.onrender.com/";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
      const response = await fetch(`${API_BASE}api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Registration successful! Redirecting to login...");
        setTimeout(() => (window.location.href = "login.html"), 1200);
      } else {
        alert("❌ " + (data.message || "Registration failed"));
      }
    } catch (err) {
      alert("⚠ Error connecting to server. Check console and network tab.");
      console.error(err);
    }
  });
});