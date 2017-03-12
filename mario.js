
drawPyramid(4);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    var pyramid = document.getElementById('pyramid');

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numSpaces = height - row - 1;
        var numBricks = row + 2;


        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // you can delete this now
        console.log(rowStr)

        var par = document.createElement("p");
        par.innerHTML = rowStr;

        pyramid.appendChild(par);

        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">

    }

}
