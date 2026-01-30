# CUET ConnectX - Frontend Website

A professional frontend website connecting CUET students and alumni for academic excellence, career growth, and lifelong collaboration.

## 🎨 Design

**Color Palette:**
- Primary: #0A2540 (Navy Blue)
- Secondary: #F4F6F8 (Light Gray)
- Accent: #4F9CF9 (Bright Blue)
- White background with clean typography and minimal shadows

## ✨ Features

### 1. Authentication System
- **Signup**: Full name, email, password, student ID with Gmail verification
- **Login**: Student ID and password authentication
- **Automatic user type detection**: 
  - First 2 digits ≥ 20 = Current Student
  - First 2 digits < 20 = Alumni
  - Example: 2204116 = Batch 2022 (Current Student)

### 2. User Profiles
- Profile photo and cover image
- Address and location
- Current and previous professions
- Research interests
- Multiple contact links (LinkedIn, GitHub, Facebook, Portfolio)
- Education background (university level onwards)
- Skills and expertise
- Personal description
- Follower count and follow system
- Batch identification from student ID

### 3. Job Opportunities Portal
- Browse and search job posts
- Filter by:
  - Job type (Full-time, Part-time, Internship, Contract, Remote)
  - Location
  - Experience level
  - Posted by alumni
- Post new job opportunities with:
  - Company name and role
  - Location and job type
  - Requirements and responsibilities
  - Application deadline
  - Job posting link
- Save jobs for later
- "Apply Now" button redirects to job posting link
- See who posted the job

### 4. Scholarship Portal
- Browse scholarship opportunities
- Search and filter by:
  - Academic level (Undergraduate, Master's, PhD, Post-doctoral)
  - Location
  - Funding type (Fully funded, Partially funded, Tuition waiver)
- Post scholarships with:
  - Scholarship name and level
  - Location and duration
  - Funding details
  - Eligibility criteria
  - Application deadline
  - Benefits
  - Scholarship link
- Save scholarships
- Detailed scholarship information

### 5. Community Directory
- Browse all CUET students and alumni
- Separate tabs for:
  - Current Students (with count badge)
  - Alumni (with count badge)
- Search functionality across all members
- Advanced filtering options:
  - **Students**: Filter by batch, department, student ID
  - **Alumni**: Filter by batch, country, profession, skill
- Member cards displaying:
  - Profile picture and name
  - Student ID and batch year
  - Department (for students)
  - Country, profession (for alumni)
  - Bio and skills
  - Follower count
- View profile and follow buttons
- Responsive grid layout

### 6. Dark/Light Theme Toggle
- System-wide theme switching
- Theme toggle button in navigation
- Persistent theme preference (saved to localStorage)
- Smooth transitions between themes
- Dark theme with carefully selected color palette:
  - Background: #0F1419
  - Surface: #1A1F2E
  - Text: #E1E4E8
  - Borders: #2D3748
- All pages and components fully supported

### 7. FAQ Section
- Comprehensive frequently asked questions organized by categories:
  - Getting Started
  - Profile & Account
  - Jobs
  - Scholarships
  - Privacy & Security
  - General
- Expandable/collapsible FAQ items

### 8. About CUET ConnectX
- Mission and vision
- Platform objectives
- Key features
- How it works
- Impact statistics
- Future vision

## 📁 File Structure

```
Project/
│
├── index.html              # Landing page
├── signup.html             # User registration
├── login.html              # User login
├── profile.html            # User profile page
├── jobs.html               # Job opportunities
├── scholarships.html       # Scholarship portal
├── community.html          # Community directory
├── faq.html                # FAQ page
├── about.html              # About page
│
├── styles.css             # Main stylesheet
│
├── script.js              # Main JavaScript
├── auth.js                # Authentication logic
├── profile.js             # Profile functionality
├── jobs.js                # Jobs page logic
├── scholarships.js        # Scholarships logic
├── community.js           # Community directory logic
│
└── README.md              # This file
```

## 🚀 Getting Started

1. **Open the website:**
   - Simply open `index.html` in a modern web browser
   - No server setup required for frontend demonstration

2. **Navigate the site:**
   - Home page introduces the platform
   - Sign up to create an account
   - Login with your student ID and password
   - Explore jobs, scholarships, FAQ, and About pages

3. **Demo Credentials:**
   - Student ID: Any 7-digit number starting with 22 or above (e.g., 2204116)
   - Password: Any password with 8+ characters

## 🎯 Key Functionalities

### Student ID Format
- **7 digits**: YYXXXXX
- **YY**: Batch year (22 = 2022)
- If YY ≥ 20: Current Student
- If YY < 20: Alumni

### Data Storage
- Uses browser `localStorage` for demonstration
- In production, connect to a backend API
- Current implementation stores:
  - User information
  - Saved jobs
  - Saved scholarships
  - Session data

### Responsive Design
- Mobile-friendly navigation with hamburger menu
- Adaptive layouts for tablets and mobile devices
- Touch-friendly interface elements

## 🔧 Customization

### Adding New Features
1. Create HTML structure in respective page
2. Add styles in `styles.css`
3. Implement functionality in corresponding JS file

### Modifying Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0A2540;
    --secondary-color: #F4F6F8;
    --accent-color: #4F9CF9;
}
```

## 📱 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## 🔐 Security Notes
- This is a frontend demonstration
- Passwords should be hashed on backend in production
- Email verification should be implemented server-side
- Add HTTPS in production
- Implement proper authentication tokens

## 🚧 Future Enhancements
- Backend API integration
- Real-time notifications
- Advanced search with filters
- Messaging system between users
- Event management
- Research collaboration tools
- Alumni donation portal
- Mobile app development

## 📄 License
This is a project for CUET ConnectX.

## 👥 Support
For questions or support, contact through the platform's contact page.

---

**Built with ❤️ for the CUET Community**
