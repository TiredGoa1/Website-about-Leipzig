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
let matchedCards = [];
let isProcessing = false;

cards.forEach((card,index) => {
    card.style.order = orders[index];
    card.style.backgroundColor="#000000";

    card.onclick = () =>{
        if (!isProcessing && !matchedCards.includes(card)) {
        handleCardClick(card);
        }
    };
});



function handleCardClick(card){
     if (aufgedeckteKarte) {
        // do not allow multiple cards to be selected at the same time
        isProcessing = true;
     }

    card.style.backgroundColor=""
    if (aufgedeckteKarte){
        const cardColor = card.dataset.color;
        const aufgedeckteKarteColor = aufgedeckteKarte.dataset.color;
        
        if (cardColor == aufgedeckteKarteColor){
            console.log("paar")
            matchedCards.push(card, aufgedeckteKarte);
            isProcessing = false;
        }
        else{
            const aufgedeckteKarteRef=aufgedeckteKarte;
            isProcessing = true;

            setTimeout( () => {
                card.style.backgroundColor="#000000";
                aufgedeckteKarteRef.style.backgroundColor="#000000";
                isProcessing = false;
            }, 500);
        }

        aufgedeckteKarte = undefined;
    }else{
        aufgedeckteKarte = card
    }
};

