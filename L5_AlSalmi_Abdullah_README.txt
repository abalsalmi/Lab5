# Lab5: Medieval Meme Generator App

**Date Created:** 09 03 2025  
**Last Modification Date:** 09 03 2025  
**Repository URL gitlab:** https://git.cs.dal.ca/asalmi/csci3172.git
**Repository URL github:** https://git.cs.dal.ca/asalmi/csci3172.git

**Live Demo URL:** (If applicable)

*[Abdullah Al Salmi](mailto:ab962755@dal.ca)*

---

## About the Project

This project is a **Meme Generator App** that allows users to search for images via the Unsplash API or upload their own images, and then add custom top and bottom text to create a unique meme with a medieval flair. 

---

## Features

- **Medieval-Themed UI:**  
  - Uses medieval fonts (e.g., MedievalSharp and Cinzel from Google Fonts) and styling elements that mimic parchment textures.
  - Semantic HTML5 and a clear visual layout to guide users in creating their memes.
  - WCAG Accessibility Considerations:  
    - **Alt Attributes:** All images include descriptive `alt` text.
    - **Keyboard Navigability:** Form elements and buttons are accessible via keyboard.
    - **Contrast and Readability:** Colors and fonts are chosen for clear contrast and readability.
  
- **Client-Side Functionality:**  
  - Search for images through a search form.
  - Upload personal images.
  - Customize memes by adding top and bottom text.
  - Preview the final meme on an HTML5 `<canvas>` element.
  - Download the created meme as an image.

- **Server-Side Functionality:**  
  - A Node.js server (built with Express.js) that serves static files and handles API requests.
  - Integration with the Unsplash API for secure image search requests.
  - Error handling for missing parameters and network/API errors.

- **Testing & Error Handling:**  
  - Uses try/catch blocks on both client and server sides for robust error handling.
  - Server-side unit tests written with Jest and Supertest to verify API responses.
  - Recommendations for further client-side testing using Jest with JSDOM or Cypress to ensure cross-browser compatibility.

---

## Technologies and APIs Used

- **Front-End:**  
  - HTML5, CSS3, JavaScript
  - Bootstrap 4 for layout and responsiveness
  - Google Fonts (MedievalSharp and Cinzel) for medieval typography

- **Back-End:**  
  - Node.js with Express.js
  - Unsplash API for image search (requires an API key)
  - Environment variables managed with dotenv

- **Testing:**  
  - Jest and Supertest for server-side testing

---

## Project Structure

lab5/ 
├─ css/ 
│ └─ style.css 
├─ js/ 
│ └─ script.js 
├─ index.html 
├─ server.js 
├─ package.json 
├─ L5_AlSalmi_Abdullah_README.txt 



---

## Issues and Limitations

- **API Key Dependency:**  
  - The image search functionality requires a valid Unsplash API key. Ensure that the key is stored in a `.env` file in the project root.
  
- **Browser Compatibility:**  
  - Basic cross-browser compatibility has been verified, but further testing (using tools like Cypress or manual testing on additional browsers) is recommended.

- **Accessibility Enhancements:**  
  - While basic WCAG guidelines have been implemented (alt text, keyboard navigability, contrast), further improvements (e.g., ARIA roles, more semantic landmarks) could enhance accessibility.

- **Error Handling:**  
  - Client-side errors are handled via alerts and console logging. More user-friendly error notifications could be implemented in a production environment.

---

## Acknowledgments

This project was completed as part of Lab 5 for CSCI 3172. The design principles and coding techniques were developed through previous coursework and independent study. All external libraries and APIs used (Unsplash API, Bootstrap, Google Fonts) are properly credited.

---

*End of README*

