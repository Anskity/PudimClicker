import arrayClear from "./array.js";
import repeat from "./repeat.js";

class Pudim
{
    x = Math.random();
    y = Math.random();
    constructor()
    {
        //Creating the elements
        this.html = document.createElement('button');
        const image = document.createElement('img');

        //Adding attributes to the elements
        this.html.onclick = () => teleportPudim(this);
        image.src = 'https://cdn-icons-png.flaticon.com/512/817/817289.png';
        image.className = "pudim";
        image.draggable = false;

        //Adding the elements to the document
        this.html.appendChild(image);
        document.body.appendChild(this.html);
    }
}

const pudimList = new Array();
const createPudim = () => pudimList.push(new Pudim());
createPudim();
updatePudins();

/**
 * @desc Teleports the pudim to a random position
 * @param {HTMLButtonElement} pudim The pudim to teleport
 */
function teleportPudim(pudim)
{
    pudim.x = Math.random();
    pudim.y = Math.random();
    createPudim();
    updatePudins();
}

/**
 * @desc Updates the pudim htmls
 */
function updatePudins()
{
    for(const pudim of pudimList)
    {
        pudim.html.style.position = 'absolute';
        pudim.html.style.left = `${pudim.x*85}%`;
        pudim.html.style.top  = `${pudim.y*}%`;
    }
}
updatePudins();

document.addEventListener('keypress', event => {
    if(event.key.toUpperCase() == 'R')
    {
        for(const pudim of pudimList)
        {
            pudim.html.remove();
        }
        arrayClear(pudimList);
        createPudim();
        updatePudins();
    }
});
