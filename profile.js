// =====================================================
// CUET ConnectX - Profile JavaScript
// =====================================================

// Load Profile Data
document.addEventListener('DOMContentLoaded', () => {
    loadProfileData();
});

function loadProfileData() {
    const user = StorageHelper.getUser();
    
    if (!user) {
        // User not logged in, redirect to login
        window.location.href = 'login.html';
        return;
    }
    
    // Update profile with user data
    document.getElementById('profileName').textContent = user.fullName || 'Anupam Paul';
    document.getElementById('profileStudentId').textContent = user.studentId || '2204116';
    
    // Set user type badge
    const userTypeBadge = document.getElementById('userTypeBadge');
    if (user.userType === 'student') {
        userTypeBadge.textContent = 'Current Student';
        userTypeBadge.className = 'badge badge-student';
    } else {
        userTypeBadge.textContent = 'Alumni';
        userTypeBadge.className = 'badge badge-alumni';
    }
    
    // Set batch
    document.getElementById('batchBadge').textContent = `Batch ${user.batch}`;
    
    // Set email
    document.getElementById('contactEmail').textContent = user.email || 'anupam.paul@example.com';
}

// Edit Functions
function editCover() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.querySelector('.profile-cover').style.backgroundImage = `url(${event.target.result})`;
                alert('Cover photo updated!');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function editAvatar() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('profileImage').src = event.target.result;
                alert('Profile photo updated!');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function toggleEditMode() {
    alert('Edit mode activated! In a full implementation, this would enable editing all profile fields.');
    // In full implementation, this would make fields editable
}

function editAbout() {
    const currentText = document.getElementById('aboutText').textContent;
    const newText = prompt('Edit your about section:', currentText);
    
    if (newText !== null && newText.trim() !== '') {
        document.getElementById('aboutText').textContent = newText;
        alert('About section updated!');
    }
}

function editContact() {
    openModal('Edit Contact Information', `
        <form id="editContactForm" class="post-form">
            <div class="form-group">
                <label for="editEmail">Email</label>
                <input type="email" id="editEmail" value="${document.getElementById('contactEmail').textContent}" required>
            </div>
            <div class="form-group">
                <label for="editAddress">Address</label>
                <input type="text" id="editAddress" value="${document.getElementById('contactAddress').textContent}" required>
            </div>
            <div class="form-actions">
                <button type="button" class="btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn-primary">Save Changes</button>
            </div>
        </form>
    `);
    
    document.getElementById('editContactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('contactEmail').textContent = document.getElementById('editEmail').value;
        document.getElementById('contactAddress').textContent = document.getElementById('editAddress').value;
        closeModal();
        alert('Contact information updated!');
    });
}

function editSocialLinks() {
    openModal('Edit Social Links', `
        <form id="editSocialForm" class="post-form">
            <div class="form-group">
                <label for="linkedinLink">LinkedIn Profile</label>
                <input type="url" id="linkedinLink" placeholder="https://linkedin.com/in/yourprofile">
            </div>
            <div class="form-group">
                <label for="githubLink">GitHub Profile</label>
                <input type="url" id="githubLink" placeholder="https://github.com/yourusername">
            </div>
            <div class="form-group">
                <label for="facebookLink">Facebook Profile</label>
                <input type="url" id="facebookLink" placeholder="https://facebook.com/yourprofile">
            </div>
            <div class="form-group">
                <label for="portfolioLink">Portfolio Website</label>
                <input type="url" id="portfolioLink" placeholder="https://yourportfolio.com">
            </div>
            <div class="form-actions">
                <button type="button" class="btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn-primary">Save Changes</button>
            </div>
        </form>
    `);
    
    document.getElementById('editSocialForm').addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal();
        alert('Social links updated!');
    });
}

function editProfessional() {
    openModal('Edit Professional Information', `
        <form id="editProfessionalForm" class="post-form">
            <div class="form-group">
                <label for="currentProf">Current Profession</label>
                <input type="text" id="currentProf" value="${document.getElementById('currentProfession').textContent}">
            </div>
            <div class="form-group">
                <label for="previousProf">Previous Profession</label>
                <input type="text" id="previousProf" value="${document.getElementById('previousProfession').textContent}">
            </div>
            <div class="form-group">
                <label for="researchInt">Research Interests (comma-separated)</label>
                <input type="text" id="researchInt" placeholder="Machine Learning, AI, NLP">
            </div>
            <div class="form-actions">
                <button type="button" class="btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn-primary">Save Changes</button>
            </div>
        </form>
    `);
    
    document.getElementById('editProfessionalForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('currentProfession').textContent = document.getElementById('currentProf').value;
        document.getElementById('previousProfession').textContent = document.getElementById('previousProf').value;
        closeModal();
        alert('Professional information updated!');
    });
}

function addEducation() {
    openModal('Add Education', `
        <form id="addEducationForm" class="post-form">
            <div class="form-group">
                <label for="degree">Degree/Certificate *</label>
                <input type="text" id="degree" required placeholder="e.g., Bachelor of Science">
            </div>
            <div class="form-group">
                <label for="institution">Institution *</label>
                <input type="text" id="institution" required placeholder="Institution name">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="startYear">Start Year *</label>
                    <input type="text" id="startYear" required placeholder="2022">
                </div>
                <div class="form-group">
                    <label for="endYear">End Year</label>
                    <input type="text" id="endYear" placeholder="Present or 2026">
                </div>
            </div>
            <div class="form-group">
                <label for="eduSubjects">Major/Subjects</label>
                <textarea id="eduSubjects" rows="3" placeholder="Major: Computer Science | Focus: AI & ML"></textarea>
            </div>
            <div class="form-actions">
                <button type="button" class="btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn-primary">Add Education</button>
            </div>
        </form>
    `);
    
    document.getElementById('addEducationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal();
        alert('Education added successfully!');
    });
}

function editEducationItem(button) {
    alert('Edit education item');
    // In full implementation, this would open an edit modal
}

function editSkills() {
    openModal('Edit Skills', `
        <form id="editSkillsForm" class="post-form">
            <div class="form-group">
                <label for="skillsInput">Skills (comma-separated)</label>
                <textarea id="skillsInput" rows="4" placeholder="JavaScript, Python, React, Node.js"></textarea>
                <small class="form-hint">Enter skills separated by commas</small>
            </div>
            <div class="form-actions">
                <button type="button" class="btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn-primary">Save Skills</button>
            </div>
        </form>
    `);
    
    document.getElementById('editSkillsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const skills = document.getElementById('skillsInput').value.split(',').map(s => s.trim()).filter(s => s);
        const skillsList = document.getElementById('skillsList');
        skillsList.innerHTML = skills.map(skill => `<span class="tag">${skill}</span>`).join('');
        closeModal();
        alert('Skills updated!');
    });
}

// Modal Functions
function openModal(title, content) {
    const modal = document.getElementById('editModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('editModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('editModal');
    if (e.target === modal) {
        closeModal();
    }
});
