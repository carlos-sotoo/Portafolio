export function scrolling(posY,element){
    const ele = document.querySelector(element),
    posEle = ele.getBoundingClientRect().bottom;

    if(posEle <= posY){
        ele.classList.remove("active");
    }else{
        ele.classList.add("active");
    }
}