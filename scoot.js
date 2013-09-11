  /*yes, yes, it requires jQuery. */
  /*fades images under .noscoot in after load*/
  $('li.noscoot>div:last-child>img').load(function(){
	  var image=$(this);
	  var imageDiv=image.parent();
	  if(imageDiv.is(':first-child')){ //don nothing... the non-glamorous point about is()
	  }else{
	  var hoverDiv=imageDiv.parent().children('div:first-child');
	  var setHeight = { "line-height": theHeight,
	  		 "height": theHeight
	  		 };
	  hoverDiv.css ( setHeight );
	  }
	  imageDiv.parents('.noscoot').animate({opacity:1},300);
	});
       
    /*fades in images under .scoot after load and then slides them to reveal the text underneath */   
  $('li.scoot>div:last-child>img').load(function(){
	  var image=$(this);
	  var imageDiv=image.parent();
	  var linkDiv=imageDiv.parent().children('div:nth-last-child(2)');
	  var hoverDiv=imageDiv.parent().children('div:first-child');
	  var theHeight = image.css('height'); 
	  var setHeight = { "line-height": theHeight,
	  		 "height": theHeight
	  		 };
	  var delayTime=(Math.random()*900+100); // gives the slide a staggered effect. Change the multiplier to change the variability.
	  hoverDiv.css( setHeight ); // this could be expanded with a conditional to check if hoverDiv and linkDiv are the same Div, in which case only set one.
	  linkDiv.css( setHeight );
	  imageDiv.parents('.scoot').animate({opacity:1},300);
	  imageDiv.delay(delayTime).animate({ left: image.css('width')}, 600);
	});
