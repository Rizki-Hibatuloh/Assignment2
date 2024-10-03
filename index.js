const klik = document.getElementById('btn');
const CardImage = document.querySelector('.card-image img');
let imageChanged = false;

klik.addEventListener('click', function(){

    if(CardImage){
        if(imageChanged){
            CardImage.src = 'assets/hbd.jpg'
        }else{
        CardImage.src = "assets/model.png";
        }
        imageChanged = !imageChanged;
    }
})