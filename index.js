const klik = document.getElementById('btn');

klik.addEventListener('click', function(){
    
    const CardImage = document.querySelector('.card-image img');

    if(CardImage){
        CardImage.src = "assets/model.png";
    }
})