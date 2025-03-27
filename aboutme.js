document.addEventListener('DOMContentLoaded', function() {
    const lightModeBtn = document.getElementById('lightModeBtn');
    const darkModeBtn = document.getElementById('darkModeBtn');
    const pinkModeBtn = document.getElementById('pinkModeBtn');
    
    lightModeBtn.addEventListener('click', function() {
        document.body.classList.remove('dark-mode');
        document.body.classList.remove('pink-mode');
    });

    darkModeBtn.addEventListener('click', function() {
        document.body.classList.remove('pink-mode');
        document.body.classList.add('dark-mode');
    });

    pinkModeBtn.addEventListener('click', function() {
        document.body.classList.add('pink-mode');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
            } else {
                entry.target.classList.remove("show"); 
            }
        });
    }, { threshold: 0.2 }); 

    sections.forEach(section => observer.observe(section));
});

