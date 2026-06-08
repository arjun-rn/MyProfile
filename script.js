// ===========================
// TYPING ANIMATION
// ===========================

const typingTexts = [
  "Passionate about technology, innovation, and building impactful digital solutions.",
  "Think, Code, Create.",
  "Building Tomorrow's Technology Today."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;

function typeText() {
  const typingElement = document.querySelector('.typing-text');
  const currentText = typingTexts[textIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeText, delayBetweenTexts);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
  }

  const speed = isDeleting ? erasingSpeed : typingSpeed;
  setTimeout(typeText, speed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
  typeText();
});

// ===========================
// NAVIGATION - MOBILE MENU
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===========================
// SCROLL ANIMATIONS (Fade In)
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all project cards, strength items, and section content
document.querySelectorAll('.project-card, .strength-item, .skill-category').forEach(el => {
  el.style.animation = 'none';
  el.style.opacity = '0';
  observer.observe(el);
});

// ===========================
// ACTIVE NAVIGATION HIGHLIGHTING
// ===========================

const sections = document.querySelectorAll('section');
const navLinksMenu = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinksMenu.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Add active class styling in CSS
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: var(--primary-color) !important;
  }
  
  .nav-link.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(style);

// ===========================
// SKILL BAR ANIMATION ON SCROLL
// ===========================

const skillFillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'skillFill 1.5s ease-out forwards';
      skillFillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-fill').forEach(el => {
  el.style.animation = 'none';
  el.style.width = '0';
  skillFillObserver.observe(el);
});

// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const bgAnimation = document.querySelector('.background-animation');
  if (bgAnimation) {
    bgAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===========================
// COUNTER ANIMATION (Optional - for future use)
// ===========================

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.animation = 'fadeInUp 0.8s ease-out';
});

// ===========================
// SMOOTH TRANSITIONS
// ===========================

// Add loading animation on page transitions
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && !e.target.href.includes('#')) {
    document.body.style.opacity = '0.8';
  }
});

// ===========================
// FORM VALIDATION (Future use)
// ===========================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ===========================
// RESPONSIVE MENU HANDLING
// ===========================

const mobileMenuToggle = debounce(() => {
  if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
}, 250);

window.addEventListener('resize', mobileMenuToggle);

// ===========================
// DARK MODE THEME
// ===========================

// The dark theme is already set as default in CSS
// Add this if you want to implement toggle for light/dark mode in future

function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
}

// ===========================
// LOG SCRIPT LOAD SUCCESS
// ===========================

console.log('Portfolio script loaded successfully!');

// ===========================
// MINIGAME - BOTTOM-LEFT HIDDEN BUTTON
// ===========================
// minigame removed

