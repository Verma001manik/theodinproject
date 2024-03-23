let  xChoice = document.getElementById("x");
let oChoice = document.getElementById("o");

const start = document.getElementById("start");

xChoice.addEventListener('click',function(){
    oChoice.style.display = "none";
    xChoice.style.display = "none";
    start.addEventListener('click',function(){
        start.innerText = "RESTART";
        let restart = start.innerText = "RESTART";
        restart.addEventListener('click',function(){
        start.innerText  = "START";

    })

    })
    


    let gridElement = document.getElementById("box");
    gridElement.addEventListener('click', function(){
    console.log("clicked");
    let grid = document.getElementById("0");
    grid.innerText = "X";
    
})  
oChoice.addEventListener('click', function(){
    oChoice.style.display = "none";
    xChoice.style.display = "none";
    start.style.display = "none";

    let gridElement = document.getElementById("box");
    gridElement.addEventListener('click', function(){
        let grid = document.getElementById("4");
        grid.innerText = "O";


    })

})
    


} )




const Player = function(name){
    let namee = name;

    return {namee}


    
}
let player1 = Player("manik");
let player2 = Player("verma");
// console.log({player1, player2});


// start.addEventListener('click', function(){
//     console.log("satrt is clicked");
// })
// restart.addEventListener('click', function(){
//     console.log("restart is clicked");
// })

