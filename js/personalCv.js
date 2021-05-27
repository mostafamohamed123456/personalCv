let linkParts = document.querySelectorAll('.left-section ul li');
let sliderItems = document.querySelectorAll('.carousel .carousel-inner .carousel-item');
let sliderIndicators = document.querySelectorAll('.carousel .carousel-indicators li');
console.log(sliderItems)
window.onload = ()=>{
    chooseLink();
}
function chooseLink(){
    for(let i =0; i < linkParts.length; i++){
        linkParts[i].onclick = function(){
            sliderItems.forEach(item=>{
                item.classList.remove('active');
            });
            sliderIndicators.forEach(list=>{
                list.classList.remove('active');
            })
            sliderItems[i].classList.add('active');
            sliderIndicators[i].classList.add('active');
        }
    }
}
let creativeGit = document.querySelector('.portfolio-cont #creative-github');
let weatherGit = document.querySelector('.portfolio-cont #weather-github');
let blogrGit = document.querySelector('.portfolio-cont #blogr-github');
let creativeLink = document.querySelector('.portfolio-cont #creative-website');
let weatherLink = document.querySelector('.portfolio-cont #weather-website');
let blogrLink = document.querySelector('.portfolio-cont #blogr-website');

creativeGit.onclick = function(){
    window.open('https://github.com/mostafamohamed123456/Creative.git','_self','width=1600','true');
}
weatherGit.onclick = function(){
    window.open('https://github.com/mostafamohamed123456/Weather.git','_self','width=1600','true');
}
blogrGit.onclick = function(){
    window.open('https://github.com/mostafamohamed123456/Blogr.git','_self','width=1600','true');
}
creativeLink.onclick = function(){
    window.open('https://mostafamohamed123456.github.io/Creative/','_self','width=1600','true');
}
weatherLink.onclick = function(){
    window.open('https://mostafamohamed123456.github.io/Weather/','_self','width=1600','true');
}
blogrLink.onclick = function(){
    window.open('https://mostafamohamed123456.github.io/Blogr/','_self','width=1600','true');
}