// let buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {

//     button.addEventListener('click', ()=>{
//         console.log("clicked");
//     });
    
// });

let dis = document.getElementById('dis');
let buttons = Array.from(document.getElementsByClassName('item'));


buttons.map((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText !='+'|| e.target.innerText!='-'||e.target.innerText!='*'||e.target.innerText!='/'){
            number = e.target.innerText;
            // display.innerText = number;
            display(number);
          
           
           
        }

        // let userInput = e.target.innerText;
        // display.innerText = userInput;
        // if (e.target.innerText == 'AC'){
        //     display.innerText = ' ';


        // }
       

    });
});
function display(value) {
    document.getElementById("dis").value += value;
    }

function add(a,b){

    return a+b;

}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;

}
function divide(a,b){
    return a/b;

}     

function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case '+' :
            return add(a,b)
        case '-' :
            return subtract(a,b)
        case '*' :
            return multiply(a,b)     
        case '/' :
            if (b===0) return  null
            else return divide(a,b)
    }
}
