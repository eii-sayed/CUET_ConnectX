// =====================================================
// CUET ConnectX - Jobs JavaScript
// =====================================================

// Sample job data
let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

// Filter Jobs
function filterJobs() {
    const searchInput = document.getElementById('jobSearchInput').value.toLowerCase();
    const jobTypeFilter = document.getElementById('jobTypeFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;
    const experienceFilter = document.getElementById('experienceFilter').value;
    const alumniOnly = document.getElementById('alumniOnlyFilter').checked;
    
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        const title = card.querySelector('.job-title').textContent.toLowerCase();
        const company = card.querySelector('.company-name').textContent.toLowerCase();
        const description = card.querySelector('.job-description').textContent.toLowerCase();
        
        const jobType = card.dataset.type;
        const location = card.dataset.location;
        const experience = card.dataset.experience;
        const isAlumni = card.dataset.alumni === 'true';
        
        // Check search
        const matchesSearch = title.includes(searchInput) || 
                            company.includes(searchInput) || 
                            description.includes(searchInput);
        
        // Check filters
        const matchesType = !jobTypeFilter || jobType === jobTypeFilter;
        const matchesLocation = !locationFilter || location === locationFilter;
        const matchesExperience = !experienceFilter || experience === experienceFilter;
        const matchesAlumni = !alumniOnly || isAlumni;
        
        // Show/hide card
        if (matchesSearch && matchesType && matchesLocation && matchesExperience && matchesAlumni) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle Save Job
function toggleSaveJob(button) {
    const jobCard = button.closest('.job-card');
    const jobTitle = jobCard.querySelector('.job-title').textContent;
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('far')) {
        // Save job
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.style.color = 'var(--accent-color)';
        
        // Add to saved jobs
        if (!savedJobs.includes(jobTitle)) {
            savedJobs.push(jobTitle);
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        }
        
        showNotification('Job saved!');
    } else {
        // Unsave job
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.style.color = '';
        
        // Remove from saved jobs
        savedJobs = savedJobs.filter(job => job !== jobTitle);
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        
        showNotification('Job removed from saved');
    }
}

// View Job Details
function viewJobDetails(jobId) {
    const modal = document.getElementById('jobDetailsModal');
    const modalTitle = document.getElementById('jobDetailTitle');
    const modalBody = document.getElementById('jobDetailsBody');
    
    // In a real app, fetch job details from backend
    modalTitle.textContent = 'Job Details';
    modalBody.innerHTML = `
        <div class="job-detail-content">
            <h3>Software Engineer</h3>
            <p class="company-name">TechCorp Bangladesh Ltd.</p>
            
            <div class="detail-section">
                <h4><i class="fas fa-info-circle"></i> Job Information</h4>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Job Type:</label>
                        <p>Full-Time</p>
                    </div>
                    <div class="info-item">
                        <label>Location:</label>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div class="info-item">
                        <label>Experience:</label>
                        <p>Entry Level (0-2 years)</p>
                    </div>
                    <div class="info-item">
                        <label>Deadline:</label>
                        <p>February 28, 2026</p>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-list-ul"></i> Requirements</h4>
                <ul>
                    <li>Bachelor's degree in Computer Science or related field</li>
                    <li>Experience with React, Node.js, and cloud technologies</li>
                    <li>Strong problem-solving skills</li>
                    <li>Good communication skills</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-tasks"></i> Responsibilities</h4>
                <ul>
                    <li>Develop and maintain web applications</li>
                    <li>Collaborate with cross-functional teams</li>
                    <li>Write clean, maintainable code</li>
                    <li>Participate in code reviews</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-user"></i> Posted By</h4>
                <div class="posted-info">
                    <img src="https://via.placeholder.com/40" alt="Posted by">
                    <div>
                        <strong>Sarah Ahmed</strong>
                        <p>Alumni, Batch 2018</p>
                        <p>Senior Software Engineer at TechCorp</p>
                    </div>
                </div>
            </div>
            
            <div class="detail-actions">
                <button class="btn-outline" onclick="closeJobDetailsModal()">Close</button>
                <button class="btn-primary" onclick="applyJob('https://example.com/apply')">
                    Apply Now <i class="fas fa-external-link-alt"></i>
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeJobDetailsModal() {
    const modal = document.getElementById('jobDetailsModal');
    modal.classList.remove('active');
}

// Apply for Job
function applyJob(jobLink) {
    if (jobLink && jobLink !== '#') {
        window.open(jobLink, '_blank');
    } else {
        alert('Application link not available');
    }
}

// Post Job Modal
function openPostJobModal() {
    const modal = document.getElementById('postJobModal');
    modal.classList.add('active');
}

function closePostJobModal() {
    const modal = document.getElementById('postJobModal');
    modal.classList.remove('active');
}

// Post Job Form
const postJobForm = document.getElementById('postJobForm');
if (postJobForm) {
    postJobForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const jobData = {
            company: document.getElementById('jobCompany').value,
            role: document.getElementById('jobRole').value,
            location: document.getElementById('jobLocation').value,
            type: document.getElementById('jobType').value,
            experience: document.getElementById('jobExperience').value,
            deadline: document.getElementById('jobDeadline').value,
            requirements: document.getElementById('jobRequirements').value,
            responsibilities: document.getElementById('jobResponsibilities').value,
            link: document.getElementById('jobLink').value,
            postedBy: StorageHelper.getUser()?.fullName || 'Anonymous',
            postedDate: new Date().toISOString()
        };
        
        // In real app, send to backend
        console.log('Job Posted:', jobData);
        
        closePostJobModal();
        postJobForm.reset();
        showNotification('Job posted successfully!');
    });
}

// Notification Helper
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .detail-section {
        margin: 2rem 0;
    }
    
    .detail-section h4 {
        margin-bottom: 1rem;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .detail-section ul {
        list-style: none;
        padding-left: 0;
    }
    
    .detail-section li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
    }
    
    .detail-section li:before {
        content: "•";
        color: var(--accent-color);
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .info-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    
    .detail-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
    }
`;
document.head.appendChild(style);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const postJobModal = document.getElementById('postJobModal');
    const jobDetailsModal = document.getElementById('jobDetailsModal');
    
    if (e.target === postJobModal) {
        closePostJobModal();
    }
    if (e.target === jobDetailsModal) {
        closeJobDetailsModal();
    }
});

// Load saved jobs on page load
document.addEventListener('DOMContentLoaded', () => {
    // Mark saved jobs
    savedJobs.forEach(jobTitle => {
        const jobCards = document.querySelectorAll('.job-card');
        jobCards.forEach(card => {
            if (card.querySelector('.job-title').textContent === jobTitle) {
                const icon = card.querySelector('.job-bookmark i');
                icon.classList.remove('far');
                icon.classList.add('fas');
                card.querySelector('.job-bookmark button').style.color = 'var(--accent-color)';
            }
        });
    });
});
