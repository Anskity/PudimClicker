import HtmlUpdater from "./HtmlUpdater.js";
import arrayClear from "./array.js";

class Pudim
{
    static list = new Array();
    
    static create()
    {
        const newPudim = {};
        newPudim.x = Math.random();
        newPudim.y = Math.random();

        //Creating the elements
        const button = document.createElement('button');
        const image = document.createElement('img');

        //Adding attributes to the elements
        button.onclick = () => Pudim.teleport(this);
        image.src = 'https://cdn-icons-png.flaticon.com/512/817/817289.png';
        image.className = "pudim";
        image.draggable = false;

        //Adding the elements to the document
        button.appendChild(image);
        document.body.appendChild(button);

        newPudim.html = button;

        Pudim.list.push(newPudim);
    }

    static teleport(pudim)
    {
        pudim.x = Math.random();
        pudim.y = Math.random();
        Pudim.create();
        HtmlUpdater.update();
    }

    static reset()
    {
        for(const pudim of Pudim.list)
        {
            pudim.html.remove();
        }
        arrayClear(Pudim.list);
        Pudim.create();
        HtmlUpdater.update();
    }
}
export default Pudim;
