// =====================================================
// CUET ConnectX - Community JavaScript
// =====================================================

let currentTab = 'students';

// Switch between Students and Alumni tabs
function switchTab(tab) {
    currentTab = tab;
    
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.tab-btn').classList.add('active');
    
    // Show/hide appropriate filters
    if (tab === 'students') {
        document.getElementById('studentsFilters').classList.remove('hidden');
        document.getElementById('alumniFilters').classList.add('hidden');
        
        // Show only students
        document.querySelectorAll('.member-card').forEach(card => {
            if (card.dataset.type === 'student') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        document.getElementById('studentsFilters').classList.add('hidden');
        document.getElementById('alumniFilters').classList.remove('hidden');
        
        // Show only alumni
        document.querySelectorAll('.member-card').forEach(card => {
            if (card.dataset.type === 'alumni') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Reset filters
    resetFilters();
}

// Search community members
function searchCommunity() {
    const searchTerm = document.getElementById('communitySearch').value.toLowerCase();
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        if (card.dataset.type !== currentTab.slice(0, -1) && currentTab === 'students' && card.dataset.type !== 'student') {
            return;
        }
        if (currentTab === 'alumni' && card.dataset.type !== 'alumni') {
            return;
        }
        
        const name = card.querySelector('h3').textContent.toLowerCase();
        const id = card.dataset.id;
        const bio = card.querySelector('.member-bio')?.textContent.toLowerCase() || '';
        
        const matches = name.includes(searchTerm) || id.includes(searchTerm) || bio.includes(searchTerm);
        
        card.style.display = matches ? 'block' : 'none';
    });
}

// Filter community members
function filterCommunity() {
    if (currentTab === 'students') {
        filterStudents();
    } else {
        filterAlumni();
    }
}

function filterStudents() {
    const batch = document.getElementById('batchFilter').value;
    const department = document.getElementById('departmentFilter').value;
    const studentId = document.getElementById('studentIdFilter').value.toLowerCase();
    const searchTerm = document.getElementById('communitySearch').value.toLowerCase();
    
    document.querySelectorAll('.member-card[data-type="student"]').forEach(card => {
        const cardBatch = card.dataset.batch;
        const cardDepartment = card.dataset.department;
        const cardId = card.dataset.id.toLowerCase();
        const name = card.querySelector('h3').textContent.toLowerCase();
        
        const matchesBatch = !batch || cardBatch === batch;
        const matchesDepartment = !department || cardDepartment === department;
        const matchesId = !studentId || cardId.includes(studentId);
        const matchesSearch = !searchTerm || name.includes(searchTerm) || cardId.includes(searchTerm);
        
        if (matchesBatch && matchesDepartment && matchesId && matchesSearch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterAlumni() {
    const batch = document.getElementById('alumniBatchFilter').value;
    const country = document.getElementById('countryFilter').value;
    const profession = document.getElementById('professionFilter').value;
    const skill = document.getElementById('skillFilter').value.toLowerCase();
    const searchTerm = document.getElementById('communitySearch').value.toLowerCase();
    
    document.querySelectorAll('.member-card[data-type="alumni"]').forEach(card => {
        const cardBatch = card.dataset.batch;
        const cardCountry = card.dataset.country;
        const cardProfession = card.dataset.profession;
        const cardSkills = card.dataset.skills.toLowerCase();
        const name = card.querySelector('h3').textContent.toLowerCase();
        const cardId = card.dataset.id.toLowerCase();
        
        const matchesBatch = !batch || cardBatch === batch;
        const matchesCountry = !country || cardCountry === country;
        const matchesProfession = !profession || cardProfession === profession;
        const matchesSkill = !skill || cardSkills.includes(skill);
        const matchesSearch = !searchTerm || name.includes(searchTerm) || cardId.includes(searchTerm);
        
        if (matchesBatch && matchesCountry && matchesProfession && matchesSkill && matchesSearch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetFilters() {
    if (currentTab === 'students') {
        document.getElementById('batchFilter').value = '';
        document.getElementById('departmentFilter').value = '';
        document.getElementById('studentIdFilter').value = '';
    } else {
        document.getElementById('alumniBatchFilter').value = '';
        document.getElementById('countryFilter').value = '';
        document.getElementById('professionFilter').value = '';
        document.getElementById('skillFilter').value = '';
    }
    document.getElementById('communitySearch').value = '';
}

// View member profile
function viewProfile(userId) {
    // In real implementation, this would navigate to the user's profile
    window.location.href = `profile.html?id=${userId}`;
}

// Follow user
function followUser(userId) {
    const button = event.target.closest('button');
    
    if (button.innerHTML.includes('Follow')) {
        button.innerHTML = '<i class="fas fa-user-check"></i> Following';
        button.classList.remove('btn-primary');
        button.classList.add('btn-secondary');
        showNotification('Now following this user!');
    } else {
        button.innerHTML = '<i class="fas fa-user-plus"></i> Follow';
        button.classList.remove('btn-secondary');
        button.classList.add('btn-primary');
        showNotification('Unfollowed user');
    }
}

// Notification Helper
function showNotification(message) {
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show students by default
    switchTab('students');
    
    // Update counts
    const studentCards = document.querySelectorAll('.member-card[data-type="student"]').length;
    const alumniCards = document.querySelectorAll('.member-card[data-type="alumni"]').length;
    
    document.getElementById('studentsCount').textContent = studentCards;
    document.getElementById('alumniCount').textContent = alumniCards;
    document.getElementById('totalUsers').textContent = studentCards + alumniCards;
});
