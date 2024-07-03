//get html references
const image = document.querySelector(".image-container img");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

//create an array containing image extensions
const imagesArray = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

let i = 0;

//next button
function next() {
  if (i >= imagesArray.length - 1) i = 0;
  i++;
  console.log(i);
  setImg();
}
//previous button
function prev() {
  if (i <= 0) i = imagesArray.length;
  i--;
  console.log(i);
  setImg();
}

//update the image source path
function setImg() {
  image.setAttribute("src", `images/${imagesArray[i]}`);
}
