// Burger Menu
function openSlideMenu() {
  document.getElementById('menu').style.width = '300px';
  document.getElementById('content').style.marginLeft = '250px';
}

function closeSlideMenu() {
  document.getElementById('menu').style.width = '0';
  document.getElementById('content').style.marginLeft = '0';
}

// About Page
let tl = new TimelineMax({ onUpdate: updatePercentage });
let tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.about-quote', 0.5, { x: 200, opacity: 0 });
tl.from('.about-span', 1, { width: 0 }, '=-.5');
tl.from('#office', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, '=-1');
tl.from('#building', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, '=-.7');

tl2.from('#box1', 1, { opacity: 0, scale: 0 });
tl2.to('#box1', 0.5, {
  left: '20%',
  scale: 1.3,
  borderColor: 'white',
  opacity: 1,
  borderWidth: 8,
});

const scene = new ScrollMagic.Scene({
  triggerElement: '.about',
  triggerHook: 'onLeave',
  duration: '100%',
})
  .setPin('.about')
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.about-quote',
})
  .setTween(tl2)
  .addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}

// Product Page

let tlp = new TimelineMax({ onUpdate: updatePercentage });
let tl2p = new TimelineMax();
const controllerp = new ScrollMagic.Controller();

tlp.from('.product-quote', 0.5, { x: 200, opacity: 0 });
tlp.from('.product-span', 1, { width: 0 }, '=-.5');
tlp.from('#virtual', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, '=-1');
tlp.from('#editing', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, '=-.7');

tl2p.from('#box2', 1, { opacity: 0, scale: 0 });
tl2p.to('#box2', 0.5, {
  left: '20%',
  scale: 1.3,
  borderColor: 'white',
  opacity: 1,
  borderWidth: 8,
});

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.product',
  triggerHook: 'onLeave',
  duration: '100%',
})
  .setPin('.product')
  .setTween(tlp)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: '.product-quote',
})
  .setTween(tl2p)
  .addTo(controllerp);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tlp.progress();
  console.log(tlp.progress());
}

// function scrollWin() {
//   window.scrollBy(0, 1400);
// }
