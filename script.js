var circle = $(".circle");

$(document).on("mousemove", function(event) {
  $("#log").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    var screenWidth = $(document).width();
    var cursorX = event.pageX;
    var cursorY = event.pageY;
    var opacity = (screenWidth - cursorX) / screenWidth;
      $(".circle").css ({
      "opacity": opacity,
      "left": cursorX,
      "top": cursorY
  })
 });

var circle = $(".text");

$(document).on ("mousemove", function(event) {
  $("#log").text ("pageX: " + event.pageX + ", pageY: " + event.pageY);
    var screenWidth = $(document).width();
    var cursorX = event.pageX;
    var cursorY = event.pageY;
    var opacity = (screenWidth - cursorX) / screenWidth;
      $(".text").css ({
      "opacity": opacity,
      "right": cursorX,
      "top": cursorY
  })
 });