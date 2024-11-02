document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const togglePassword = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");

  document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
      const passwordField = document.getElementById("password");
      const toggleIcon = document.getElementById("togglePassword");

      // Toggle the type attribute between "password" and "text"
      const type =
        passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);

      // Toggle the icon class between "fa-eye-slash" and "fa-eye"
      if (type === "text") {
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
      } else {
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
      }
    });

  // Handle login form submission
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      // Simulate backend response (replace with real Electron API)
      const response = await window.electronAPI.login({ username, password });

      if (response.success) {
        alert("Login successful");
        window.location.href = "index.html"; // Redirect after login
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  });
});
