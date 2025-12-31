# CV Files Directory

## How to Add Your Actual CV PDF

1. **Copy your CV file** from `C:\Users\DarkZero\Downloads` to this directory:
   - Source: `C:\Users\DarkZero\Downloads\Your_CV_File.pdf`
   - Destination: `personal-cv-website/assets/cv/Abdulrahman_Almustafa_CV.pdf`

2. **Replace the placeholder file** with your actual CV PDF

3. **Keep the filename** as `Abdulrahman_Almustafa_CV.pdf` (or update the JavaScript if you want a different name)

## Current Setup

- ✅ Download button functionality is implemented
- ✅ JavaScript function `downloadCV()` is configured
- ✅ PDF file structure is ready
- ✅ Download notification is set up
- ✅ Placeholder PDF file is in place

## File Structure

```
assets/cv/
├── Abdulrahman_Almustafa_CV.pdf  # Your actual CV file (replace this)
└── README.md                     # This instruction file
```

## Testing

1. Start the local server: `python -m http.server 8080`
2. Open your browser to: `http://localhost:8080`
3. Click any "Download CV" button on the website
4. Your PDF should download automatically

## Notes

- The download button is currently linked to `assets/cv/Abdulrahman_Almustafa_CV.pdf`
- If you rename your CV file, you'll need to update the JavaScript file (`assets/js/script.js`)
- Make sure your PDF file is web-optimized (reasonable file size for faster downloads)