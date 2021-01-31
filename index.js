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

tl.from('blockquote', 0.5, { x: 200, opacity: 0 });
tl.from('.about-span', 1, { width: 0 }, '=-.5');
tl.from('#office', 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, '=-1');
tl.from('#building', 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, '=-.7');

tl2.from('#box', 1, { opacity: 0, scale: 0 });
tl2.to('#box', 0.5, {
  left: '20%',
  scale: 1.3,
  borderColor: 'white',
  borderWidth: 12,
  boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)',
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
  triggerElement: 'blockquote',
})
  .setTween(tl2)
  .addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}
