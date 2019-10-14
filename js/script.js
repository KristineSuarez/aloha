document.addEventListener("DOMContentLoaded", function () {
  console.log('clicked');
  
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
    autoplay: true
  });

  
}); 
document.getElementById('sign-up-form').addEventListener("submit", function()
{
  if(document.getElementById('your-email').Value!=null){
    const txt=document.getElementById('your-email').Value;
    alert("Please submit a valid email address");
  }else (document.getElementById('your-email').Value)
  const txtbox=document.getElementById('your-email').Value;
alert("Thank you for subscribing! ");
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