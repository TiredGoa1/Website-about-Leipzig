function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const cards=document.querySelectorAll(".Card");

const orders=shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

cards.forEach((card,index) => {
    card.style.order = orders[index];
    card.style.backgroundColor="#000000";

    card.onclick = () =>{
        card.style.backgroundColor=""
    }
})

