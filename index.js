
var drum = document.querySelectorAll(".drum");

for(var i=0;i<drum.length;i++)
{
     drum[i].addEventListener("click",function() {

      var buttonHTML = this.innerHTML;

      makenoise(buttonHTML);
      ButtonAnimation(buttonHTML)


   });

   document.addEventListener("keypress", function(event) {

      var buttonHTML = event.key;

      makenoise(buttonHTML);
      ButtonAnimation(buttonHTML)

   });

}

function makenoise(buttonHTML)
{
  switch (buttonHTML) {
    case "w":
      var myaudio = new Audio("sounds/crash.mp3");
      myaudio.play();
      break;

   case "a":
      var myaudio = new Audio("sounds/tom-3.mp3");
      myaudio.play();
      break;

   case "s":
      var myaudio = new Audio("sounds/snare.mp3");
      myaudio.play();
      break;

   case "d":
      var myaudio = new Audio("sounds/tom-1.mp3");
      myaudio.play();
      break;

   case "j":
      var myaudio = new Audio("sounds/tom-2.mp3");
      myaudio.play();
      break;

   case "k":
      var myaudio = new Audio("sounds/tom-3.mp3");
      myaudio.play();
      break;

   case "l":
     var myaudio = new Audio("sounds/tom-4.mp3");
     myaudio.play();
     break;

   default:


  }
}


function ButtonAnimation(buttonHTML) {

    var activeButton = document.querySelector("."+buttonHTML);

    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    },300);
}
