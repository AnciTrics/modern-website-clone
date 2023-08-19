const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var timerOut;
function circleMouseFollower(xscale,yscale) {
  window.addEventListener("mouseover", (dets) => {
    document.querySelector(
      "#min-circle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}

function firstPageAnim(){
   var tl = gsap.timeline();

   tl.from("#nav", {
     y: "-10",
     duration: 0.5,
     opacity: 0,
     ease: Expo,
   })
     .to(".boundingElem", {
       y: "0",
       duration: 2,
       opacity: 1,
       ease: Expo.easeInOut,
       stagger: 0.2,
     })
     .to(".boundingElem", {
       y: "0",
       duration: 2,
       opacity: 1,
       ease: Expo.easeInOut,
       stagger: 0.2,
     })
     .from("#herofooter", {
       y: "-10px",
       duration: 0.4,
       opacity: 0,
       stagger: 0.1,
       ease: Expo.easeInOut,
     })
}
function circleskew(){
  var xscale= 1;
  var yscale=1;
  var xprev = 0;
  var yprev =0;
  window.addEventListener('mousemove',(dets)=>{
    clearTimeout(timerOut)
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
    
    xprev = dets.clientX;
    yprev = dets.clientY;
    circleMouseFollower(xscale,yscale)
    timerOut = setTimeout(()=>{
       document.querySelector(
         "#min-circle"
       ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    },100)
    // console.log(xdeff,ydeff)
  })
}
circleskew()
circleMouseFollower();
firstPageAnim()