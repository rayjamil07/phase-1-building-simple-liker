// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

//we target where the hearts are placed
const hearts = document.querySelectorAll(".like-glyph");

//making our function
function addLikes (event){
  const heart = event.target;//target our heart
    mimicServerCall("url")
    .then(() => {
      if( heart.innerText === EMPTY_HEART ) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    }
    
    )
    .catch(error => {
      const modal = document.getElementById("modal");
      modal.innerText = "error message!";
      modal.className = "";
      setTimeout(() => {
        modal.className = "hidden";
      }, 3000);
    });
}

for (const glyph of hearts) {
  glyph.addEventListener("click", addLikes);
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
