/**
 * @desc Repeats a callback
 * @param {Number} repeatNumb 
 * @param {Function} callback 
 */
function repeat(repeatNumb, callback)
{
    for(let i = 0; i < repeatNumb; i++)
    {
        callback();
    }
}
export default repeat;
