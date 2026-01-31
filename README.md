# CUET ConnectX - Professional Platform for CUETians

A modern, professional frontend platform connecting CUET (Chittagong University of Engineering and Technology) students and alumni for academic excellence, career growth, and lifelong collaboration.

## 🎨 Design & Branding

**Professional Color Palette (CUET-Inspired Teal):**
- Primary: #004D40 (Deep Teal Green)
- Secondary: #F5F7F6 (Soft Gray)
- Accent: #00897B (Professional Teal)
- Accent Hover: #00695C (Darker Teal)

**Features:**
- Official CUET Vector Logo integration
- Clean, modern interface with smooth transitions
- Responsive design for all devices
- Professional typography using Inter font family
- Subtle background patterns with CUET branding
- Smooth theme transitions with cubic-bezier animations

## ✨ Key Features

### 1. Authentication System
- **Signup**: Full name, email, password, student ID validation
- **Login**: Student ID and password authentication
- **Demo Mode**: Works without backend (localStorage-based)
- **Automatic user type detection**: 
  - First 2 digits ≥ 20 = Current Student
  - First 2 digits < 20 = Alumni
  - Example: 2204116 = Batch 2022 (Current Student)

### 2. User Profiles
- Comprehensive profile management
- Profile photo and cover image support
- Address and location information
- Current and previous professions tracking
- Research interests and expertise
- Multiple contact links (LinkedIn, GitHub, Facebook, Portfolio)
- Education background (university level onwards)
- Skills and expertise showcase
- Personal bio and description
- Follower system with counts
- Batch identification from student ID

### 3. Job Opportunities Portal
- Browse and search job listings
- Advanced filtering system:
  - Job type (Full-time, Part-time, Internship, Contract, Remote)
  - Location-based filtering
  - Experience level requirements
  - Posted by alumni filter
- Post new job opportunities:
  - Company name and role details
  - Location and remote options
  - Requirements and responsibilities
  - Application deadline tracking
  - Direct application links
- Save jobs for later review
- View job poster information
- Responsive job card layout

