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

        vawelsSection.innerHTML = `
        <article class="displayCenter vawelsArticle">
                <div id="a" class="dropZone"><img src="assets/imgs/vowels_imgs/a_vowel.jpg" alt="a" class="dropZone"></div>
                <div id="e" class="dropZone"><img src="assets/imgs/vowels_imgs/e_vowel.jpg" alt="e" class="dropZone"></div>
                <div id="i" class="dropZone"><img src="assets/imgs/vowels_imgs/i_vowel.jpg" alt="i" class="dropZone"></div>
                <div id="o" class="dropZone"><img src="assets/imgs/vowels_imgs/o_vowel.jpg" alt="o" class="dropZone"></div>
                <div id="u" class="dropZone"><img src="assets/imgs/vowels_imgs/u_vowel.jpg" alt="u" class="dropZone"></div>
            </article>
            <article class="displayIMGS displayCenter">
                
            </article>
        `
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
        vawelsSection.innerHTML = `
        <article class="displayCenter vawelsArticle">
                <div id="a" class="dropZone"><img src="assets/imgs/vowels_imgs/a_vowel.jpg" alt="a" class="dropZone"></div>
                <div id="e" class="dropZone"><img src="assets/imgs/vowels_imgs/e_vowel.jpg" alt="e" class="dropZone"></div>
                <div id="i" class="dropZone"><img src="assets/imgs/vowels_imgs/i_vowel.jpg" alt="i" class="dropZone"></div>
                <div id="o" class="dropZone"><img src="assets/imgs/vowels_imgs/o_vowel.jpg" alt="o" class="dropZone"></div>
                <div id="u" class="dropZone"><img src="assets/imgs/vowels_imgs/u_vowel.jpg" alt="u" class="dropZone"></div>
            </article>
            <article class="displayIMGS displayCenter">
                
            </article>
        `
        
        gettingArray()
    } 
})


/* drag and drop */

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
        dragBegins(t, e)
    }
})

document.addEventListener("drop", e => {
    const t = e.target
    if (t.classList.contains("dropZone")) {
        dropIMG(t, e)
    }
})