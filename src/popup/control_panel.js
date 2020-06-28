function listenForClicks() {
    
    document.addEventListener("click", (e) => {

        const svgButtonImage = document.getElementById("toggleButtonSvg")
        
        function hideZettContent(tabs) {
            svgButtonImage.classList.remove("text-success")
            svgButtonImage.classList.remove("text-warning")
            svgButtonImage.classList.add("text-success")
            browser.tabs.sendMessage(tabs[0].id, {
                command: "hide",
            })
        }

        function showZettContent(tabs) {
            svgButtonImage.classList.remove("text-success")
            svgButtonImage.classList.remove("text-warning")
            svgButtonImage.classList.add("text-warning")
            browser.tabs.sendMessage(tabs[0].id, {
                command: "show",
            })
        }

        function logError(err) {
            console.error(`${err.message}`)
        }

        if(e.target.classList.contains('text-success') || e.target.classList.contains('text-warning') || e.target.classList.contains('btn-standard')){
            browser.tabs.query({active: true, currentWindow: true})
                .then(hideZettContent)
                .catch(logError)
        }

        if(e.target.classList.contains('btn-show')){
            browser.tabs.query({active: true, currentWindow: true})
                .then(showZettContent)
                .catch(logError)
        }
    })
}

function reportExecuteScriptError(err) {
    document.querySelector("#popup-content").classList.add("hidden")
    document.querySelector("#error-content").classList.remove("hidden")
    console.error(`Error: ${err.message}`);
}

browser.tabs.executeScript({file: "/content_script.js"})
    .then(listenForClicks)
    .catch(reportExecuteScriptError)