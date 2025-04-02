const deBTN=document.getElementById('deBTN');
const reBTN=document.getElementById('reBTN');
const inBTN=document.getElementById('inBTN');


const digitCnt=document.getElementById('digitCnt');
let counter=0;

deBTN.onclick= function(){
    counter--;
    digitCnt.textContent=counter;
}
reBTN.onclick= function(){
    counter = 0;
    digitCnt.textContent=counter;
}
inBTN.onclick = function() {
    counter++;
    digitCnt.textContent = counter;
}