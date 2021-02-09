const Bshare= document.querySelector('.share');
console.log(Bshare);
Bshare.addEventListener('click',function(){
  const share= document.querySelector('.social_media');
  share.classList.toggle('show');
  this.classList.toggle('active');

})