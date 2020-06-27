const zettString = "ze.tt"
const zettMainSectionClass = "cp-area--headed-zett"
const zettSmallTeaserClass = "zon-teaser-standard__combined-link"


// Find ze.tt main-section on home page
let zettMainSectionSelection = document.getElementsByClassName(zettMainSectionClass)
if(zettMainSectionSelection.length > 0){
    for(let i = 0; i < zettMainSectionSelection.length; i++){
        zettMainSectionSelection[i].setAttribute("style", "display:none")
    }
}

let zettSmallTeaserSelection = document.getElementsByClassName(zettSmallTeaserClass)
for(let i = 0; i < zettSmallTeaserSelection.length; i++){
    const currentZettTeaser = zettSmallTeaserSelection[i]
    if(currentZettTeaser.href.match(zettString)){
        currentZettTeaser.parentNode.setAttribute("style", "display:none")
    }
}