import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAbdAtYVZKuS0pzpZ1BU8u467LwaRwdUZE",
    authDomain: "web-ukraine-qr.firebaseapp.com",
    projectId: "web-ukraine-qr",
    storageBucket: "web-ukraine-qr.appspot.com",
    messagingSenderId: "956114026628",
    appId: "1:956114026628:web:8e7af579b5bcf0764242d1",
    measurementId: "G-XQECS6BXWP"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var tabInputs = document.getElementsByName("tabs");

for (var i = 0; i < tabInputs.length; i++) {
    tabInputs[i].addEventListener(
        'click',
        async function (event) {
            const langCode = event.target.id.substring(4);
            logEvent(analytics, "language_select", { lang_code: langCode });
        },
        false);
}

var nextArrows = document.getElementsByClassName("slide__next");

for (var i = 0; i < nextArrows.length; i++) {
    nextArrows[i].addEventListener(
        'click',
        async function (event) {
            const langCode = event.target.id.substring(11);
            logEvent(analytics, "slide_next", { lang_code: langCode, to: event.target.href.substring(9, 10)});
        },
        false);
}

var prevArrows = document.getElementsByClassName("slide__prev");

for (var i = 0; i < prevArrows.length; i++) {
    prevArrows[i].addEventListener(
        'click',
        async function (event) {
            const langCode = event.target.id.substring(11);
            logEvent(analytics, "slide_prev", { lang_code: langCode, to: event.target.href.substring(9, 10)});
        },
        false);
}