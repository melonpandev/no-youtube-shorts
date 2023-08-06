// ==UserScript==
// @name         Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect on short
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    const observeUrlChange = () => {
        let oldHref = document.location.href;
        const body = document.querySelector("body");
        const observer = new MutationObserver(mutations => {
            if (oldHref !== document.location.href) {
                oldHref = document.location.href;
                if(oldHref.includes("shorts")){
                   window.open("https://www.youtube.com","_self");
                };
            }
        });
        observer.observe(body, { childList: true, subtree: true });
    };

    window.onload = observeUrlChange;
})();
