import Pudim from "./Pudim.js";
class HtmlUpdater
{
    static updatePudins()
    {
        for(const pudim of Pudim.list)
        {
            pudim.html.style.position = 'absolute';
            pudim.html.style.left = `${pudim.x*85}%`;
            pudim.html.style.top  = `${pudim.y*60}%`;
        }

        document.getElementById("pudimCount").innerHTML = Pudim.list.length;
    }

    static update()
    {
        this.updatePudins();
    }
};
export default HtmlUpdater;
