// -----------------------------
// Ticket Form Validation & Submit
// -----------------------------
const ticketForm = document.getElementById('ticketForm');

ticketForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('ticketName').value.trim();
    const email = document.getElementById('ticketEmail').value.trim();
    const type = document.getElementById('ticketType').value;
    const desc = document.getElementById('ticketDesc').value.trim();

    if(!name || !email || !type || !desc){
        showToast("Please fill all fields!", "error");
        return;
    }

    // Simulate form submission
    showToast("Ticket submitted successfully!", "success");
    ticketForm.reset();
});

// -----------------------------
// Toast Notification Function
// -----------------------------
function showToast(message, type){
    let toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(()=> toast.remove(), 300);
    }, 3000);
}

// -----------------------------
// Smooth Scroll + Section Reveal
// -----------------------------
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if(window.pageYOffset >= sectionTop) current = section.getAttribute('id');

        // Reveal animation
        if(window.pageYOffset + window.innerHeight > section.offsetTop + 100){
            section.classList.add('visible');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active');
        }
    });
});

// -----------------------------
// Smooth Scroll on Nav Click
// -----------------------------
navLinks.forEach(link => {
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    });
});
