window.addEventListener('turbo:load', function(){
const animateLeft = document.querySelector('#animate_left');
const animateRight = document.querySelector('#animate_right');
console.log(animateLeft);
console.log(animateRight);

const foot = [
  { transform: 'translateY(500px)', opacity: 0 },
  { transform: 'translateY(0)', opacity: 1 }
];

const option = {
  duration: 5000, //アニメーション完了時間
  iterations: Infinity,
  direction: 'alternate'
};

animateLeft.animate(foot, option);
animateRight.animate(foot, option);

})