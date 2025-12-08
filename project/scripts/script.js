// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Dynamic Service List (for homepage)
const services = [
  {
    title: 'Data Strategy & Consulting',
    description: 'Align your data goals with business outcomes.',
  },
  {
    title: 'Business Intelligence Dashboards',
    description: 'Visualize KPIs and metrics in real time.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and make proactive decisions.',
  },
  {
    title: 'Data Visualization',
    description: 'Tell compelling stories with your data.',
  }
];

const serviceList = document.getElementById('service-list');
if (serviceList) {
  services.forEach(service => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${service.title}</strong>: ${service.description}`;
    serviceList.appendChild(li);
  });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('form-feedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Please fill out all fields.';
      feedback.style.color = 'red';
      return;
    }

    // Save to localStorage
    const formData = { name, email, message };
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Feedback
    feedback.textContent = `Thank you, ${name}! We'll be in touch soon.`;
    feedback.style.color = 'green';

    // Clear form
    contactForm.reset();
  });
}