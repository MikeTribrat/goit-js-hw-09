const t={body:document.body,startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};t.stopButton.disabled=!0;let o=null;function n(){t.stopButton.disabled=!t.stopButton.disabled,t.startButton.disabled=!t.startButton.disabled}t.startButton.addEventListener("click",(function(e){n(),e.target.hasAttribute("data-start")&&(o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),t.stopButton.addEventListener("click",(function(t){n(),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.e5741e51.js.map