// Sign Up
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }

    alert("Sign Up Successful!");

    // Redirect to main website page
    window.location.href = "index.html";  // yahan IT Help Desk main page ka URL
});
localStorage.setItem("username", document.getElementById("name").value);