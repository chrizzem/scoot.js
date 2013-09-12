  /*Dependencies: jQuery 
  *Explanation: fades images under .noscoot in after load
  *Example: see the example index.html at https://github.com/chrizzem/scoot.js as an example.
  */
  
 /*sets top and bottom padding of an element based on the size of a reference element. */ 
 
function setPad(reference, target){
    var padAmt=((reference.height() - target.height())/2);
    var styles = {
      "padding-top": padAmt,
      "padding-bottom": padAmt
      };
    target.css( styles );
};
 
 /* scootSize: resizes sibling divs to the image size so that text, etc. is centered. It's using padding 
 *so that you can overlay other elements and hide them with background effects.
 */
function scootSize(image){
    var imageDiv=image.parent();
    if(imageDiv.is(':first-child')){  
        return (0);//do nothing... the unglamorous thing about is() is no isnot
    }else{
        var hoverDiv = imageDiv.parent().children('.hover');
        var linkDiv = imageDiv.parent().children('.link');
        setPad(image, hoverDiv);
        setPad(image, linkDiv);
    }
};

 /* scootIt: scoots the image aside (or at least the div it is in) to reveal the sibling div(s) below.
  * the image should be in a div that is the last div child of a list item.
 */
function scootIt(image){
    var delayTime=(Math.random()*1000+300); // gives the slide a staggered effect. Change the multiplier to change the variability.
    image.parent().delay(delayTime).animate({ left: image.css('width')}, 600, function(){
      image.css('opacity', 0); //animate:complete
    });
};
