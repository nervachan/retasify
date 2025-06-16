import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBR9bAMYocF36DnzRjCGPLkVPJZ0QsxWAs",
    authDomain: "retasify-bbd0c.firebaseapp.com",
    projectId: "retasify-bbd0c",
    storageBucket: "retasify-bbd0c.firebasestorage.app",
    messagingSenderId: "821971611437",
    appId: "1:821971611437:web:961e654ec6625a01226da4",
    measurementId: "G-LX1JXQ2Q5Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firestore
  export const db = getFirestore(app);

  // Listen for form submission and push email to Firestore
  document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("user-email");
    const form = emailInput?.form;

    if (form && emailInput) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) return;

        try {
          await addDoc(collection(db, "waitlist"), { email, timestamp: Date.now() });
          emailInput.value = "";
          alert("Thank you for joining the waitlist!");
        } catch (err) {
          alert("There was an error. Please try again.");
        }
      });
    }
  });


