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

document.getElementsByTagName('main')[0]
    .addEventListener(
        'click',
        async function (event) {
            if (event.target.className != 'slide__next' && event.target.className != 'slide__prev') {
                return;
            }
            const targetHash = event.target.hash;
            const langCode = targetHash.substring(11);
            const targetSlide = targetHash.substring(9, 10);
            logEvent(analytics, event.target.className, { lang_code: langCode, target_slide: targetSlide });
        },
        false);
