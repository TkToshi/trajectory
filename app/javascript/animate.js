window.addEventListener('turbo:load', function(){
const animateLeft = document.querySelector('#animate_left');
const animateRight = document.querySelector('#animate_right');
console.log(animateLeft);
console.log(animateRight);

const foot = {
  opacity:[0, 1],

}

animateLeft.animate(foot, 2000);

requestAnimationFrame(anime);

})