/**
 * @desc Removes all the elements of an array
 * @param {Array<any>} array 
 */
function arrayClear(array)
{
    array.filter(() => false);
}
export default arrayClear;
