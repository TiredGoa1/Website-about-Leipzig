function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const cards=document.querySelectorAll(".Card");

const orders=shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

let aufgedeckteKarte = undefined; 

cards.forEach((card,index) => {
    card.style.order = orders[index];
    card.style.backgroundColor="#000000";

    card.onclick = () =>{
        handleCardClick(card)
    }
})



function handleCardClick(card){
    card.style.backgroundColor=""
    if (aufgedeckteKarte){
        const cardColor = card.dataset.color;
        const aufgedeckteKarteColor = aufgedeckteKarte.dataset.color;
        
        if (cardColor == aufgedeckteKarteColor){
            console.log("paar")
        }
        else{
            const aufgedeckteKarteRef=aufgedeckteKarte;
            
            setTimeout( () => {
                
                
                card.style.backgroundColor="#000000";
                aufgedeckteKarteRef.style.backgroundColor="#000000";
                
            },2000)
        }

        aufgedeckteKarte = undefined;
    }
    else{
        aufgedeckteKarte = card
    }
}

