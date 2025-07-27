# CVue – AI Resume Analyzer

![CVue Banner](public/readme/hero.webp)

## Overview
CVue is a Swiss-style, minimalistic AI-powered resume analyzer built with React, Vite, Tailwind CSS, and Puter.js. It provides smart feedback, ATS scoring, and actionable tips to help you improve your resume and job applications.

---

## Features
- **Swiss Minimal UI**: Clean, modern, and responsive design for desktop and mobile.
- **Resume Upload & Preview**: Drag-and-drop PDF upload with instant preview.
- **AI Feedback**: Get ATS score, detailed feedback, and improvement tips for your resume.
- **Modular Components**: Accordion, ScoreBadge, ScoreCircle, FileUploader, and more.
- **Custom SVG Icons**: All icons are Swiss-style, minimal, and consistent.
- **Puter.js Integration**: Serverless auth, storage, and AI feedback.
- **Cross-Device Compatibility**: Works seamlessly on desktop and mobile.

---

## Tech Stack
- **React 19**
- **Vite**
- **Tailwind CSS**
- **TypeScript**
- **Puter.js**
- **React Router v7**
- **Zustand**

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the app**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```

---

## Folder Structure
```
app/
  components/
    Accordion.tsx
    ATS.tsx
    Details.tsx
    FileUploader.tsx
    Navbar.tsx
    ResumeCard.tsx
    ScoreBadge.tsx
    ScoreCircle.tsx
    Summary.tsx
  routes/
    auth.tsx
    home.tsx
    resume.tsx
    upload.tsx
    wipe.tsx
  lib/
    pdf2img.ts
    puter.ts
    utils.ts
constants/
  index.ts
public/
  icons/
    [SVG icons]
  images/
    [backgrounds, resume previews]
types/
  index.d.ts
  puter.d.ts
```

---

## Swiss Style & UX
- Neutral backgrounds, clean lines, subtle borders, and modern fonts.
- All icons and UI elements follow Swiss minimalism for clarity and professionalism.
- Responsive layouts for mobile and desktop.

---

## Credits
- Made with ❤️ by Chethan
- Inspired by JavaScript Mastery tutorials

---

## License
MIT