### 4. Scholarship Portal
- Comprehensive scholarship listings
- Search and filter capabilities:
  - Academic level (Undergraduate, Master's, PhD, Post-doctoral)
  - Country/location
  - Funding type (Fully funded, Partially funded, Tuition waiver)
- Post scholarships with detailed information:
  - Scholarship name and institution
  - Academic level and duration
  - Funding details and benefits
  - Eligibility criteria
  - Application deadlines
  - Direct scholarship links
- Save scholarships for reference
- Detailed scholarship information cards

### 5. Community Directory
- Browse all CUET students and alumni
- Tabbed interface:
  - Current Students (with live count)
  - Alumni (with live count)
- Powerful search functionality
- Advanced filtering options:
  - **Students**: Batch, department, student ID
  - **Alumni**: Batch, country, profession, skills
- Rich member cards showing:
  - Profile picture and full name
  - Student ID and batch year
  - Department (for students)
  - Country and profession (for alumni)
  - Bio and skill tags
  - Follower statistics
- Profile view and follow actions
- Responsive grid layout with cards

### 6. Dark/Light Theme Toggle
- System-wide theme switching
- Animated theme toggle button with rotation effect
- Persistent theme preference (localStorage)
- Smooth color transitions (0.5s cubic-bezier)
- Professional dark theme:
  - Background: #121212
  - Surface: #1E1E1E
  - Accent: #4DB6AC (Soft Teal)
  - Optimized contrast ratios
- All components fully themed

### 7. FAQ Section
- Organized by categories:
  - Getting Started
  - Profile & Account Management
  - Jobs and Career
  - Scholarships and Funding
  - Privacy & Security
  - General Questions
- Expandable/collapsible accordion interface
- Search functionality
- Clear, concise answers

### 8. About CUET ConnectX
- Platform mission and vision
- Core objectives and goals
- Feature highlights
- Platform workflow explanation
- Impact statistics and metrics
- Future development roadmap

## 📁 Project Structure

```
CUET_ConnectX/
│
├── index.html                 # 🏠 Main entry point (Homepage)
│
├── html/                      # All other HTML pages
│   ├── signup.html           # User registration
│   ├── login.html            # User authentication
│   ├── profile.html          # User profile management
│   ├── jobs.html             # Job opportunities portal
│   ├── scholarships.html     # Scholarship listings
│   ├── community.html        # Member directory
│   ├── faq.html              # FAQ section
│   └── about.html            # About platform
│
├── css/                       # Modular stylesheets
│   ├── base.css              # Reset, variables, typography, utilities
│   ├── layout.css            # Container, navigation, footer
│   ├── components.css        # Buttons, cards, forms, modals
│   └── pages.css             # Page-specific styles
│
├── js/                        # JavaScript files
│   ├── script.js             # Core functionality & theme toggle
│   ├── auth.js               # Authentication logic
│   ├── profile.js            # Profile management
│   ├── jobs.js               # Jobs portal logic
│   ├── scholarships.js       # Scholarships functionality
│   └── community.js          # Community directory logic
│
├── assets/                    # Static assets
│   ├── images/               # General images
│   ├── icons/                # Icon files
│   └── logos/                # Logo files
│       └── CUET_Vector_Logo.svg.png
│
├── improvement.txt            # Development notes
└── README.md                  # This file
```

## 🚀 Getting Started

### Quick Start
1. **Open the website:**
   ```
   Open: index.html in your browser (main entry point)
   ```
   Or use PowerShell:
   ```powershell
   Start-Process "C:\Projects\CUET_ConnectX\index.html"
   ```

2. **Navigate the platform:**
   - Explore the home page features
   - Sign up for a new account
   - Login with demo credentials
   - Browse jobs, scholarships, and community

### Demo Credentials (Frontend Only)
Since this is a frontend-only demo without backend:
- **Student ID**: Any 7-digit number (e.g., `2001001`, `2204116`)
- **Password**: Any 8+ character string (e.g., `password123`)

The system validates format only, not actual credentials.

## 🎯 Technical Details

### Student ID Format & Logic
- **Format**: YYXXXXX (7 digits)
- **YY**: Batch year indicator
  - `20-29`: Current students (2020-2029)
  - `<20`: Alumni (pre-2020)
- **Example**: 
  - `2204116` = Batch 2022 (Current Student)
  - `1901234` = Batch 2019 (Alumni)

### Data Management
- **Storage**: Browser `localStorage` for demo
- **Data Stored**:
  - User registration information
  - Profile details and preferences
  - Saved jobs and scholarships
  - Theme preferences
  - Session state

### Responsive Breakpoints
```css
Desktop:  > 992px   (Full layout)
Tablet:   768-992px (Adjusted grid)
Mobile:   < 768px   (Stack layout, hamburger menu)
```

## 🎨 Customization Guide

### CSS Architecture
The CSS is organized into 4 modular files for better maintainability:
- **base.css**: CSS variables, resets, typography, utilities
- **layout.css**: Container, navigation, footer structure
- **components.css**: Reusable UI components (buttons, cards, forms, modals)
- **pages.css**: Page-specific styles (hero, profile, jobs, etc.)

### Updating Colors
Modify CSS variables in `css/base.css`:
```css
:root {
    --primary-color: #004D40;    /* Deep Teal */
    --accent-color: #00897B;     /* Professional Teal */
    --secondary-color: #F5F7F6;  /* Soft Gray */
    --accent-hover: #00695C;     /* Darker Teal */
}
```

### Adding New Pages
1. Create HTML file in `html/` folder
2. Link all stylesheets:
   ```html
   <link rel="stylesheet" href="../css/base.css">
   <link rel="stylesheet" href="../css/layout.css">
   <link rel="stylesheet" href="../css/components.css">
   <link rel="stylesheet" href="../css/pages.css">
   ```
3. Link scripts: `<script src="../js/script.js"></script>`
4. Add navigation link in all existing pages
5. Add page-specific styles in `css/pages.css`

### Modifying Theme
Edit theme toggle functionality in `js/script.js`:
```javascript
function toggleTheme() {
    // Custom theme switching logic
}
```

## 📱 Browser Compatibility
- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Considerations
⚠️ **Frontend Demo Notice**: This is a demonstration project.

**For Production Deployment:**
- Implement proper backend API with authentication
- Hash passwords using bcrypt or similar
- Add email verification system
- Implement JWT or session-based auth
- Enable HTTPS/SSL certificates
- Add CSRF protection
- Implement rate limiting
- Validate all inputs server-side
- Add proper authorization checks

## 🚧 Future Enhancements

### Planned Features
- [ ] Backend API integration (Express.js + MongoDB)
- [ ] Real-time notifications system
- [ ] Advanced search with AI-powered suggestions
- [ ] Event management and calendar
- [ ] Research collaboration tools
- [ ] Resume builder with AI review
- [ ] Job recommendation system
- [ ] Alumni donation portal
- [ ] Mobile app (React Native)
- [ ] Email notifications
- [ ] Data analytics dashboard

### Integration Roadmap
1. **Phase 1**: Backend setup with Express.js
2. **Phase 2**: MongoDB database implementation
3. **Phase 3**: User authentication with JWT
4. **Phase 4**: Real-time notification features
5. **Phase 5**: AI integration for recommendations
6. **Phase 6**: Mobile app development
7. **Phase 7**: Deployment and automation

## 🛠️ Technologies Used

### Frontend
- HTML5 (Semantic markup)
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript (ES6+)
- Font Awesome 6.4.0 (Icons)
- Google Fonts (Inter)

### Planned Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📊 Statistics
- **Lines of CSS**: 3,400+
- **Pages**: 9 HTML pages
- **JavaScript Files**: 6 modules
- **Responsive Breakpoints**: 3
- **Color Themes**: 2 (Light/Dark)

## 📞 Support & Contact
For questions, issues, or contributions:
- Visit the About page for platform information
- Check FAQ section for common questions
- Contact through the platform's community section

## 📄 License
Educational project for CUET ConnectX Platform

## 👥 Contributors
- Huzaifa - Color palette & theme improvements
- Sarowar - Background design & authentication
- Alvy - Logo integration
- Development Team - Platform features & functionality

---

**🎓 Built with dedication for the CUET Community**

*Connecting CUETians worldwide for academic excellence and career growth*
# CUET_ConnectX
