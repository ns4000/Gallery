function nav_animate(e) {
  var mouse_y = e.pageY;
  console.log("mouse_y " + mouse_y);

  if (mouse_y < 200) {
    //var cur_marg = $("#nav-style").css('margin-top');
    var old_y = $("#nav-style").css('margin-top').replace('px', '');
    var new_y = parseInt(old_y);
    console.log('new_y=' + new_y);
    var tmp = -(mouse_y + new_y);
    console.log('tmp=' + tmp);

    if (tmp > 0) {
      tmp = 0;
    }

    $("#nav-style").css({ 'margin-top': tmp + 'px' });
  }else {
    $("#nav-style").css({ 'margin-top': '-101px' });
  }
}

$(document).ready(function() {
  $(document).on('mousemove', nav_animate);
});
