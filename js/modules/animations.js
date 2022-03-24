
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