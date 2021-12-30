var score = 0;
var score2 = 0;
var dicevalue2 = 0;
var diceno
window.onload = function boxes(){
    localStorage.clear()
    let container = document.getElementsByClassName("container")[0]; 
    console.log(document.getElementsByClassName("container"))
     for(let i=100;i>=1;i--){  
        let node = document.createElement('div');
        node.className = 'box'
        container.append(node);     
     } 
     let boxes = document.querySelectorAll('.box');
     boxes.forEach((box,i)=>{
        if(String(i).length==1 || String(i).length==2 && Number(String(i)[0])%2==0){
        box.innerHTML = 100-i
        box.id = 100-i
        }
        else{
        box.innerHTML = Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1;
        box.id = Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1;
        }
     })

  }

// window.onload = function onload1(){
//     console.log(document.getElementsByClassName('box')[0])
//     for(i=0;i<100;i++){
//      document.getElementsByClassName('box')[i].textContent = "" 
//     }
// }

var max = 1


function diceroll(event){  
    
    let dice = document.getElementsByClassName('diceno')[0];
    diceno = 1 + Math.floor(Math.random()*6);
    dice.innerHTML = diceno  
    localStorage.setItem("diceno",diceno)
    var user1 = document.getElementsByClassName("user1")[0];
    var user2 = document.getElementsByClassName("user2")[0];
   
//    if(user1.style.top == '' && user1.style.left == '' && diceno != '1' ){
//        user1.disabled = true  
       
//    }
//    else{
//        user1.disabled = false
       
//    }

//    if(user2.style.top == '' && user2.style.left == '' && diceno != '1'){
//     user2.disabled = true 
//    }
//    else{
//     user2.disabled = false
//    }

}



var dicevalue
value = 0
console.log(value)

function user1(){
   dicevalue = JSON.parse(localStorage.getItem("diceno"))
   value = value + dicevalue;
   let user1 = document.getElementsByClassName("user1")[0];
   var boxposition = document.getElementById(value); 
    score = value
    console.log(boxposition.getBoundingClientRect().top) 
    var mouseX = boxposition.getBoundingClientRect().top;
    var mouseY = boxposition.getBoundingClientRect().left;
    console.log(mouseX,mouseY)
    user1.style.top =  mouseX+'px'
    user1.style.left = mouseY+'px'

    if(score=='98'){
        alert("oh no!")
        user1.style.top = '123px'
        user1.style.left = '548.15625px'
        value = 79;
        score = 79
    }

    if(score=='93'){
        alert("oh no!")
        user1.style.top = '123px'
        user1.style.left = '848px'
        value = 73;
        score = 73;
    }

    if(score=='87'){
        alert("oh no!")
        user1.style.top = '123px'
        user1.style.left = '698px'
        value = 36;
        score = 36;
    }

    if(score=='95'){
        alert("oh no!")
        user1.style.top = '123px'
        user1.style.left = '748px'
        value = 75;
        score = 75;
    }

    if(score=='62'){
        alert("oh no!")
        user1.style.top = '423px'
        user1.style.left = '548px'
        value = 19;
        score = 19;
    }

    if(score=='64'){
        alert("oh no!")
        user1.style.top = '223px'
        user1.style.left = '498px'
        value = 60;
        score = 60;
    }

    if(score=='54'){
        alert("oh no!")
        user1.style.top = '323px'
        user1.style.left = '798px'
        value = 34;
        score = 34;
    }

    if(score=='17'){
        alert("oh no!")
        user1.style.top = '473px'
        user1.style.left = '798px'
        value = 7;
        score = 7;
    }
    // if(score=='1'){
    //     alert("you are going up!")
    //     user1.style.top = '323px'
    //     user1.style.left = '598px'
    //     value = 38;
    //     score = 38;
    // }

    if(score=='4'){
        alert("you are going up!")
        user1.style.top = '423px'
        user1.style.left = '798px'
        value = 14;
        score = 14;
    }

    if(score=='9'){
        alert("you are going up!")
        user1.style.top = '323px'
        user1.style.left = '948px'
        value = 31;
        score = 31;
    }

    if(score=='28'){
        alert("you are going up!")
        user1.style.top = '73px'
        user1.style.left = '648px'
        value = 84;
        score = 84;
    }

    if(score=='21'){
        alert("you are going up!")
        user1.style.top = '273px'
        user1.style.left = '548px'
        value = 42;
        score = 42;
    }

    if(score=='51'){
        alert("you are going up!")
        user1.style.top = '173px'
        user1.style.left = '798px'
        value = 67;
        score = 67;
    }

    if(score=='72'){
        alert("you are going up!")
        user1.style.top = '23px'
        user1.style.left = '948px'
        value = 91;
        score = 91;
    }

    if(score=='80'){
        alert("you are going up!")
        user1.style.top = '23px'
        user1.style.left = '548px'
        value = 99;
        score = 99;
    }
    
    if(score=='100'){
        alert("you won the game");
        window.location.reload();
        localStorage.clear()
    }

  
}

