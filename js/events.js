/* click */
document.addEventListener("click", (e) => {
    const t = e.target
    
    /* start game*/
    if (t.matches(".enterButton button")) {
        const enterButton = document.querySelector(".enterButton")
        const instructions = document.querySelector(".instructions")
        const appButtons = document.querySelector(".appButtons")
        const vawelsSection = document.querySelector("#vawelsSection")
        
        appButtons.classList.remove("displayNone")
        enterButton.classList.add("displayNone")
        instructions.classList.add("displayNone")
        vawelsSection.classList.remove("displayNone")
        vawelsSection.removeAttribute("style", "display:none")
        displayIndex(vawelsSection)/* display vawels and objects */
        gettingArray()
    }
    
    /* end game */
    if (t.classList.contains("outButton")) {
        const enterButton = document.querySelector(".enterButton")
        const instructions = document.querySelector(".instructions")
        const appButtons = document.querySelector(".appButtons")
        const vawelsSection = document.querySelector("#vawelsSection")
        
        appButtons.classList.add("displayNone")
        enterButton.classList.remove("displayNone")
        instructions.classList.remove("displayNone")
        vawelsSection.classList.add("displayNone")
        vawelsSection.setAttribute("style", "display:none")
    }
       
    /* resetting elements */
    if (t.classList.contains("tryAgain")) {
        const vawelsSection = document.querySelector("#vawelsSection")
        displayIndex(vawelsSection)/* display vawels and objects */
        gettingArray()
    } 
})


/*-------------------------------- drag and drop ----------------------------------*/

/* prevent default */
;["dragenter", "dragleave", "dragover", "drop"].forEach(ev => {
    document.addEventListener(ev, e => e.preventDefault())
    document.querySelectorAll(".dropZone").forEach(dz => {
        if (ev !== "drop") {
            dz.addEventListener(ev, e => e.preventDefault())
        }
    }) 
})

document.addEventListener("dragstart", e => {
    const t = e.target
    if (t.classList.contains("dragElement")) {
        dragBegins(t, e)/* fucntion for event dragstar which get and set img src */
    }
})

document.addEventListener("drop", e => {
    const t = e.target
    if (t.classList.contains("dropZone")) {
        dropIMG(t, e)/* function to be used in drop event which get src img and create a paragrah with object name inide div  */
    }
})