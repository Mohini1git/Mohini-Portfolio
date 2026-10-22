// Main screen component
export class Screen {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentPage = 'home';
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    this.setupScrollSpy();
  }

  render() {
    this.container.innerHTML = `
      <div class="portfolio-container">
        <!-- Header Navigation -->
        <header class="site-header">
          <div class="header-content">
            <div class="logo">
              <span class="logo-name">&lt;Mohini Patil /&gt;</span>
            </div>

            <nav class="main-nav">
              <a href="#home" class="nav-link active" data-page="home">Home</a>
              <a href="#education" class="nav-link" data-page="education">Education</a>
              <a href="#skills" class="nav-link" data-page="skills">Skills</a>
              <a href="#projects" class="nav-link" data-page="projects">Projects</a>
              <a href="#process" class="nav-link" data-page="process">Process</a>
              <a href="#experience" class="nav-link" data-page="experience">Experience</a>
              <a href="#contact" class="nav-link" data-page="contact">Contact</a>
            </nav>
          </div>
        </header>

        <!-- Main Content - All sections in one scrollable page -->
        <main class="main-content continuous-scroll" id="main-content">
          <section id="home" class="page-section"></section>
          <section id="education" class="page-section"></section>
          <section id="skills" class="page-section"></section>
          <section id="projects" class="page-section"></section>
          <section id="process" class="page-section"></section>
          <section id="experience" class="page-section"></section>
          <section id="contact" class="page-section"></section>
        </main>
      </div>
    `;
    
    // Load all sections at once for continuous scrolling
    this.loadAllSections();
  }

  loadAllSections() {
    const homeSection = this.container.querySelector('#home');
    const educationSection = this.container.querySelector('#education');
    const skillsSection = this.container.querySelector('#skills');
    const projectsSection = this.container.querySelector('#projects');
    const processSection = this.container.querySelector('#process');
    const experienceSection = this.container.querySelector('#experience');
    const contactSection = this.container.querySelector('#contact');

    if (homeSection) this.renderHome(homeSection);
    if (educationSection) this.renderEducation(educationSection);
    if (skillsSection) this.renderSkills(skillsSection);
    if (projectsSection) this.renderProjects(projectsSection);
    if (processSection) this.renderProcess(processSection);
    if (experienceSection) this.renderExperience(experienceSection);
    if (contactSection) this.renderContact(contactSection);
  }

  bindEvents() {
    const navLinks = this.container.querySelectorAll('.nav-link');

    // Smooth scroll navigation
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupScrollSpy() {
    const sections = this.container.querySelectorAll('.page-section');
    const navLinks = this.container.querySelectorAll('.nav-link');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          // Update active nav link
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === sectionId) {
              link.classList.add('active');
            }
          });
          
          // Update current page
          this.currentPage = sectionId;
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  updateContent() {
    // This method is no longer needed for continuous scroll
    // All sections are loaded at once in loadAllSections()
  }

  renderHome(container) {
    container.innerHTML = `
      <div class="page-content home-page">
        <div class="tagline">Open to project-based, part-time, and full-time work</div>
        
        <div class="hero-section">
          <div class="hero-text">
            <h1 class="hero-title">Hi, I'm <span class="highlight-text">Mohini Patil</span></h1>
            <p class="hero-subtitle">
             React Native & React Developer — I build scalable,
             high-performance web and mobile applications
             using React.js, React Native, Flutter,
             JavaScript, TypeScript, and Dart, with 4+
             years of experience in responsive UI development,
             REST API integration, third-party SDK integration,
             and cross-platform app development for web,
             Android, and iOS.
            </p>
            <p class="hero-description">
             My experience includes developing cross-platform mobile applications
             using React Native and Flutter, implementing responsive and
             user-friendly UI designs, integrating RESTful APIs and third-party SDKs,
             and managing application data and real-time updates using
             WebSockets. I work on everything from UI implementation
             and API integration to debugging, performance optimization,
             and delivering seamless user experiences across Android and iOS.
             I enjoy solving complex technical challenges, writing clean and maintainable code,
             and turning ideas into reliable applications ready for deployment on the
             Google Play Store and Apple App Store.
            </p>

            
            <div class="cta-buttons">
              <button class="btn btn-primary" onclick="document.querySelector('[data-page=\\'contact\\']').click()">
                📧 Let's talk
              </button>
              <a href="https://drive.google.com/uc?export=download&id=1CtgtlWdXm8gLw5qZSjTu7kMdBIteodQQ" class="btn btn-secondary" download="Mohini_Patil_CV.pdf">
                📄 Download CV
              </a>
              <button class="btn btn-secondary" onclick="document.querySelector('[data-page=\\'projects\\']').click()">
                See my work
              </button>
            </div>
          </div>
          
          <div class="hero-image">
            <img src="/src/assets/images/profile-placeholder.svg" alt="Mohini Patil" class="profile-image" />
          </div>
        </div>
      </div>
    `;
  }

  renderEducation(container) {
    const educationData = [
      {
        degree: 'Post Graduation',
        field: 'Master of Science in Computer Science',
        institution: 'NMU University',
        location: 'Dhule, Maharashtra',
        period: '2020 - 2022',
        grade: '87.63%',
        icon: '🎓',
        description: [
          'Developed a strong foundation in computer science concepts and software development.',
          'Studied core concepts relevant to programming, problem-solving, and application development.',
        ]
      },
      {
        degree: 'Graduation',
        field: 'B.Sc. in Computer Science',
        institution: 'NMU University',
        location: 'Dhule, Maharashtra',
        period: '2017 - 2020',
        grade: '74.63%',
        icon: '🎓',
        description: [
          'Studied core computer science subjects, including programming, database management, data structures, and software development.',
          'Developed a foundation in logical thinking, problem-solving, and computer applications.',
        ]
      },
      {
        degree: '12th Standard',
        field: 'Science (PCM)',
        institution: 'Jai Hind Junior College',
        location: 'Dhule, Maharashtra',
        period: '2016 - 2017',
        grade: 'Percentage: 62.46%',
        icon: '📚',
        description: [
          'Studied core subjects and developed analytical, mathematical, and problem-solving skills.',
        ]
      },
      {
        degree: '10th Standard',
        field: 'Secondary Education',
        institution: 'Jai Hind High School',
        location: 'Dhule, Maharashtra',
        period: '2014 - 2015',
        grade: 'Percentage: 78.20%',
        icon: '📚',
        description: [
          'Built a strong academic foundation in mathematics, science, and other core subjects.',
        ]
      }
    ];

    container.innerHTML = `
      <div class="page-content education-page">
        <h2 class="education-main-title">Education</h2>
        <p class="education-main-subtitle">My academic journey and qualifications</p>
        <div class="subtitle-underline"></div>
        
        <div class="education-timeline">
          ${educationData.map((edu, index) => `
            <div class="education-card">
              <div class="edu-icon-wrapper">
                <span class="edu-icon">${edu.icon}</span>
              </div>
              <div class="edu-content">
                <div class="edu-header">
                  <h3 class="edu-degree">${edu.degree}</h3>
                  <span class="edu-period">${edu.period}</span>
                </div>
                <h4 class="edu-field">${edu.field}</h4>
                <div class="edu-details">
                  <p class="edu-institution">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    ${edu.institution}
                  </p>
                  <p class="edu-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${edu.location}
                  </p>
                  <p class="edu-grade">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    ${edu.grade}
                  </p>
                </div>
                <div class="edu-description">
                  ${edu.description.map(desc => `
                    <p class="edu-desc-item">⚡ ${desc}</p>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderSkills(container) {
    const skillCategories = [
      {
        icon: '📱',
        title: 'Mobile Development',
        skills: ['React Native', 'Android', 'iOS', 'Flutter','Web']
      },
      {
        icon: '🌐',
        title: 'Frontend Development',
        skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux Toolkit', 'Dart']
      },
//      {
//        icon: '⚙️',
//        title: 'Backend & APIs',
//        skills: ['Python', 'REST APIs', 'GraphQL', 'Socket.IO', 'Postman']
//      },
//      {
//        icon: '🗄️',
//        title: 'Databases',
//        skills: ['Firebase Firestore', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Redis']
//      },
      {
        icon: '🔧',
        title: 'DevOps & Tools',
        skills: ['Git', 'GitLab', 'GitHub', 'CI/CD', 'App Store Connect', 'Google Play Console']
      },
//      {
//        icon: '💻',
//        title: 'Languages',
//        skills: ['TypeScript', 'JavaScript',]
//      }
    ];

    container.innerHTML = `
      <div class="page-content skills-page">
        <h2 class="skills-main-title">What I work with</h2>
        <p class="skills-main-subtitle">Tools and technologies I reach for every day</p>
        <div class="subtitle-underline"></div>
        
        <div class="skills-categories-grid">
          ${skillCategories.map(category => `
            <div class="skill-category-card">
              <div class="category-header">
                <span class="category-icon">${category.icon}</span>
                <h3 class="category-title">${category.title}</h3>
              </div>
              <div class="category-skills">
                ${category.skills.map(skill => `
                  <span class="skill-tag">${skill}</span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderProjects(container) {
    const projects = [
      {
        title: 'Water App',
        description: 'A water services application that allows users to raise complaints about water meters, high bills, and water quality. Users can request new water connections, meter installations, and reconnections, make payments, and access services in multiple languages.',
          tech: ['React Native(Android & iOS)', 'JavaScript', 'Firebase', 'REST API','React.js(Website)'],
      },
      {
        title: 'Loan Application',
        description: 'A mobile loan application that enables users to apply for loans and check their eligibility. Integrated REST APIs and third-party SDKs to connect the application with backend services and support the loan application process.',
          tech: ['React Native(Android & iOS)', 'JavaScript', 'Firebase', 'REST API', 'SDK Integration'],
      },
      {
        title: 'Crypto Exchange',
        description: 'A cryptocurrency exchange application that enables users to buy, sell, swap, exchange, and stake cryptocurrencies. Integrated third-party APIs and SDKs and implemented WebSockets for real-time cryptocurrency data updates.',
          tech: ['React Native(Android & iOS)', 'TypeScript', 'Firebase', 'REST API', 'SDK Integration'],
      },
      {
        title: 'High Court App',
        description: 'A legal case management application that helps lawyers search and filter High Court cases, add new cases, view ongoing cases, and manage subscription payments. Developed for Android, iOS, and web platforms using Flutter.',
         tech:['Flutter', 'Dart', 'AI Integration', 'API Integration', 'Push Notifications','Android',' iOS', 'Web'],
      },
      {
        title: 'Taaskyz',
        description: 'An AI-powered task management application that allows teams to create and assign tasks, generate tasks using AI, and interact with an AI assistant. Includes progress tracking, notifications, and daily, weekly, monthly, and yearly reports.',
         tech: ['Flutter', 'Dart', 'AI Integration', 'API Integration', 'Push Notifications','Android',' iOS', 'Web'],
      },
    ];

    container.innerHTML = `
      <div class="page-content projects-page">
        <h2 class="projects-main-title">Featured Projects</h2>
        <p class="projects-main-subtitle">Some of my recent work</p>
        <div class="subtitle-underline"></div>
        
        <div class="projects-grid">
          ${projects.map((project, index) => `
            <div class="project-card" data-index="${index}">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                ${project.extraCount ? `<span class="tech-badge extra-count">${project.extraCount}</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderTestimonials(container) {
    container.innerHTML = `
      <div class="page-content testimonials-page">
        <h2 class="section-title">Testimonials</h2>
        <p class="section-subtitle">What clients say about working with me</p>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p class="testimonial-text">"Mohini delivered our mobile app ahead of schedule with exceptional quality. Her attention to detail and technical expertise made the entire process smooth."</p>
            <div class="testimonial-author">
              <strong>John Smith</strong>
              <span>CEO, Tech Startup</span>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">"Working with Mohini was a great experience. She understood our requirements perfectly and built exactly what we needed."</p>
            <div class="testimonial-author">
              <strong>Sarah Johnson</strong>
              <span>Product Manager</span>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">"Highly skilled developer who can handle both frontend and backend. Our app runs flawlessly thanks to her work."</p>
            <div class="testimonial-author">
              <strong>David Chen</strong>
              <span>CTO, E-commerce Company</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderProcess(container) {
    const processSteps = [
      {
        number: '01',
        icon: '💬',
        title: "Let's talk",
        description: "We hop on a call and you tell me what you're trying to build. I'll ask a bunch of questions — not to sound smart, but because I need to understand your business before I write a single line of code. By the end of this call, we'll both know if we're a good fit."
      },
      {
        number: '02',
        icon: '🎨',
        title: 'Plan it out',
        description: "I'll sketch out how the screens flow, figure out the right tech stack for your use case, and put together a rough timeline. You get a simple proposal document — nothing fancy, just clear enough that you know what you're getting and when."
      },
      {
        number: '03',
        icon: '💻',
        title: 'Build & show',
        description: "I work in 2-week chunks. At the end of each chunk, I send you a build to try out. You play with it, tell me what feels right and what doesn't, and I adjust. No waiting 3 months to see something that isn't what you wanted."
      },
      {
        number: '04',
        icon: '🚀',
        title: 'Ship it',
        description: "I test on a few real devices (not just simulators), fix whatever breaks, and then submit to both App Store and Play Store. I've done this enough times to know what Apple and Google will reject, so we avoid the usual back-and-forth."
      },
      {
        number: '05',
        icon: '🔧',
        title: 'Stick around',
        description: "Once the app is live, I don't vanish. If something breaks or you need a small tweak, I handle it. Most of my clients stay with me for ongoing updates because they trust the work — and I like building long-term relationships over one-off projects."
      }
    ];

    container.innerHTML = `
      <div class="page-content process-page">
        <h2 class="process-main-title">How I work</h2>
        <p class="process-main-subtitle">Straightforward process, no surprises</p>
        <div class="subtitle-underline"></div>
        
        <div class="process-timeline">
          ${processSteps.map((step, index) => `
            <div class="timeline-step">
              <div class="step-number-circle">${step.number}</div>
              <div class="step-content-card">
                <div class="step-header">
                  <span class="step-icon">${step.icon}</span>
                  <h3 class="step-title">${step.title}</h3>
                </div>
                <p class="step-description">${step.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="process-cta">
          <h3>Got an idea? Let's see if I can help.</h3>
          <button class="btn btn-primary cta-button" onclick="document.querySelector('[data-page=\\'contact\\']').click()">
            Get in touch →
          </button>
        </div>
      </div>
    `;
  }

  renderExperience(container) {
    const stats = [
      { icon: '📱', number: '25+', label: 'Mobile Apps Published' },
      { icon: '🏢', number: '4+', label: 'Companies Worked With' },
      { icon: '📋', number: '50+', label: 'Projects Completed' },
      { icon: '📅', number: '6+', label: 'Years Experience' }
    ];

    const experiences = [
      {
       icon: '💻',
        title: 'Senior React Native/Flutter Developer',
        badge: 'Full-time',
        type: 'Now A Wave Technology Pvt. Ltd.',
        period: 'Oct 2023 - Present',
        location: 'Pune, Maharashtra, India',
        responsibilities: [
        'Developing cross-platform mobile applications using React Native and JavaScript for Android and iOS.',
        'Implementing responsive and user-friendly UI components to deliver seamless mobile experiences.',
        'Integrating REST APIs and third-party SDKs to connect mobile applications with backend services.',
        'Developing and maintaining application features, ensuring code quality, performance, and reliability.',
        'Developing and maintaining responsive web applications using React.js, implementing reusable UI components, integrating REST APIs, and ensuring a seamless user experience across devices.',
        'Working on projects across different domains, including loan applications, cryptocurrency exchange, and other service-based applications.',
        'Collaborating on application development, debugging issues, and delivering features according to project requirements.',
        ]
      },
      {
        icon: '💻',
        title: 'React Native Developer',
        badge: 'Full-time',
        type: 'Mobiloitte Technology Pvt. Ltd.',
        period: 'May 2022 – September 2023',
        location: 'Pune, Maharashtra, India',
        responsibilities: [
        'Developed mobile application features using React Native and JavaScript for Android and iOS platforms.',
        'Implemented UI designs and reusable components to create intuitive user interfaces.',
        'Integrated RESTful APIs to retrieve, submit, and manage application data.',
        'Worked with third-party SDKs and backend services to implement application functionality.',
        'Participated in debugging, testing, and troubleshooting to improve application stability and performance.',
         'Contributed to the development and maintenance of mobile applications while following coding standards and project requirements.',
 ]
      }
    ];

    container.innerHTML = `
      <div class="page-content experience-page">
        <h2 class="experience-main-title">Professional Experience</h2>
        <p class="experience-main-subtitle">My career journey building mobile and web solutions</p>
        <div class="subtitle-underline"></div>


        <div class="experience-timeline">
          ${experiences.map(exp => `
            <div class="experience-card">
              <div class="exp-header">
                <div class="exp-title-section">
                  <span class="exp-icon">${exp.icon}</span>
                  <h3 class="exp-title">${exp.title}</h3>
                  <span class="exp-badge">${exp.badge}</span>
                </div>
              </div>
              <div class="exp-meta">
                <span class="exp-meta-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C5.8 0 4 1.8 4 4c0 1.5.8 2.8 2 3.5V14l2 2 2-2V7.5c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4z"/>
                  </svg>
                  ${exp.type}
                </span>
                <span class="exp-meta-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3.5 0C2.7 0 2 .7 2 1.5V3H1.5c-.8 0-1.5.7-1.5 1.5v10c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-10c0-.8-.7-1.5-1.5-1.5H14V1.5c0-.8-.7-1.5-1.5-1.5h-9zM3.5 1h9c.3 0 .5.2.5.5V3h-10V1.5c0-.3.2-.5.5-.5z"/>
                  </svg>
                  ${exp.period}
                </span>
                <span class="exp-meta-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5zm0 7.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 2.5 8 2.5s2.5 1.1 2.5 2.5S9.4 7.5 8 7.5z"/>
                  </svg>
                  ${exp.location}
                </span>
              </div>
              <ul class="exp-responsibilities">
                ${exp.responsibilities.map(resp => `
                  <li>${resp}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderContact(container) {
    const contactMethods = [
      {
        icon: '📧',
        iconType: 'email',
        title: 'Email',
        value: 'pmohini8686@gmail.com',
        link: 'mailto:pmohini8686@gmail.com'
      },
      {
        icon: '📞',
        iconType: 'phone',
        title: 'Phone',
        value: '+91-8459442681',
        link: 'tel:+8459442681'
      },
      {
        icon: '💼',
        iconType: 'linkedin',
        title: 'LinkedIn',
        value: 'mohini-patil-b2300b217',
        link: 'https://www.linkedin.com/in/mohini-patil-b2300b217'
        },
      {
        icon: '💻',
        iconType: 'github',
        title: 'GitHub',
        value: 'Mohini1git',
        link: 'https://github.com/Mohini1git'
      },
      {
        icon: '📍',
        iconType: 'location',
        title: 'Location',
        value: 'Pune, Maharashtra, India',
        link: null
      }
    ];

    container.innerHTML = `
      <div class="page-content contact-page">
        <h2 class="contact-main-title">Get in touch</h2>
        <p class="contact-main-subtitle">If you've got a project in mind, I'd love to hear about it</p>
        <div class="subtitle-underline"></div>
        
        <div class="contact-cards-grid">
          ${contactMethods.map(method => `
            <div class="contact-card ${method.link ? 'clickable' : ''}" ${method.link ? `onclick="window.open('${method.link}', '_blank')"` : ''}>
              <div class="contact-icon ${method.iconType}">
                ${method.iconType === 'email' ? `
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ` : method.iconType === 'phone' ? `
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ` : method.iconType === 'linkedin' ? `
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ` : method.iconType === 'github' ? `
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ` : `
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                `}
              </div>
              <h3 class="contact-card-title">${method.title}</h3>
              <p class="contact-card-value">${method.value}</p>
            </div>
          `).join('')}
        </div>
        
        <footer class="contact-footer">
          <p>© 2026 Mohini Patil • Built with React — deployed and shipped with care.</p>
        </footer>
      </div>
    `;
  }
}