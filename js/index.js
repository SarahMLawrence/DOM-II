//------------------------//
//     1. MOUSEOVER       //
//------------------------//

let navItems = document.querySelector('.nav');

navItems.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "orange";

});


//------------------------//
//     2. DRAG            //
//------------------------//

//const middleImg = 
document.querySelector(".img-content img").addEventListener('drag', (event) => {
    alert('DONT DRAG');
});


//------------------------//
//      3. SCROLL         //
//------------------------//

document.getElementById("headerP").addEventListener("scroll", myFunction);

function myFunction() {
  document.getElementById("message").innerHTML = "YOU SCROLLED!";
}



//------------------------//
//      4. DBLCLICK       //
//------------------------//

const dTitles = document.querySelectorAll("h4");

dTitles.forEach(sub => {
  sub.addEventListener('dblclick', () => {
    if (sub.style.backgroundColor === 'pink'){ 
    sub.style.backgroundColor = 'white';
    } else {
      sub.style.backgroundColor = 'pink';
    }
  });
});

//------------------------//
//      5.LOAD            //
//------------------------//

window.addEventListener('load', (event) =>{
    //console.log('page is fully loaded');

    alert('page is fully loaded!');
});


//------------------------//
//      6. RESIZE         //
//------------------------//
let images = document.querySelector('.img-content img');
window.addEventListener('resize', () =>{
    images.src = "https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
})


//------------------------//
//      7. FOCUS          //
//------------------------//
function pause() {
    document.body.classList.add('paused');
   // log.textContent = 'Focus Lost!';
}

function play() {
    document.body.classList.remove('paused');
    //log.textContent = 'this document has focus. click outside of document to lose focus';
}

const log = document.getElementById('log');

window.addEventListener('blur', pause);
window.addEventListener('focus', play);

//------------------------//
//      8. ONWHEEL        //
//------------------------//
function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  document.onwheel = zoom;

//------------------------//
//      9.POINTERDOWN     //
//------------------------//

var targetBox = document.querySelector('.btn');

targetBox.onpointerdown = handleDown;

function handleDown(evt) {
  var action;
 
  switch(evt.pointerType) {
    case "mouse":
      action = "clicking";
      break;

  }
 
  alert("Thanks for " + action + " me!");
  evt.preventDefault();
}

//------------------------//
//     10. Animation      //
//------------------------//

function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
  
