export function scrolling(posY,posY2,element){
    const ele = document.querySelector(element),
    posEle = ele.getBoundingClientRect().bottom;
    console.log(element,posEle)
    if(posEle <= posY || posEle>= posY2){
        ele.classList.remove("active");
    }else{
        ele.classList.add("active");
    }
}