function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){$(window).on("scroll",function(){$(window).scrollTop()?$("nav").addClass("sticky"):$("nav").removeClass("sticky")});mixitup(".container");$("a").on("click",function(n){if(""!==this.hash){n.preventDefault();var t=this.hash;$("html , body").animate({scrollTop:$(t).offset().top},200,function(){window.location.hash=t})}})});
