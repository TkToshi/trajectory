window.addEventListener('turbo:load', function(){
const animateLeft = document.querySelector('#animate_left');
const animateRight = document.querySelector('#animate_right');
console.log(animateLeft);
console.log(animateRight);

const foot = {
  opacity:[0, 1],
};

const option = {
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate'
};

setTimeout(() => {
animateLeft.animate(foot, option);
},1000);

animateRight.animate(foot, option);

})