// ===========================
// CHATBOT - replies with laughing emoji only
// ===========================
(function(){
  const chatbot = document.querySelector('.chatbot');
  const toggle = document.querySelector('.chatbot-toggle');
  const panel = document.getElementById('chatbotPanel');
  const messages = document.getElementById('chatbotMessages');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  if(!chatbot || !toggle || !panel || !messages || !form || !input) return;

  function appendMessage(text, who){
    const el = document.createElement('div');
    el.className = 'chatbot-message ' + who;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  toggle.addEventListener('click', ()=>{
    const open = chatbot.classList.toggle('open');
    // support both patterns
    if(open){
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      input.focus();
    } else {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    }
  });

  // FLAMES game state
  let flamesState = null;
  let flamesName1 = '';
  let flamesName2 = '';

  function calculateFlames(name1, name2) {
    name1 = name1.toLowerCase().replace(/\s/g, '');
    name2 = name2.toLowerCase().replace(/\s/g, '');
    
    let temp1 = name1.split('');
    let temp2 = name2.split('');
    
    // Remove common letters
    temp1 = temp1.filter(char => {
      const idx = temp2.indexOf(char);
      if (idx !== -1) {
        temp2.splice(idx, 1);
        return false;
      }
      return true;
    });
    
    const count = temp1.length + temp2.length;
    const flames = ['Friends', 'Lovers', 'Acquaintances', 'Mates', 'Enemies', 'Siblings'];
    
    let idx = 0;
    let remaining = flames.slice();
    let step = count;
    
    while (remaining.length > 1) {
      idx = (step - 1) % remaining.length;
      remaining.splice(idx, 1);
    }
    
    return remaining[0];
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const val = input.value.trim();
    if(!val) return;
    appendMessage(val, 'user');
    input.value = '';
    
    // FLAMES game flow
    if (flamesState === 'waiting_name1') {
      flamesName1 = val;
      flamesState = 'waiting_name2';
      setTimeout(()=>{
        appendMessage(`Got it! "${val}" – now, what's the second name?`, 'bot');
      }, 350);
      return;
    }
    
    if (flamesState === 'waiting_name2') {
      flamesName2 = val;
      const result = calculateFlames(flamesName1, flamesName2);
      flamesState = null;
      setTimeout(()=>{
        appendMessage(`✨ ${flamesName1} & ${val}: ${result} ✨`, 'bot');
      }, 350);
      return;
    }
    
    // custom keyword/responses (priority checks)
    const lower = val.toLowerCase();

    // Start FLAMES game
    if (lower === 'flames' || lower.includes('play flames')) {
      flamesState = 'waiting_name1';
      setTimeout(()=>{
        appendMessage("Let's play FLAMES! 💕 What's the first name?", 'bot');
      }, 350);
      return;
    }

    // contains 'abel' -> joanaa with pointing emojis
    if (lower.includes('abel')) {
      setTimeout(()=>{
        appendMessage('joanaa 👉👈', 'bot');
      }, 350);
      return;
    }

    // contains 'abhiram' -> bestie
    if (lower.includes('abhiram')) {
      setTimeout(()=>{
        appendMessage('bestie', 'bot');
      }, 350);
      return;
    }

    // exact "whos better" (also accept who's) -> SEEYUHH + heart
    const cleaned = lower.replace(/[\W_]+/g,' ').trim();
    if (cleaned === "whos better" || cleaned === "who s better" || cleaned === "who's better") {
      setTimeout(()=>{
        appendMessage('SEEYUHH ❤️', 'bot');
      }, 350);
      return;
    }

    // if user greets, reply with helpful greeting and prompt to pick a preset
    const greetings = ['hi', 'hello', 'hey'];
    if (greetings.includes(lower)) {
      setTimeout(()=>{
        appendMessage('Hey there — how can I help you? Please pick an option from the presets above.', 'bot');
      }, 350);
      return;
    }

    // default: bot replies with a single laughing emoji
    setTimeout(()=>{
      appendMessage('😂', 'bot');
    }, 450);
  });

  // preset question buttons with preset biodata answers
  const presets = document.querySelectorAll('.preset-btn');
  const presetAnswers = {
    "What's your full name?": "I'm Arjun R Nair.",
    "Where are you from?": "I'm based in India.",
    "What are your main skills?": "Main skills: C, Python, HTML, CSS, Web Development.",
    "What's your education background?": "Second-year B.Tech Computer Science student at TocH Institute of Science and Technology.",
    "How can I contact you?": "Email: arjunrajesh.suriya@gmail.com — GitHub: https://github.com/arjun-rn — LinkedIn: https://www.linkedin.com/in/arjun-r-3b432b37b/"
  };

  if(presets && presets.length){
    presets.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const q = btn.dataset.question || btn.textContent;
        appendMessage(q, 'user');
        // ensure panel is open
        if(!chatbot.classList.contains('open')){
          chatbot.classList.add('open');
          panel.classList.add('open');
          panel.setAttribute('aria-hidden','false');
        }
        // respond with preset answer if available, otherwise laughing emoji
        const answer = presetAnswers[q] || '😂';
        setTimeout(()=>{
          appendMessage(answer, 'bot');
        }, 350);
      });
    });
  }
})();
