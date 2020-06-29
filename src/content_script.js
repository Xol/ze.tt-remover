(function(){
    const zettString = "ze.tt"
    const zettMainSectionClass = "cp-area--headed-zett"
    const zonTeaserStandardClass = "zon-teaser-standard__combined-link"
    
    if(window.hasRun){
        return
    } else {
        hideZettContent()
    }

    window.hasRun = true

    function hideZettContent(){
        //Find ze.tt main-section on home page
        const zettMainSectionSelection = document.getElementsByClassName(zettMainSectionClass)
        if(zettMainSectionSelection.length > 0){
            for(let i = 0; i < zettMainSectionSelection.length; i++){
                zettMainSectionSelection[i].setAttribute("style", "display:none")
            }
        }

        //Find ze.tt teaser fragments on home page 
        const zettSmallTeaserSelection = document.getElementsByClassName(zonTeaserStandardClass)
        if(zettSmallTeaserSelection.length > 0){
            for(let i = 0; i < zettSmallTeaserSelection.length; i++){
                const currentZettTeaser = zettSmallTeaserSelection[i]
                if(currentZettTeaser.href.match(zettString)){
                    currentZettTeaser.parentNode.setAttribute("style", "display:none")
                }
            }
        }
    }

    function showZettContent(){
        //Find ze.tt main-section on home page
        const zettMainSectionSelection = document.getElementsByClassName(zettMainSectionClass)
        if(zettMainSectionSelection.length > 0){
            for(let i = 0; i < zettMainSectionSelection.length; i++){
                zettMainSectionSelection[i].removeAttribute("style")
            }
        }

        //Find ze.tt teaser fragments on home page 
        const zettSmallTeaserSelection = document.getElementsByClassName(zonTeaserStandardClass)
        if(zettSmallTeaserSelection.length > 0){
            for(let i = 0; i < zettSmallTeaserSelection.length; i++){
                const currentZettTeaser = zettSmallTeaserSelection[i]
                if(currentZettTeaser.href.match(zettString)){
                    currentZettTeaser.parentNode.removeAttribute("style")
                }
            }
        }
    }

    browser.runtime.onMessage.addListener((message) => {
        console.log("message content: " + message.hideZettContentCommand)
        if (message.hideZettContentCommand){
            console.log("zeige ze.tt")
            showZettContent()   
        } else {
            console.log("verstecke ze.tt")
            hideZettContent()
        }
    })
})()