/* 
solution 1
 */

/* const btns = document.querySelectorAll(".btn")
const imgSrc = document.querySelector("#col-img")

let randNo, lastRandNo;

btns.forEach(function(btn){
  btn.addEventListener("click", function(){
    while(randNo === lastRandNo) {  
    //  prevent random number generation duplication. but not efficient and use more cpu and memory 
    //  https://codereview.stackexchange.com/questions/62018/prevent-repetitive-random-numbers
    
      randNo = Math.floor(Math.random()* 7 +1);
      }
      lastRandNo = randNo
    imgSrc.src = "images/image-" + randNo + ".jpg"
  })
}) */

/* 
SOLUTION 2
*/

const btns = document.querySelectorAll(".btn")
const imgSrc = document.querySelector("#col-img")
let counter =0;
let picNos = [1,2,3,4,5,6,7]

btns.forEach(function(btn){
btn.addEventListener("click", function(e){
  if (btn.classList.contains("btn-left")){
    counter--;
    if(counter < 0) {
      counter = picNos.length -1
    }
    imgSrc.src = "images/image-" + picNos[counter] + ".jpg"
  };

  if(btn.classList.contains("btn-right")){
    counter++
    if(counter > picNos.length -1) {
      counter =0
      console.log("counter is 0")
    }
    imgSrc.src = "images/image-" + picNos[counter]+ ".jpg"
  }
})
})