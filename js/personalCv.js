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