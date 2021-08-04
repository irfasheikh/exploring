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
   var characterTop =
  parseInt( window.getComputedStyle(character).getPropertyValue("top")); //we parseint bc otherwise it would return px at the end
   var blockLeft =
       parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   if(blockLeft < 20 && blockLeft > 0 && characterTop >=130) {
      block.style.animation = "none";
      block.style.display = "none";
      alert("you lose!");
   }
}, 10)