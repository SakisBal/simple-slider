//BASIC SLIDER SCRIPT

Slide = 1;


$(document).ready(function(){
  $('.last-slide').click(function(){
    $('#s'+Slide).removeClass('active');
    $('#s-box'+Slide).removeClass('active-box');
    Slide--;
    if (Slide == -1){
      Slide = 3;
    }
    $('#s-box'+Slide).addClass('active-box');
    $('#s'+Slide).addClass('active');
  });

  $('.next-slide').click(function(){
    $('#s'+Slide).removeClass('active');
    $('#s-box'+Slide).removeClass('active-box');
    Slide++;
    if (Slide == 4){
      Slide = 0;
    }
    $('#s-box'+Slide).addClass('active-box');
    $('#s'+Slide).addClass('active');
  });

  $('#s-box0').click(function(){

  });
  function chooseBox(box){
    $('#s'+Slide).removeClass('active');
    $('#s-box'+Slide).removeClass('active-box');
    $('#s'+box).addClass('active');
    $('#s-box'+box).addClass('active-box');
    Slide=box;
  }

  $('.slides-box').click(function(){
    var box = $(this).attr('id');
    box = box[box.length-1];
    console.log(box);
    chooseBox(box);
  }
  );
});
