// Switch Forms
function showSignup() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.add("active");
}

function showLogin() {
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

// Signup Function
function signup() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    let user = { name, email, password };

    // Save in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully!");
    showLogin();
}

// Login Function
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No account found, please signup first!");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert("Login Successful!");

        //  Next page (future)
        // window.location.href = "scanner.html";

    } else {
        alert("Invalid Email or Password");
    }
}
