var character =
    document.getElementById("character");

var block = document.getElementById("block");

function jump() {

   if(character.classList != "animate") {

      character.classList.add("animate");
   }
   setTimeout(function() {
      character.classList.remove("animate");
   } , 500);

}

var checkHit = setInterval(function(){
  parseInt( window.getComputedStyle(character).getPropertyValue("top")); //we parseint bc otherwise it would return px at the end
}, 10)