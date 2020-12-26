document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

// let imgs = ["https://res.cloudinary.com/dxpxe8gus/image/upload/v1608105031/yamai/yamai-snap6.jpg.jpg",
// "https://res.cloudinary.com/dxpxe8gus/image/upload/v1608105055/yamai/yamai-snap8.jpg.jpg"
// ]

// /*mainIndexwithoutUser*/
// function changeImg(){
//   let num = Math.floor(Math.random()*imgs.length);
//   document.querySelector(".mainImg").src= imgs[num];
// }

// if(window.innerWidth>0){
//   console.log(imgs[0])
//   setInterval(changeImg, 2000);
// }


ScrollReveal().reveal('.foto',{
  scale : 0.7,
  reset : true,
  duration : 1600,
});

// ScrollReveal().reveal(".aboutYamai h1")
