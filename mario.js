
printPyramid(19);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");
    var sp = " ";
    var ha = "#";
    for(var i = 0; i < height; i++){
      console.log(sp.repeat(height-i-1) + ha.repeat(i+2));
    }
    
}
