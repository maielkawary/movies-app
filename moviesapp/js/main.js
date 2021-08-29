const arrow1 = document.getElementById('arrow1')
const moviesList = document.getElementById('first')
console.log(moviesList)
arrow1.addEventListener("click",  goright);

function goright(){
    moviesList.style.transform = "rotateY(-100deg);"
};