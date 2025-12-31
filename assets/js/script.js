// DOM Content Loaded with error handling
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Initialize all functions
    initNavigation();
    initScrollAnimations();
    initTypingEffect();
    initSkillBars();
    initScrollToTop();
    initSmoothScrolling();
    initActiveNavigation();
    initKeyboardNavigation();

    console.log("Website initialized successfully");
  } catch (error) {
    console.error("Error initializing website:", error);
  }
});

// Enhanced Navigation Menu Toggle with Accessibility
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

  if (!hamburger || !navMenu) {
    console.warn("Navigation elements not found");
    return;
  }

  // Toggle mobile menu with ARIA support
  const toggleMenu = () => {
    const isActive = navMenu.classList.contains("translate-x-0");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("translate-x-0");
    navMenu.classList.toggle("translate-x-full");

    // Update ARIA attributes
    hamburger.setAttribute("aria-expanded", !isActive);

    // Prevent body scroll when menu is open
    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  hamburger.addEventListener("click", toggleMenu);

  // Keyboard support for hamburger
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("translate-x-0");
      navMenu.classList.add("translate-x-full");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("translate-x-0");
      navMenu.classList.add("translate-x-full");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  // Enhanced navbar scroll effect with throttling
  let ticking = false;

  const updateNavbar = () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    ticking = false;
  };

  const requestNavbarUpdate = () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  };

  window.addEventListener("scroll", requestNavbarUpdate);
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add animation classes and observe elements
  const animatedElements = document.querySelectorAll(
    ".skill-category, .project-card, .education-item, .personal-category, .contact-item, .timeline-item"
  );

  animatedElements.forEach((el, index) => {
    if (index % 2 === 0) {
      el.classList.add("fade-in");
    } else {
      el.classList.add("slide-in-right");
    }
    observer.observe(el);
  });
}

// Enhanced Typing Effect for Hero Title with Better Arabic Support
function initTypingEffect() {
  const typingElement = document.querySelector(".typing-text");

  if (!typingElement) {
    console.warn("Typing element not found");
    return;
  }

  const text = "عبد الرحمن المصطفى";
  let index = 0;
  let isDeleting = false;
  let currentText = "";
  let typingSpeed = 150;

  function type() {
    if (isDeleting) {
      currentText = text.substring(0, index - 1);
      index--;
      typingSpeed = 75; // Faster when deleting
    } else {
      currentText = text.substring(0, index + 1);
      index++;
      typingSpeed = 150; // Normal speed when typing
    }

    typingElement.textContent = currentText;

    let typeSpeed = typingSpeed;

    if (!isDeleting && index === text.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      typeSpeed = 500; // Pause before restarting
    }

    setTimeout(type, typeSpeed);
  }

  // Start typing effect after a delay
  setTimeout(type, 1000);
}

// Skill Bars Animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          const progress = skillBar.dataset.progress;

          setTimeout(() => {
            skillBar.style.width = progress + "%";
          }, 500);

          skillObserver.unobserve(skillBar);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    skillObserver.observe(bar);
  });
}

// Scroll to Top Button
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Active Navigation Highlighting
function initActiveNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to current section link
        const activeLink = document.querySelector(
          `.nav-link[href="#${currentId}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

// Enhanced Keyboard Navigation
function initKeyboardNavigation() {
  // Add tabindex to focusable elements if not present
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );

  focusableElements.forEach((element) => {
    if (!element.hasAttribute("tabindex")) {
      element.setAttribute("tabindex", "0");
    }

    // Add focus-visible class for better focus indicators
    element.addEventListener("focus", () => {
      element.classList.add("focus-visible");
    });

    element.addEventListener("blur", () => {
      element.classList.remove("focus-visible");
    });
  });

  // Skip to content functionality
  const skipLink = document.createElement("a");
  skipLink.href = "#main-content";
  skipLink.textContent = "تخطي إلى المحتوى الرئيسي";
  skipLink.className =
    "sr-only focus:not:sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--secondary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1001;
    transition: top 0.3s;
  `;

  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "6px";
  });

  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);
}
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Image Gallery Functions
const imageGallery = {
  currentProject: "",
  currentImageIndex: 0,
  projects: {
    project1: {
      title: 'مشروع "اكتشف دمشق"',
      images: [
        {
          type: "placeholder",
          icon: "fas fa-video",
          text: "محتوى مرئي - مشروع اكتشف دمشق",
        },
        {
          type: "placeholder",
          icon: "fas fa-camera",
          text: "تصوير المعالم الثقافية",
        },
        { type: "placeholder", icon: "fas fa-film", text: "مونتاج الفيديو" },
        {
          type: "placeholder",
          icon: "fas fa-microphone",
          text: "مقابلات ميدانية",
        },
      ],
    },
    project2: {
      title: "المشاريع الطلابية",
      images: [
        { type: "placeholder", icon: "fas fa-blog", text: "مدونات تعليمية" },
        { type: "placeholder", icon: "fas fa-users", text: "مقابلات طلابية" },
        { type: "placeholder", icon: "fas fa-edit", text: "تحرير المحتوى" },
        {
          type: "placeholder",
          icon: "fas fa-graduation-cap",
          text: "مشاريع تعليمية",
        },
      ],
    },
  },
};

