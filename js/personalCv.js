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
let sliderCreativeGit = document.getElementById('creative-github');
let sliderWeatherGit = document.getElementById('weather-github');
let sliderBlogrGit = document.getElementById('blogr-github');
let sliderCreativeLink = document.getElementById('creative-website');
let sliderWeatherLink = document.getElementById('weather-website');
let sliderBlogrLink = document.getElementById('blogr-website');

sliderCreativeGit.onclick = function(){
    window.open('https://github.com/mostafamohamed123456/Creative.git','_self','width=1600','true');
}
sliderWeatherGit.onclick = function(){
    window.open('https://github.com/mostafamohamed123456/Weather.git','_self','width=1600','true');
}
sliderBlogrGit.onclick = function(){
    window.open('https://github.com/mostafamohamed123456/Blogr.git','_self','width=1600','true');
}
sliderCreativeLink.onclick = function(){
    window.open('https://mostafamohamed123456.github.io/Creative/','_self','width=1600','true');
}
sliderWeatherLink.onclick = function(){
    window.open('https://mostafamohamed123456.github.io/Weather/','_self','width=1600','true');
}
sliderBlogrLink.onclick = function(){
    window.open('https://mostafamohamed123456.github.io/Blogr/','_self','width=1600','true');
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

let backgroundImg = document.getElementById('demo');


window.onload = () =>{
    imageChange();
}
function imageChange(){
    let imgArray = ['img/001.jpg','img/002.png','img/003.jpg'];
    backgroundImg.style.backgroundImage = `url(${imgArray[0]})`;
    setInterval(()=>{
        let randomValue = Math.floor(Math.random() * imgArray.length);
        backgroundImg.style.backgroundImage = `url(${imgArray[randomValue]})`;
        console.log(randomValue)
    },2000)
}