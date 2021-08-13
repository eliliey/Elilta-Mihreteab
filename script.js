/* .js files add interaction to your website */

var factList = [
  "On average, African American residents in the Northeast and Mid-Atlantic regions are exposed to 61 percent more PM 2.5 pollution than white residents.",/*0*/
  "Study of 12 States and D.C. Shows Latino, African American and Asian American Residents Exposed to Biggest Health Risks",/*1*/
  "People of color are 1.5 times more likely to live in an area with poor air quality than white people"];/*2*/


  var facts = document.getElementById("facts");
  var mybutton = document.getElementById("button");
  
  var count = 0;
  mybutton.addEventListener("click", displayFact);

 function displayFact(){
  facts.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

var fullItemList = document.getElementById("my-list");
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem);
  console.log("click")
}
/* TODO: Declare the function checkOffList and add actions inside the { } */
function checkOffItem(clicked) {
  if (clicked.target.tagName =="LI") {
    clicked.target.classList.toggle("all done");
  }
}