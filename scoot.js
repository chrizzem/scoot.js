  /*yes, yes, it requires jQuery. */
  /*fades images under .noscoot in after load*/
  $('li.noscoot>div:last-child>img').load(function(){
	  var image=$(this);
	  var imageDiv=image.parent();
	  imageDiv.parents('.noscoot').animate({opacity:1},300);
	});
       
    /*fades in images under .scoot after load and then slides them to reveal the text underneath */   
  $('li.scoot>div:last-child>img').load(function(){
	  var image=$(this);
	  var imageDiv=image.parent();
	  var linkDiv=imageDiv.parent().children('div:first-child');
	  var theHeight = image.css('height'); 
	  var delayTime=(Math.random()*900+100); // gives the slide a staggered effect. Change the multiplier to change the variability.
	  linkDiv.css("line-height", theHeight);
	  linkDiv.css("height", theHeight);
	  console.log(delayTime);
	  imageDiv.parents('.scoot').animate({opacity:1},300);
	  imageDiv.delay(delayTime).animate({ left: image.css('width')}, 600);
	});
