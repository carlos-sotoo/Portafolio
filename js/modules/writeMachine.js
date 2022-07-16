const TxtType = (element, toRotate) => {
    let time = 130;
    let loopNum = 0
    let isDeleting = false
    let txt = '';

    setInterval(() => {
        let i = loopNum % toRotate.length;
        let fullTxt = toRotate[i];

        txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1)

        element.firstElementChild.innerText = txt

        if (!isDeleting && txt === fullTxt) {
            setTimeout(function () {
                isDeleting = true;
            }, 1500);
        } else if (isDeleting && txt === '') {
            isDeleting = false;
            loopNum++;
        }
    }, time);

};



export default function textdecore() {
    const element = document.querySelector('.typewrite');
    const toRotate = element.getAttribute('data-type');

    TxtType(element, toRotate.split(','));
};