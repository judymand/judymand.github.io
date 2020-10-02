var number = 0;

jQuery(document).ready(function(){

  var windowHeight = jQuery(window).height();
  var windowScrollPosTop = jQuery(window).scrollTop();
  var windowScrollPosBottom = windowHeight + windowScrollPosTop;


  //A function hides objects and displays them when scrolling the screen
  jQuery.fn.revealOnScroll = function(direction, speed) {

    return this.each(function(){

      var objectOffSet = jQuery(this).offset();
      var objectOffSetTop = objectOffSet.top;

      if(!jQuery(this).hasClass("hidden")){
        jQuery(this).css("opacity", 0);
        if(direction == "right"){
          jQuery(this).css({
            "right" : "700px",
            "position": "relative"
          });
        }
        else if(direction == "left"){
          jQuery(this).css({
            "right" : "-700px",
            "position": "relative"
          });
        }
        jQuery(this).addClass("hidden");
      }

      if(!jQuery(this).hasClass("animateDone")){
        if(windowScrollPosBottom > objectOffSetTop){
          jQuery(this).animate({"opacity" : 1, "right" : 0}, speed).addClass("animateDone");
        }
      }

    });

  };

  jQuery(window).scroll(function(){

    windowHeight = jQuery(window).height();
    windowScrollPosTop = jQuery(window).scrollTop();
    windowScrollPosBottom = windowHeight + windowScrollPosTop;

    //Calling a function during screen scrolling
    jQuery("#about").revealOnScroll("null", 1000);
    jQuery(".my_picture").revealOnScroll("null", 2000);
    jQuery("u h3").revealOnScroll("left", 1000);
    jQuery("#block_skils strong u").revealOnScroll("left", 1000);
    jQuery("#block_tools strong u").revealOnScroll("right", 1000);
    jQuery(".scrollRight").revealOnScroll("right", 1500);
    jQuery(".scrollLeft").revealOnScroll("left", 1500);
    jQuery("#sec3").revealOnScroll("null", 1500);
    jQuery("#contact").revealOnScroll("null", 1500);

  });

});


//window.scrollTop();
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Array of objects, each object holds the information about a different project
var projects = [
  {
    name:"<h4><u>Project in C ++</h4></u>",
    text:"In this project I built a data structure of a linked list type.<br /> A linked list is created from several members (Node).<br />",
    img:"Pictures/linkedList c++.png",
    link:"https://github.com/judymand/data-structures"
  },
  {
    name:"<h4><u>Project in C</h4></u>",
    text:"In this project I built the game 'The Submarines'.<br />",
    img:"Pictures/Submarine game C.png",
    link:"https://github.com/judymand/Submarine-game"
  }
]

//Activated when the "Next" \ "Previous" button is clicked.
function change_project(move){

  if(move == "next"){
    ++number;
    if(number >= projects.length){
      number = 0;
    }
  }
  else{
    --number;
    if(number < 0){
      number = projects.length - 1;
    }
  }

  //Changes the project displayed
  $("#name_project").html(projects[number].name);
  $("#text_project").html(projects[number].text);
  $("#picture_project").attr("src",projects[number].img);
  $("#link").attr("href",projects[number].link);

}
