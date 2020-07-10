$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

function validate()
{
    var mail = document.getElementById('mailid').value;
    var error = "<span style='color:white'>Please Enter a valid Email id</span>";
    var atpos = mail.indexOf("@");
    var dotpos = mail.lastIndexOf(".");
    if(atpos<1 || dotpos<atpos+2 || dotpos>=mail.length)
        document.getElementById('emailerror').innerHTML = "<span style='color:black'>Enter a valid Email address!</span>"
}
