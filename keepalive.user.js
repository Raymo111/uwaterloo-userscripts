// ==UserScript==
// @name         UW Session Keepalive
// @namespace    https://raymond.li/
// @version      0.1
// @license      GNU GPL v3
// @description  Automatically sends a POST request to LEARN every hour to keep your session alive.
// @author       Raymond Li <scripts@raymond.li>
// @match        https://learn.uwaterloo.ca/*
// @grant        none
// @updateURL    https://github.com/Raymo111/uwaterloo-userscripts/raw/master/keepalive.user.js
// @downloadURL  https://github.com/Raymo111/uwaterloo-userscripts/raw/master/keepalive.user.js
// ==/UserScript==

var initialLoad = true;

function learn_keepalive() {
    if (initialLoad) {
        initialLoad = false;
        return;
    }
    fetch("/d2l/lp/auth/session/extend", {
        method: "POST",
        body: ""
    }).then(res => {
        console.log("Session extended:", res);
    });
}

(function() {
    'use strict';
    if (window.location.href.indexOf("https://learn.uwaterloo.ca/d2l") !== -1) {
        setInterval(learn_keepalive(), 1000 * 60 * 60);
    }
})();
