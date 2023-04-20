/* variables */
let displayDB;
let arrDB = [];
/* <p class= "imgObject">${el.title}</p> */

/* ajax function */
function ajax(url, metodo) {
    const metodoHttp = metodo || "get"
    const xhr = new XMLHttpRequest()
    xhr.open(metodoHttp, url)
    xhr.send()
    return xhr
}

/* ----------------------------------------------------------------------------------------------------------------- */
const db = ajax("db.json")

/* getting db */
db.addEventListener("load", () => {
    if (db.status === 200) {
        displayDB = JSON.parse(db.response);
        gettingArray()
    }
})


/* displaing 5 random imgs in a diferent position */
function gettingArray(){
    while (arrDB.length < 5) { /* while => to be sure that array is gonna have 5 element */
        for (let i = 0; i < displayDB.length; i++) {
            const element = displayDB[Math.floor(Math.random() * 24.5)] /* random  */
            const img = element.img; 
            /* First element is pushed */
            if (arrDB.length === 0) {
                arrDB.push(element)
            }
            /* i dont want vawels to repeat, so a search if arr not contains the actual vawel the element can be pushed */
            else if (arrDB.length >= 1 && arrDB.length < 5) {
                const vawel = arrDB.find(el => el.img[12] === img[12])
                if(!vawel){arrDB.push(element)}    
           }   
        }
    }
    displayingImgs(arrDB, "article", ".displayIMGS")
}

function displayingImgs(arr, elem, selector) {
    elem = document.querySelector(selector)
    elem.innerHTML = arr.map(el => {
        return `
        <div id="drag_${el.img[12]}"><img src="${el.img}" alt="${el.img[12]}"></div>
        `
    } ).join("")
}