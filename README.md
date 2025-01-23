# Photo Sharing Application 📸
A modern React-based photo sharing platform with real-time interactions and Google authentication.

# Screenshot
<img src = "https://github.com/Robinsh-Raj/Photo-Application/blob/main/Screenshot%20(191).png" alt="first"> 


# 🌟 Features
- Google OAuth Authentication
- Real-time Photo Updates
- Interactive Comment System
- Responsive Design
- Trending Photos Section
- Seamless Image Upload
- Social Interactions

# 🚀 Live Demo
- View Live Application: https://photo-application.vercel.app/

# 🛠️ Technologies Used
- React.js
- Vercel
- Google OAuth
- CSS3

# ⚙️ Installation & Setup
- Clone the repository
- Install dependencies
  ```bash
  cd photo-application
  npm install
  ```
- Start development server
  ```bash
  npm start
  ```
# 📱 Usage
- Sign in using Google Authentication
- Browse trending photos
- Upload your photos
- Add comments and interact with other users
- View your profile and manage uploads

# 🔑 Google OAuth Setup
- Go to Google Cloud Console
- Create new project/Select existing project
- Navigate to APIs & Services > Credentials
- Create OAuth 2.0 Client ID
- Add authorized URIs:
  ```bash
  http://localhost:3000
  http://localhost:3000/auth/google/callback
  https://your-production-url.com
  https://your-production-url.com/auth/google/callback
  ```
- Add JavaScript Origins:
  ```bash
  http://localhost:3000
  https://your-production-url.com
  ```

# 🚀 Deployment
- Create account on Vercel
- Connect your GitHub repository
- Configure environment variables
- Deploy

# 👨‍💻 Developer
~ Robinsh Raj

Made with ❤️ and React
