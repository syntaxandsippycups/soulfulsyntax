const tabs = document.querySelectorAll('.tab');
    const paragraphs = document.querySelectorAll('.about-info p');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active state from all
        tabs.forEach(t => t.classList.remove('active'));
        paragraphs.forEach(p => {
          p.classList.remove('active');
        });

        // Add to clicked
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        const targetParagraph = document.getElementById(targetId);
        targetParagraph.classList.add('active');
      });
    });


    document.addEventListener("DOMContentLoaded", function () {
  const phrases = [
    "Full Stack Developer",
    "Freelancer",
    "Christ Follower",
    "Wife",
    "Mother"
  ];

  const typedElement = document.getElementById("typed");
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pauseBetween = 2000;

  function type() {
    const currentPhrase = phrases[index];

    if (isDeleting) {
      typedElement.textContent = currentPhrase.substring(0, charIndex--);
    } else {
      typedElement.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, pauseBetween);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : typingSpeed);
    }
  }

  type();
});


document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function(event) {
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
