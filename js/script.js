document.addEventListener("DOMContentLoaded", function () {
  console.log('clicked');
  
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
    autoPlay: 1500
  });

  
}); 



document.getElementById('sign-up-form').addEventListener("submit", function(event)
{ 
  event.preventDefault();

  const emailInputVal = document.getElementById('your-email').value;

  if(emailInputVal.length > 0){
    alert("thank you for subscribing");
  }else {
    alert("please enter a valid email");
  }
});
//end of doc ready

// const button = document.getElementById("click-here");
//   button.addEventListener("click", function (event) {
//     if (!event) { 
//       console.log("Please submit a valid email address");
//     }else (event) {
//       console.log("Thank you for subscribing!");
//     }
//     // console.log("You clicked a button!");
//   });