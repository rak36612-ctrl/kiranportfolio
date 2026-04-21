// Get modal and buttons
const resumeModal = document.getElementById('resumeModal');
const resumeBtn = document.getElementById('resumeBtn');
const heroResumeBtn = document.getElementById('heroResumeBtn');
const closeBtn = document.querySelector('.close-btn');
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
const printResumeBtn = document.getElementById('printResumeBtn');

// Open modal when resume button is clicked
resumeBtn.addEventListener('click', openResumeModal);
heroResumeBtn.addEventListener('click', openResumeModal);

function openResumeModal() {
    resumeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when close button is clicked
closeBtn.addEventListener('click', closeResumeModal);

function closeResumeModal() {
    resumeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === resumeModal) {
        closeResumeModal();
    }
});

// Download resume as PDF
downloadResumeBtn.addEventListener('click', function() {
    alert('Please select "Save as PDF" in the print dialog to download your resume.');
    printResume();
});

// Print resume
printResumeBtn.addEventListener('click', printResume);

function printResume() {
    const printWindow = window.open('', '', 'width=900,height=600');
    const resumeContent = document.querySelector('.resume-container').innerHTML;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Resume</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    color: #333;
                    line-height: 1.6;
                    padding: 20px;
                }
                .resume-container {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .resume-header {
                    text-align: center;
                    border-bottom: 3px solid #667eea;
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }
                .resume-header h1 {
                    font-size: 28px;
                    margin-bottom: 5px;
                }
                .resume-header p {
                    font-size: 18px;
                    color: #667eea;
                    margin-bottom: 10px;
                }
                .contact-info {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    flex-wrap: wrap;
                    font-size: 13px;
                }
                .resume-section {
                    margin-bottom: 20px;
                }
                .resume-section h2 {
                    font-size: 16px;
                    color: #667eea;
                    margin-bottom: 10px;
                    border-bottom: 2px solid #f0f0f0;
                    padding-bottom: 5px;
                }
                .resume-item {
                    margin-bottom: 15px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #eee;
                }
                .resume-item:last-child {
                    border-bottom: none;
                }
                .resume-header-item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 3px;
                }
                .resume-header-item h3 {
                    font-size: 15px;
                }
                .date {
                    background: #f8f9fa;
                    padding: 2px 7px;
                    border-radius: 3px;
                    font-size: 12px;
                    color: #666;
                }
                .company {
                    color: #667eea;
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 5px;
                }
                .resume-section ul {
                    margin-left: 20px;
                    color: #555;
                    font-size: 13px;
                }
                .resume-section ul li {
                    margin-bottom: 5px;
                }
                .skill-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
                .skill-item {
                    background: #f8f9fa;
                    padding: 10px;
                    border-radius: 5px;
                    border-left: 4px solid #667eea;
                    font-size: 13px;
                }
                .skill-item strong {
                    display: block;
                    color: #667eea;
                    margin-bottom: 3px;
                }
                @media print {
                    body {
                        padding: 0;
                    }
                }
            </style>
        </head>
        <body>
            <div class="resume-container">
                ${resumeContent}
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 250);
}

// Smooth scrolling for navigation links
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

// Add scroll effect to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form validation (if you add a contact form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

console.log('Portfolio page loaded successfully!');

