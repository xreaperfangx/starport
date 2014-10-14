$(document).ready(function() {
   $('#btn').mouseenter(function() {
       $(this).animate({
           width: '+=10px'
       });
   });
   $('#btn').mouseleave(function() {
       $(this).animate({
           width: '-=10px'
       }); 
   });
   $('#btn').click(function() {
       $(this).toggle(1000);
   }); 
});

confirm("Are you ready to change your life?");

var age = prompt("what is your email address?");

var age = prompt("what option would you like to purchase?");

var age = prompt("what is your credit card number?");

var userAnswer= prompt("What is your name on the card?");

var userAnswer= prompt("What is the security code?");

confirm("Thank you, you will be emailed shortly with an account!");