function openImageGallery(projectKey) {
  const modal = document.getElementById("imageModal");
  const modalTitle = document.getElementById("modalTitle");
  const galleryImages = document.getElementById("galleryImages");

  // Set current project and reset index
  imageGallery.currentProject = projectKey;
  imageGallery.currentImageIndex = 0;

  // Set modal title
  modalTitle.textContent = imageGallery.projects[projectKey].title;

  // Clear and populate images
  galleryImages.innerHTML = "";

  imageGallery.projects[projectKey].images.forEach((image, index) => {
    const imageElement = document.createElement("div");
    imageElement.className = "gallery-image";

    if (image.type === "placeholder") {
      imageElement.innerHTML = `
                <div style="text-align: center; color: var(--text-light);">
                    <i class="${image.icon}" style="font-size: 3rem; margin-bottom: 1rem; color: var(--secondary-color);"></i>
                    <p>${image.text}</p>
                </div>
            `;
    } else {
      imageElement.innerHTML = `<img src="${image.src}" alt="${image.alt}" style="width: 100%; height: 100%; object-fit: cover;">`;
    }

    galleryImages.appendChild(imageElement);
  });

  // Show modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // Update gallery position
  updateGalleryPosition();
}

function closeImageGallery() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function changeImage(direction) {
  const project = imageGallery.projects[imageGallery.currentProject];
  const totalImages = project.images.length;

  imageGallery.currentImageIndex += direction;

  if (imageGallery.currentImageIndex >= totalImages) {
    imageGallery.currentImageIndex = 0;
  } else if (imageGallery.currentImageIndex < 0) {
    imageGallery.currentImageIndex = totalImages - 1;
  }

  updateGalleryPosition();
}

function updateGalleryPosition() {
  const galleryImages = document.getElementById("galleryImages");
  const translateX = -imageGallery.currentImageIndex * 100;
  galleryImages.style.transform = `translateX(${translateX}%)`;
}

// Close modal when clicking outside
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeImageGallery();
  }
});

// Keyboard navigation for gallery
document.addEventListener("keydown", function (e) {
  const modal = document.getElementById("imageModal");
  if (modal.style.display === "block") {
    switch (e.key) {
      case "Escape":
        closeImageGallery();
        break;
      case "ArrowLeft":
        changeImage(1);
        break;
      case "ArrowRight":
        changeImage(-1);
        break;
    }
  }
});

// Contact Form Animation (if you want to add a contact form later)
function initContactForm() {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add form submission logic here
      alert("شكراً لك! سيتم التواصل معك قريباً.");
    });
  }
}

// Add loading animation
function showLoading() {
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `
        <div class="spinner"></div>
        <p>جاري التحميل...</p>
    `;
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.remove();
  }, 2000);
}

// Initialize loading animation on page load
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Add CSS for loader
const loaderStyles = `
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid var(--bg-light);
    border-top: 5px solid var(--secondary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loader p {
    margin-top: 1rem;
    color: var(--text-color);
    font-weight: 500;
}
`;

// Inject loader styles
const styleSheet = document.createElement("style");
styleSheet.textContent = loaderStyles;
document.head.appendChild(styleSheet);

// Add some utility functions
const utils = {
  // Debounce function for performance optimization
  debounce: function (func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Check if element is in viewport
  isInViewport: function (element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Format numbers with Arabic locale
  formatNumber: function (num) {
    return num.toLocaleString("ar-SA");
  },
};

// Export functions for global use
window.openImageGallery = openImageGallery;
window.closeImageGallery = closeImageGallery;
window.changeImage = changeImage;
window.downloadCV = downloadCV;

// CV Download Function
function downloadCV() {
  // Create a temporary link element
  const link = document.createElement("a");

  // Link to the CV PDF file
  link.href = "assets/cv/Abdulrahman_Almustafa_CV.pdf";
  link.download = "Abdulrahman_Almustafa_CV.pdf";

  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show feedback to user
  showDownloadNotification();
}

// Download notification function
function showDownloadNotification() {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "download-notification";
  notification.innerHTML = `
        <i class="fas fa-download"></i>
        <span>جاري تحميل السيرة الذاتية...</span>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Performance Monitoring and Error Handling
function initPerformanceMonitoring() {
  // Monitor page load performance
  window.addEventListener("load", () => {
    if ("performance" in window) {
      const perfData = performance.getEntriesByType("navigation")[0];
      console.log(
        `Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`
      );
    }
  });

  // Global error handler
  window.addEventListener("error", (e) => {
    console.error("JavaScript error:", e.error);
    // You could send this to an error tracking service in production
  });

  // Unhandled promise rejection handler
  window.addEventListener("unhandledrejection", (e) => {
    console.error("Unhandled promise rejection:", e.reason);
    e.preventDefault();
  });
}

// Initialize performance monitoring
initPerformanceMonitoring();
