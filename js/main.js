$(".location").click(function(){
  if ($(".locationBox").find(".alert").length==0) {
    $(".locationBox").append('<div class="alert alert-dismissible fade show" role="alert">' +
    '<strong>Выберете город вылета:</strong>'+
    '<ul class="city-list">'+
      '<li class="">'+
        '<a class="" href="#">Москва</a>'+
      '</li>'+
      '<li class="">'+
        '<a class="" href="#">Санкт-Петербург</a>'+
      '</li>'+
      '<li class="">'+
        '<a class="" href="#">Новосибирск</a>'+
      '</li>'+
    '</ul>'+
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> '+
      '<span aria-hidden="true" style="color: grey">&times;</span>' +
    '</button> '+
  '</div>');
  };
});


$(".star").click(function () {
  $(".star").eq(0).nextUntil(this).addClass("starActive");
  $(this).addClass("starActive").nextAll().removeClass("starActive");
  $(".star").not(".starActive").css({"background-image": "url('../tour1/images/star.png')"});
});

$(".star").mouseenter(function(){
  if(!$(this).hasClass("starActive")){
    $(".star").eq(0).nextUntil(this).css({"background-image": "url('../tour1/images/star-c.png')"});
    $(this).css({"background-image": "url('../tour1/images/star-c.png')"});
  }
});

$(".star").mouseleave(function () {
  $(".star").not(".starActive").css({"background-image": "url('../tour1/images/star.png')"});
});
