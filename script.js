// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
      });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('header')) {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          mobileMenuBtn.classList.remove('active');
        }
      }
    });
    
  });
  
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Apply styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'var(--text)';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
  
  // Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real application, you would send this to a server
        showNotification('Thank you for subscribing!');
        emailInput.value = '';
      }
    });
  }
  