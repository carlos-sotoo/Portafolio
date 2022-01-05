export default function hamburguer(btn,menu){

    document.addEventListener("click",e=>{
        if(e.target.matches(btn)||e.target.matches(`${btn} *`)){
            document.querySelector(menu).classList.toggle("active");
            document.querySelector(btn).childNodes[1].classList.toggle("active");
        }
        if(e.target.matches(menu)||e.target.matches(`${menu} *`)){
            document.querySelector(menu).classList.remove("active");
            document.querySelector(btn).childNodes[1].classList.remove("active");
        }

    });

}