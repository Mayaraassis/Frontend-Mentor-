const accordion= document.querySelectorAll('dt');
let i;

for (i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle("active");
    console.log(this.nextSibling);

    let dd= this.nextElementSibling;
    if (dd.style.display === "block") {
      dd.style.display = "none";
    } else {
      dd.style.display = "block";
    }
  });
}