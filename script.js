// toggle menu/navbar script
$('.menu-btn').click(function(){
   $('.navbar .meanu').toggleClass("active");
   $('.menu-btn i').toggleClass("active");
});
// typing animation script
var typed = new Typed(".typing", {
 strings: ["Instagrammer" , "Developer" , "Blogger" , "Designer"],
 typeSpeed :100,
 backSpeed: 60,
 loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Instagrammer" , "Web-Developer" , "Blogger" , "Designer"],
    typeSpeed :100,
    backSpeed: 60,
    loop: true
   });