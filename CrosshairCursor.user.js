// ==UserScript==
// @name         Crosshair Cursor
// @namespace    https://github.com/No-Eul/Userscripts
// @version      1.0
// @description  Change the default cursor to crosshair in Diep.io
// @author       NoEul
// @license      MIT License - https://github.com/No-Eul/Userscripts/blob/CrosshairCursor/LICENSE.txt
// @source       https://github.com/No-Eul/Userscripts/tree/CrosshairCursor
// @supportURL   https://github.com/No-Eul/Userscripts/issues
// @updateURL    https://github.com/No-Eul/Userscripts/raw/CrosshairCursor/CrosshairCursor.user.js
// @downloadURL  https://github.com/No-Eul/Userscripts/raw/CrosshairCursor/CrosshairCursor.user.js
// @match        *://diep.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// ==/UserScript==

(() => {
	let canvas = document.getElementById("canvas");
	canvas.style.setProperty("cursor", "crosshair");
	let observer = new MutationObserver(mutations => {
		if (canvas.style.getPropertyValue("cursor") === "default")
			canvas.style.setProperty("cursor", "crosshair");
	});
	observer.observe(canvas, { attributes: true, attributeFilter: ["style"] });
})();
