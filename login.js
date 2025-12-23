
// Login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    // Normally yahan authentication hoga, lekin simple demo ke liye:
    alert("Login Successful!");
    
    // Redirect to main website page
    window.location.href = "index.html";  // yahan IT Help Desk main page ka URL
});
let username = localStorage.getItem("username");
if(username){
    window.location.href = "index.html";
}