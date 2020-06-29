function listenForClicks() {    
    document.addEventListener("click", (e) => {
        const svgButtonImage = document.getElementById("toggleButtonSvg")
        
        function toggleZettContent(tabs){
            hideZettContent = !hideZettContent;
            if(hideZettContent){
                svgButtonImage.classList.remove("text-success")
                svgButtonImage.classList.remove("text-warning")
                svgButtonImage.classList.add("text-warning")
            } else {
                svgButtonImage.classList.remove("text-success")
                svgButtonImage.classList.remove("text-warning")
                svgButtonImage.classList.add("text-success")
            }
            browser.tabs.sendMessage(tabs[0].id, {
                hideZettContentCommand: hideZettContent
            })
        }

        function logError(err) {
            console.error(`${err.message}`)
        }

        if(e.target.classList.contains('btn-standard')){
            browser.tabs.query({active: true, currentWindow: true})
                .then(toggleZettContent)
                .catch(logError)
        }
    })
}

let hideZettContent = true

function reportExecuteScriptError(err) {
    document.querySelector("#popup-content").classList.add("hidden")
    document.querySelector("#error-content").classList.remove("hidden")
    console.error(`Error: ${err.message}`);
}

browser.tabs.executeScript({file: "/content_script.js"})
    .then(listenForClicks)
    .catch(reportExecuteScriptError)