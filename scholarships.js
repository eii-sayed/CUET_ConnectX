// =====================================================
// CUET ConnectX - Scholarships JavaScript
// =====================================================

// Sample scholarship data
let savedScholarships = JSON.parse(localStorage.getItem('savedScholarships')) || [];

// Filter Scholarships
function filterScholarships() {
    const searchInput = document.getElementById('scholarshipSearchInput').value.toLowerCase();
    const levelFilter = document.getElementById('levelFilter').value;
    const locationFilter = document.getElementById('scholarshipLocationFilter').value;
    const fundingFilter = document.getElementById('fundingFilter').value;
    
    const scholarshipCards = document.querySelectorAll('.scholarship-card');
    
    scholarshipCards.forEach(card => {
        const title = card.querySelector('.scholarship-title').textContent.toLowerCase();
        const description = card.querySelector('.scholarship-description').textContent.toLowerCase();
        
        const level = card.dataset.level;
        const location = card.dataset.location;
        const funding = card.dataset.funding;
        
        // Check search
        const matchesSearch = title.includes(searchInput) || description.includes(searchInput);
        
        // Check filters
        const matchesLevel = !levelFilter || level === levelFilter;
        const matchesLocation = !locationFilter || location === locationFilter;
        const matchesFunding = !fundingFilter || funding === fundingFilter;
        
        // Show/hide card
        if (matchesSearch && matchesLevel && matchesLocation && matchesFunding) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle Save Scholarship
function toggleSaveScholarship(button) {
    const scholarshipCard = button.closest('.scholarship-card');
    const scholarshipTitle = scholarshipCard.querySelector('.scholarship-title').textContent;
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('far')) {
        // Save scholarship
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.style.color = 'var(--accent-color)';
        
        // Add to saved scholarships
        if (!savedScholarships.includes(scholarshipTitle)) {
            savedScholarships.push(scholarshipTitle);
            localStorage.setItem('savedScholarships', JSON.stringify(savedScholarships));
        }
        
        showNotification('Scholarship saved!');
    } else {
        // Unsave scholarship
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.style.color = '';
        
        // Remove from saved scholarships
        savedScholarships = savedScholarships.filter(sch => sch !== scholarshipTitle);
        localStorage.setItem('savedScholarships', JSON.stringify(savedScholarships));
        
        showNotification('Scholarship removed from saved');
    }
}

// View Scholarship Details
function viewScholarshipDetails(scholarshipId) {
    const modal = document.getElementById('scholarshipDetailsModal');
    const modalTitle = document.getElementById('scholarshipDetailTitle');
    const modalBody = document.getElementById('scholarshipDetailsBody');
    
    // In a real app, fetch scholarship details from backend
    modalTitle.textContent = 'Scholarship Details';
    modalBody.innerHTML = `
        <div class="scholarship-detail-content">
            <div class="scholarship-header">
                <h3>Fulbright Foreign Student Program</h3>
                <div class="scholarship-badge badge-full">Fully Funded</div>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-info-circle"></i> Scholarship Information</h4>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Level:</label>
                        <p>Master's, PhD</p>
                    </div>
                    <div class="info-item">
                        <label>Location:</label>
                        <p>United States</p>
                    </div>
                    <div class="info-item">
                        <label>Duration:</label>
                        <p>2-3 years</p>
                    </div>
                    <div class="info-item">
                        <label>Deadline:</label>
                        <p>October 15, 2026</p>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-money-bill-wave"></i> Funding Details</h4>
                <p>This scholarship provides comprehensive funding including:</p>
                <ul>
                    <li>Full tuition coverage</li>
                    <li>Monthly stipend of $2,500 for living expenses</li>
                    <li>Round-trip airfare</li>
                    <li>Health insurance</li>
                    <li>Book allowance</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-check-circle"></i> Eligibility Criteria</h4>
                <ul>
                    <li>Bachelor's degree completed before the program start date</li>
                    <li>Proficiency in English (TOEFL/IELTS required)</li>
                    <li>Strong academic record (minimum 3.0 GPA)</li>
                    <li>Citizen of Bangladesh</li>
                    <li>No prior PhD from a US institution</li>
                    <li>Commitment to return to Bangladesh after completion</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-award"></i> Benefits</h4>
                <ul>
                    <li>Study at top US universities</li>
                    <li>Cultural exchange opportunities</li>
                    <li>Professional development workshops</li>
                    <li>Networking with international students</li>
                    <li>Alumni network support</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-file-alt"></i> Description</h4>
                <p>The Fulbright Program is the flagship international educational exchange program sponsored by the U.S. government. It provides opportunities for students, scholars, and professionals to undertake international graduate study, advanced research, and teaching worldwide.</p>
                <p>This program aims to increase mutual understanding between the people of the United States and the people of other countries through the exchange of persons, knowledge, and skills.</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-user"></i> Posted By</h4>
                <div class="posted-info">
                    <img src="https://via.placeholder.com/40" alt="Posted by">
                    <div>
                        <strong>Dr. Nasrin Ahmed</strong>
                        <p>Alumni, Batch 2015</p>
                        <p>Fulbright Scholar & Assistant Professor</p>
                    </div>
                </div>
            </div>
            
            <div class="detail-actions">
                <button class="btn-outline" onclick="closeScholarshipDetailsModal()">Close</button>
                <button class="btn-primary" onclick="applyScholarship('https://example.com/fulbright')">
                    Learn More <i class="fas fa-external-link-alt"></i>
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeScholarshipDetailsModal() {
    const modal = document.getElementById('scholarshipDetailsModal');
    modal.classList.remove('active');
}

// Apply for Scholarship
function applyScholarship(scholarshipLink) {
    if (scholarshipLink && scholarshipLink !== '#') {
        window.open(scholarshipLink, '_blank');
    } else {
        alert('Scholarship link not available');
    }
}

// Post Scholarship Modal
function openPostScholarshipModal() {
    const modal = document.getElementById('postScholarshipModal');
    modal.classList.add('active');
}

function closePostScholarshipModal() {
    const modal = document.getElementById('postScholarshipModal');
    modal.classList.remove('active');
}

// Post Scholarship Form
const postScholarshipForm = document.getElementById('postScholarshipForm');
if (postScholarshipForm) {
    postScholarshipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const scholarshipData = {
            name: document.getElementById('scholarshipName').value,
            level: document.getElementById('scholarshipLevel').value,
            location: document.getElementById('scholarshipLocation').value,
            fundingType: document.getElementById('fundingType').value,
            duration: document.getElementById('scholarshipDuration').value,
            fundingDetails: document.getElementById('fundingDetails').value,
            deadline: document.getElementById('scholarshipDeadline').value,
            link: document.getElementById('scholarshipLink').value,
            eligibility: document.getElementById('eligibility').value,
            benefits: document.getElementById('benefits').value,
            description: document.getElementById('scholarshipDescription').value,
            postedBy: StorageHelper.getUser()?.fullName || 'Anonymous',
            postedDate: new Date().toISOString()
        };
        
        // In real app, send to backend
        console.log('Scholarship Posted:', scholarshipData);
        
        closePostScholarshipModal();
        postScholarshipForm.reset();
        showNotification('Scholarship posted successfully!');
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

// Add animation styles if not already added
if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
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
        
        .scholarship-detail-content .scholarship-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--border-color);
        }
    `;
    document.head.appendChild(style);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const postScholarshipModal = document.getElementById('postScholarshipModal');
    const scholarshipDetailsModal = document.getElementById('scholarshipDetailsModal');
    
    if (e.target === postScholarshipModal) {
        closePostScholarshipModal();
    }
    if (e.target === scholarshipDetailsModal) {
        closeScholarshipDetailsModal();
    }
});

// Load saved scholarships on page load
document.addEventListener('DOMContentLoaded', () => {
    // Mark saved scholarships
    savedScholarships.forEach(scholarshipTitle => {
        const scholarshipCards = document.querySelectorAll('.scholarship-card');
        scholarshipCards.forEach(card => {
            if (card.querySelector('.scholarship-title').textContent === scholarshipTitle) {
                const icon = card.querySelector('.scholarship-header .btn-icon i');
                if (icon) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    card.querySelector('.scholarship-header .btn-icon').style.color = 'var(--accent-color)';
                }
            }
        });
    });
});
