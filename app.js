import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import {
      getFirestore,
      collection,
      addDoc,
    } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiTVN6vGJyWyYhnhOmV06bbfUsBum1Q8g",
  authDomain: "surveyformm.firebaseapp.com",
  projectId: "surveyformm",
  storageBucket: "surveyformm.appspot.com",
  messagingSenderId: "926187521219",
  appId: "1:926187521219:web:85e10453625d67b2ef0e76"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore();
const colRef= collection(db, "formData");

const form = document.querySelector(".input-fields");
const name = document.querySelector("#name");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const curKnowledge = document.querySelector("#curKnowledge");
const aim = document.querySelector("#aim");
const dreamProject = document.querySelector("#dreamProject");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addDoc(colRef, {
        name: name.value,
        dob: dob.value,
        email: email.value,
        curKnowledge: curKnowledge.value,
        aim: aim.value,
        dreamProject: dreamProject.value,
    })
    .then((result) => {
        form.reset();
        alert("your data was successfully stored to the database");
    })
    .catch((err) => {
        alert(err);
    });
});