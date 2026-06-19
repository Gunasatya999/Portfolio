window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const themeBtn = document.getElementById("theme-toggle");
    const header = document.getElementById("header");
    const typingElement = document.getElementById("typing-text");
    const revealElements = document.querySelectorAll(
        ".about-content, .about-image, .info-card"
    );
    const skillBars = document.querySelectorAll(".progress");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show-menu");
        });
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            themeBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
        });
    }

    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("sticky", window.scrollY > 50);
        });
    }

    const roles = [
        "Aspiring Software Developer",
        "Full Stack Developer",
        "Web Developer",
        "Problem Solver"
    ];

    let roleIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (!typingElement) return;

        if (charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (!typingElement) return;

        if (charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 300);
        }
    }

    if (typingElement) {
        typeEffect();
    }

    const revealOnScroll = () => {
        if (!revealElements.length) return;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < window.innerHeight - 100) {
                element.style.animation = "fadeUp 1s ease forwards";
            }
        });
    };

    if (revealElements.length) {
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    }

    const animateSkills = () => {
        if (!skillBars.length) return;

        skillBars.forEach((bar) => {
            const barTop = bar.getBoundingClientRect().top;

            if (barTop < window.innerHeight - 100) {
                const finalWidth =
                    bar.classList.contains("html") ? "95%" :
                    bar.classList.contains("css") ? "90%" :
                    bar.classList.contains("js") ? "85%" :
                    bar.classList.contains("react") ? "80%" :
                    bar.classList.contains("node") ? "75%" :
                    bar.classList.contains("express") ? "75%" :
                    bar.classList.contains("mongo") ? "70%" :
                    "80%";

                bar.style.width = finalWidth;
                bar.style.transition = "2s ease";
            }
        });
    };

    if (skillBars.length) {
        window.addEventListener("scroll", animateSkills);
        animateSkills();
    }
});
/* =========================
   PROJECT CARD REVEAL
========================= */

const projectCards =
document.querySelectorAll(".project-card");

const revealProjects = () => {

    projectCards.forEach((card) => {

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.animation =
            "zoomFade 0.8s ease forwards";
        }

    });

};

window.addEventListener(
"scroll",
revealProjects
);

revealProjects();
/* =========================
   TIMELINE REVEAL
========================= */

const timelineItems =
document.querySelectorAll(".timeline-item");

const revealTimeline = () => {

    timelineItems.forEach((item) => {

        const itemTop =
        item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 100){

            item.style.animation =
            "slideTimeline 1s ease forwards";
        }

    });

};

window.addEventListener(
"scroll",
revealTimeline
);

revealTimeline();
/* =========================
   CERTIFICATE REVEAL
========================= */

const certificateCards =
document.querySelectorAll(
".certificate-card, .achievement-card"
);

const revealCertificates = () => {

    certificateCards.forEach((card) => {

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.animation =
            "fadeScale 0.8s ease forwards";
        }

    });

};

window.addEventListener(
"scroll",
revealCertificates
);

revealCertificates();
/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const name =
            document.getElementById("name").value;

            const email =
            document.getElementById("email").value;

            const subject =
            document.getElementById("subject").value;

            const message =
            document.getElementById("message").value;

            if(
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ){

                alert(
                    "Please fill all fields."
                );

                return;
            }

            alert(
                "Message sent successfully!"
            );

            contactForm.reset();

        }
    );
}

/* =========================
   CONTACT REVEAL
========================= */

const contactElements =
document.querySelectorAll(
".contact-card, .contact-form-wrapper"
);

const revealContact = () => {

    contactElements.forEach((item) => {

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.style.animation =
            "contactFade 0.8s ease forwards";
        }

    });

};

window.addEventListener(
"scroll",
revealContact
);

revealContact();