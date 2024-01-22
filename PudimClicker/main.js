import Pudim from "./Pudim.js";
import HtmlUpdater from "./HtmlUpdater.js";

Pudim.create();
HtmlUpdater.update();

//When I press R I reset the pudins
document.addEventListener('keypress', event => {
    if(event.key.toUpperCase() == 'R') Pudim.reset();
});
