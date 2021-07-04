// ==UserScript==
// @name         UWaterloo Autologin
// @namespace    https://raymond.li/
// @version      0.4
// @license      GNU GPL v3
// @description  Automatically signs in via ADFS or CAS to Learn, Quest, Crowdmark, Seashell, etc. You must have some form of password manager that automatically injects your username and password for this script to work.
// @author       Raymond Li <scripts@raymond.li>
// @match        https://quest.pecs.uwaterloo.ca/psp/SS/ACADEMIC/SA/?cmd=login&languageCd=ENG&
// @match        https://student.cs.uwaterloo.ca/~cs136/seashell/
// @match        https://marmoset.student.cs.uwaterloo.ca/?target=%2Fview%2Fcourse.jsp%3FcoursePK%3D47
// @match        https://adfs.uwaterloo.ca/*
// @match        https://cas.uwaterloo.ca/cas/login*
// @match        https://app.crowdmark.com/sign-in/waterloo
// @grant        none
// @updateURL    https://github.com/Raymo111/uwaterloo-userscripts/raw/master/autologin.user.js
// @downloadURL  https://github.com/Raymo111/uwaterloo-userscripts/raw/master/autologin.user.js
// ==/UserScript==

(function() {
    if (window.location.href === "https://quest.pecs.uwaterloo.ca/psp/SS/ACADEMIC/SA/?cmd=login&languageCd=ENG&") {
        getIdPLink();
    } else if (window.location.href.indexOf("https://adfs.uwaterloo.ca") !== -1) {
        setTimeout(() => {
            PaginatedNext();
        }, 2000);
        setTimeout(() => {
            Login.submitLoginRequest();
        }, 2000);
    } else if (window.location.href === "https://student.cs.uwaterloo.ca/~cs136/seashell/") {
        setTimeout(() => {
            document.forms[0].childNodes[11].click();
        }, 2000);
    } else if (window.location.href.indexOf("https://cas.uwaterloo.ca/cas/login") !== -1) {
        setTimeout(() => {
            document.forms.fm1.childNodes[7].childNodes[1].click()
        }, 2000);
    } else if (window.location.href === "https://app.crowdmark.com/sign-in/waterloo") {
        window.location.href = document.getElementsByClassName("button--large")[0].href;
    } else if (window.location.href === "https://marmoset.student.cs.uwaterloo.ca/?target=%2Fview%2Fcourse.jsp%3FcoursePK%3D47") {
        document.PerformLogin.childNodes[5].click();
    }
})();
