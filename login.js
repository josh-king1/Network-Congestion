document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get the input values
    const email = form.querySelector('input[type="mail"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();

    // Prepare the request body
    const userData = { email, password };

    try {
      const response = await fetch("https://auth-api-0dk2.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Login successful!");
        console.log("User logged in:", data);

        // Save the token (if returned) in localStorage
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        // Redirect to another page (dashboard or home)
        window.location.href = "ez.html";
      } else {
        alert(`❌ Login failed: ${data.message || "Invalid email or password"}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("⚠ Error connecting to server. Please try again later.");
    }
  });
});