function findTopLeft(user1) {
    user1.style.top =  '491px'
    user1.style.left = '706px'  
  } 


value2 = 0

function user2(){ 
    dicevalue2 = JSON.parse(localStorage.getItem("diceno"))
    value2 = value2 + dicevalue2
    let user2 = document.getElementsByClassName("user2")[0];
    // user2.classList.toggle("active")
    // if(document.getElementsByClassName('active')[0]){
    //     user2.disabled = true
    //    }
    //    else{
    //     user2.disabled = false
    // }
    var boxposition = document.getElementById(value2); 
    score2 = value2
    var mouseX = boxposition.getBoundingClientRect().top;
    var mouseY = boxposition.getBoundingClientRect().left; 
    console.log(mouseX,mouseY)
   
    user2.style.top =  mouseX+'px'
    user2.style.left = mouseY+8+'px'
    if(score2=='98'){
        alert("oh no!")
        user2.style.top = '123px'
        user2.style.left = '548.15625px'
        value2 = 79;
        score2 = 79
    }
    if(score2=='93'){
        alert("oh no!")
        user2.style.top = '123px'
        user2.style.left = '848px'
        value2 = 73;
        score2 = 73;
    }
    if(score2=='87'){
        alert("oh no!")
        user2.style.top = '323px'
        user2.style.left = '698px'
        value2 = 36;
        score2 = 36;
    }
    if(score2=='95'){
        alert("oh no!")
        user2.style.top = '123px'
        user2.style.left = '748px'
        value2 = 75;
        score2 = 75;
    }
    if(score2=='62'){
        alert("oh no!")
        user2.style.top = '423px'
        user2.style.left = '548px'
        value2 = 19;
        score2 = 19;
    }
    if(score2=='64'){
        alert("oh no!")
        user2.style.top = '223px'
        user2.style.left = '498px'
        value2 = 60;
        score2 = 60;
    }
    if(score2=='54'){
        alert("oh no!")
        user2.style.top = '323px'
        user2.style.left = '798px'
        value2 = 34;
        score2 = 34;
    }
    if(score2=='17'){
        alert("oh no!")
        user2.style.top = '473px'
        user2.style.left = '798px'
        value2 = 7;
        score2 = 7;
    }
    //ladders
    if(score2=='4'){
        alert("you are going up!")
        user2.style.top = '423px'
        user2.style.left = '798px'
        value2 = 14;
        score2 = 14;
    }
    if(score2=='9'){
        alert("you are going up!")
        user2.style.top = '323px'
        user2.style.left = '948px'
        value2 = 31;
        score2 = 31;
    }
    if(score2=='28'){
        alert("you are going up!")
        user2.style.top = '73px'
        user2.style.left = '648px'
        value2 = 84;
        score2 = 84;
    }
    if(score2=='21'){
        alert("you are going up!")
        user2.style.top = '273px'
        user2.style.left = '548px'
        value2 = 42;
        score2 = 42;
    }
    if(score2=='51'){
        alert("you are going up!")
        user2.style.top = '173px'
        user2.style.left = '798px'
        value2 = 67;
        score2 = 67;
    }
    if(score2=='72'){
        alert("you are going up!")
        user2.style.top = '23px'
        user2.style.left = '948px'
        value2 = 91;
        score2 = 91;
    }
    if(score2=='80'){
        alert("you are going up!")
        user2.style.top = '23px'
        user2.style.left = '548px'
        value2 = 99;
        score2 = 99;
    }
    
    if(score2=='100'){
        alert("you won the game");
        window.location.reload()
        localStorage.clear()
    }
}




