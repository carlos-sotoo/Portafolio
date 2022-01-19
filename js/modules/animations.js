export function scrolling(posY,element){
    const ele = document.querySelector(element),
    posEle = ele.getBoundingClientRect().bottom,
    posBody = document.body.getBoundingClientRect().top;
    
    console.log((posEle+posBody),posEle,posBody)
    if(posEle <= posY ){
        ele.classList.remove("active");
    }else{
        ele.classList.add("active");
    }
}

export const sobreMiChange=(nav)=>{
    document.addEventListener("click",(e)=>{
        if(e.target.matches(nav)){
            let current = document.querySelector(`${nav}.active`)
            document.querySelector(`.${current.dataset.name}`).style.transform = "translate(-110%,0)"
            current.className="";
            
            e.target.classList.add("active")
            let panel = e.target.dataset.name;
            document.querySelector(`.${panel}`).style.transform = "translate(0,0)"
        }
    })
}