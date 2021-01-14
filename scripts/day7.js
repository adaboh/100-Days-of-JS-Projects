

const btns = document.querySelectorAll(".btn")

let clientContent = [
  {
    name: "Tammy Asare",
    msg: "Tammy Asare dolor sit amet consectetur, adipisicing elit. Numquam debitis provident, voluptatem possimus perferendis ab odit placeat ex, repellendus doloribus voluptas adipisci aut iusto fugiat magni tempora blanditiis facilis veniam.",
    imgSrc: "./images/image-1.jpg"
  },
  {
    name: "Ama Asante",
    msg: "Ama  Asante Suspendisse volutpat metus at ultricies pellentesque. Curabitur sed lacinia ex. Praesent in est neque. Nullam eget mauris ultrices nisi laoreet sodales. Donec vitae scelerisque urna.",
    imgSrc: "./images/image-2.jpg"
  },
  {
    name: "Eric Dunka",
    msg: "Eric Dunka Praesent tempor congue sem, eu faucibus nisi cursus quis. Pellentesque dignissim suscipit molestie. In hac habitasse platea dictumst. Sed ultrices tempus ligula, ac faucibus tellus dictum eget. ",
    imgSrc: "./images/image-3.jpg"
  },
  {
    name: "Kofi Dabo",
    msg: "Kofi Dabor Acus, at tincidunt nisi velit ut nunc. Nullam pharetra vel enim nec euismod. Nam aliquet vehicula magna nec luctus. Nulla ultrices elit id fermentum pulvinar. Aenean eu felis sit amet mi sollicitudin pretium dictum nec lacus. Sed ligula odio, pharetra vel felis eu, tempor fermentum sem. ",
    imgSrc: "./images/image-4.jpg"
  },
  {
    name: "Elom Winter",
    msg: "Elom Winter Vivamus pellentesque laoreet ex, a dapibus lorem sollicitudin vitae. Sed pretium dolor quis orci hendrerit, a sollicitudin massa condimentum. Cras ut ligula id risus tincidunt imperdiet. Fusce sed ante sed arcu posuere scelerisque. ",
    imgSrc: "./images/image-5.jpg"
  },

]

function random(value){
  return Math.floor(Math.random() * value )
}


/* btns.forEach(function(btn){

  btn.addEventListener("click", function(){
    let clientSelected = clientContent[random(clientContent.length)]
    let clientName = clientSelected.name;
    let clientMsg = clientSelected.msg;
    let clientImage = clientSelected.imgSrc;
    document.querySelector(".client-name").textContent = clientName;
    document.querySelector(".client-msg").textContent = clientMsg;
    document.querySelector(".client-img").src = clientImage;
  console.log(clientSelected)

  })
}) */

/*
Solution TWO(2)
*/

function change() {
  let clientSelected = clientContent[counter]
  let clientName = clientSelected.name;
  let clientMsg = clientSelected.msg;
  let clientImage = clientSelected.imgSrc;
  document.querySelector(".client-name").textContent = clientName;
  document.querySelector(".client-msg").textContent = clientMsg;
  document.querySelector(".client-img").src = clientImage;

}

let counter = 0;
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    if(btn.classList.contains("btn-left")){
      counter--;
      if(counter <0){
        counter = clientContent.length-1;
      }
    change()
    }

    if(btn.classList.contains("btn-right")){
      counter++
      if(counter > clientContent.length -1){
        counter= 0;
      }
      change()
    }


  })
})
