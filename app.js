
window.addEventListener("scroll", function() {
    var parallax= document.querySelector(".parallax");

   var scrolledHeight= window.pageYOffset,
                limit = parallax.offsetTop + parallax.offsetHeight;
                
  if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
    parallax.style.backgroundPositionY=  (scrolledHeight - parallax.offsetTop) /1.5+ "px";
 
    } else {
     parallax.style.backgroundPositionY=  "0";
    }
     });

     window.addEventListener("scroll", function() {
        var parallax1= document.querySelector(".parallax1");
    
       var scrolledHeight= window.pageYOffset,
                    limit = parallax1.offsetTop + parallax1.offsetHeight;
                    
      if(scrolledHeight > parallax1.offsetTop && scrolledHeight <= limit) {
        parallax1.style.backgroundPositionY=  (scrolledHeight - parallax1.offsetTop) /1.5+ "px";
     
        } else {
         parallax1.style.backgroundPositionY=  "0";
        }
         });