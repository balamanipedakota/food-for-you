function signupUser() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
  return false;
}

function loginUser() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    localStorage.setItem("isLoggedIn", "true");


    console.log(localStorage.getItem("isLoggedIn"));

    alert("Login successful!");

    window.location.replace("home.html");

  } else {
    alert("Invalid credentials!");
  }

  return false;
}