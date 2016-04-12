var target = ".stage";

$(window).keypress(function(event) {

//a
  if (event.which == 97 || event.which == 65) {
   newLetter = $(".alphabet .regular .letter-a").clone();     
   $(target).append(newLetter);
 }
 //b
  if (event.which == 98 || event.which == 66) {
   newLetter = $(".alphabet .regular .letter-b").clone();     
   $(target).append(newLetter);
 }
 //c
  if (event.which == 99 || event.which == 67) {
   newLetter = $(".alphabet .regular .letter-c").clone();     
   $(target).append(newLetter);
 }
 //d
  if (event.which == 100 || event.which == 68) {
   newLetter = $(".alphabet .regular .letter-d").clone();     
   $(target).append(newLetter);
 }
 //e
  if (event.which == 101 || event.which == 69) {
   newLetter = $(".alphabet .regular .letter-e").clone();     
   $(target).append(newLetter);
 }
 //f
   if (event.which == 102 || event.which == 70) {
   newLetter = $(".alphabet .regular .letter-f").clone();     
   $(target).append(newLetter);
 }
 //g
   if (event.which == 103 || event.which == 71) {
   newLetter = $(".alphabet .regular .letter-g").clone();     
   $(target).append(newLetter);
 }
 //h
   if (event.which == 104 || event.which == 72) {
   newLetter = $(".alphabet .regular .letter-h").clone();     
   $(target).append(newLetter);
 }
 //i
   if (event.which == 105 || event.which == 73) {
   newLetter = $(".alphabet .regular .letter-i").clone();     
   $(target).append(newLetter);
 }
 //j
   if (event.which == 106 || event.which == 74) {
   newLetter = $(".alphabet .regular .letter-j").clone();     
   $(target).append(newLetter);
 }
 //k
   if (event.which == 107 || event.which == 75) {
   newLetter = $(".alphabet .regular .letter-k").clone();     
   $(target).append(newLetter);
 }
 //l
   if (event.which == 108 || event.which == 76) {
   newLetter = $(".alphabet .regular .letter-l").clone();     
   $(target).append(newLetter);
 }
 //m
   if (event.which == 109 || event.which == 77) {
   newLetter = $(".alphabet .regular .letter-m").clone();     
   $(target).append(newLetter);
 }
  //n
   if (event.which == 110 || event.which == 78) {
   newLetter = $(".alphabet .regular .letter-n").clone();     
   $(target).append(newLetter);
}
 //o
   if (event.which == 111 || event.which == 79) {
   newLetter = $(".alphabet .regular .letter-o").clone();     
   $(target).append(newLetter);
 }
 //p
   if (event.which == 112 || event.which == 80) {
   newLetter = $(".alphabet .regular .letter-p").clone();     
   $(target).append(newLetter);
 }
 //q
   if (event.which == 113 || event.which == 81) {
   newLetter = $(".alphabet .regular .letter-q").clone();     
   $(target).append(newLetter);
 }
 //r
   if (event.which == 114 || event.which == 82) {
   newLetter = $(".alphabet .regular .letter-r").clone();     
   $(target).append(newLetter);
 }
 //s
   if (event.which == 115 || event.which == 83) {
   newLetter = $(".alphabet .regular .letter-s").clone();     
   $(target).append(newLetter);
 }
 //t
   if (event.which == 116 || event.which == 84) {
   newLetter = $(".alphabet .regular .letter-t").clone();     
   $(target).append(newLetter);
 }
 //u
   if (event.which == 117 || event.which == 85) {
   newLetter = $(".alphabet .regular .letter-u").clone();     
   $(target).append(newLetter);
 }
 //v
   if (event.which == 118 || event.which == 86) {
   newLetter = $(".alphabet .regular .letter-v").clone();     
   $(target).append(newLetter);
 }
 //w
   if (event.which == 119 || event.which == 87) {
   newLetter = $(".alphabet .regular .letter-w").clone();     
   $(target).append(newLetter);
 }
 //x
   if (event.which == 120 || event.which == 88) {
   newLetter = $(".alphabet .regular .letter-x").clone();     
   $(target).append(newLetter);
 }
 //y
   if (event.which == 121 || event.which == 89) {
   newLetter = $(".alphabet .regular .letter-y").clone();     
   $(target).append(newLetter);
 }
 //z
   if (event.which == 122 || event.which == 90) {
   newLetter = $(".alphabet .regular .letter-z").clone();     
   $(target).append(newLetter);
 }

 //space
   if (event.which == 32) {
   newLetter = $(".alphabet .regular .letter-space").clone();     
   $(target).append(newLetter);
}

$(".alphabet").on({
    mouseenter: function () {
        //stuff to do on mouse enter
      console.log("enter");
      $(this).find(".encrypt").show();
      $(this).find(".regular").hide();
    },
    mouseleave: function () {
        //stuff to do on mouse leave
      console.log("leave");
    }
});
  
});



