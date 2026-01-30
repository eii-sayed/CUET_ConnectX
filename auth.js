// =====================================================
// CUET ConnectX - Authentication JavaScript
// =====================================================

// Sign Up Form Handling
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    // Student ID Input Handler
    const studentIdInput = document.getElementById('studentId');
    const userTypeIndicator = document.getElementById('userTypeIndicator');
    const userTypeText = document.getElementById('userTypeText');

    if (studentIdInput) {
        studentIdInput.addEventListener('input', (e) => {
            const studentId = e.target.value;
            
            if (studentId.length >= 2) {
                const userType = getUserType(studentId);
                
                if (userType) {
                    userTypeIndicator.style.display = 'flex';
                    userTypeText.textContent = `You will be registered as: ${userType.label} (Batch ${userType.batch})`;
                } else {
                    userTypeIndicator.style.display = 'none';
                }
            } else {
                userTypeIndicator.style.display = 'none';
            }
        });
    }

    // Password Toggle
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            togglePassword.querySelector('i').classList.toggle('fa-eye');
            togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
        });
    }

    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    if (toggleConfirmPassword && confirmPasswordInput) {
        toggleConfirmPassword.addEventListener('click', () => {
            const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
            confirmPasswordInput.type = type;
            toggleConfirmPassword.querySelector('i').classList.toggle('fa-eye');
            toggleConfirmPassword.querySelector('i').classList.toggle('fa-eye-slash');
        });
    }

    // Form Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const studentId = document.getElementById('studentId').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsAccepted = document.getElementById('terms').checked;
        
        let isValid = true;
        
        // Validate full name
        if (fullName.length < 3) {
            showError('fullNameError', 'Name must be at least 3 characters');
            isValid = false;
        }
        
        // Validate email
        if (!validateEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate student ID
        if (!validateStudentId(studentId)) {
            showError('studentIdError', 'Student ID must be 7 digits');
            isValid = false;
        }
        
        // Validate password
        if (password.length < 8) {
            showError('passwordError', 'Password must be at least 8 characters');
            isValid = false;
        }
        
        // Validate password match
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }
        
        // Validate terms
        if (!termsAccepted) {
            alert('Please accept the Terms of Service and Privacy Policy');
            isValid = false;
        }
        
        if (isValid) {
            // Get user type
            const userType = getUserType(studentId);
            
            // Create user object
            const userData = {
                fullName,
                email,
                studentId,
                userType: userType.type,
                batch: userType.batch,
                createdAt: new Date().toISOString()
            };
            
            // Store user data (in real app, this would be sent to backend)
            localStorage.setItem('pendingUser', JSON.stringify(userData));
            
            // Show verification modal
            showVerificationModal(email);
            
            // Reset form
            signupForm.reset();
        }
    });
}

// Login Form Handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    // Password Toggle
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const loginPasswordInput = document.getElementById('loginPassword');
    
    if (toggleLoginPassword && loginPasswordInput) {
        toggleLoginPassword.addEventListener('click', () => {
            const type = loginPasswordInput.type === 'password' ? 'text' : 'password';
            loginPasswordInput.type = type;
            toggleLoginPassword.querySelector('i').classList.toggle('fa-eye');
            toggleLoginPassword.querySelector('i').classList.toggle('fa-eye-slash');
        });
    }

    // Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
        
        // Get form values
        const studentId = document.getElementById('loginStudentId').value.trim();
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        let isValid = true;
        
        // Validate student ID
        if (!validateStudentId(studentId)) {
            showError('loginStudentIdError', 'Student ID must be 7 digits');
            isValid = false;
        }
        
        // Validate password
        if (password.length < 8) {
            showError('loginPasswordError', 'Invalid password');
            isValid = false;
        }
        
        if (isValid) {
            // In real app, this would authenticate with backend
            // For demo, we'll check if user exists in localStorage
            const pendingUser = JSON.parse(localStorage.getItem('pendingUser'));
            
            if (pendingUser && pendingUser.studentId === studentId) {
                // Login successful
                const userType = getUserType(studentId);
                const userData = {
                    ...pendingUser,
                    lastLogin: new Date().toISOString()
                };
                
                StorageHelper.setUser(userData);
                
                // Redirect to profile
                alert('Login successful!');
                window.location.href = 'profile.html';
            } else {
                // Demo login - create temp user
                const userType = getUserType(studentId);
                const userData = {
                    fullName: 'Anupam Paul',
                    email: 'john.doe@example.com',
                    studentId: studentId,
                    userType: userType.type,
                    batch: userType.batch,
                    lastLogin: new Date().toISOString()
                };
                
                StorageHelper.setUser(userData);
                alert('Login successful! (Demo Mode)');
                window.location.href = 'profile.html';
            }
        }
    });
}

// Helper Functions
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function showVerificationModal(email) {
    const modal = document.getElementById('verificationModal');
    const emailSpan = document.getElementById('verificationEmail');
    
    if (modal && emailSpan) {
        emailSpan.textContent = email;
        modal.classList.add('active');
    }
}

function closeVerificationModal() {
    const modal = document.getElementById('verificationModal');
    if (modal) {
        modal.classList.remove('active');
        
        // Simulate email verification and redirect
        setTimeout(() => {
            const pendingUser = JSON.parse(localStorage.getItem('pendingUser'));
            if (pendingUser) {
                StorageHelper.setUser(pendingUser);
                alert('Email verified! Please login with your credentials.');
                window.location.href = 'login.html';
            }
        }, 500);
    }
}

function resendVerification() {
    alert('Verification email resent! Please check your inbox.');
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('verificationModal');
    if (modal && e.target === modal) {
        closeVerificationModal();
    }
});
