//获取元素
var ml1=document.getElementById('ml1');
var ml2=document.getElementById('ml2');
var ml3=document.getElementById('ml3');
var ml4=document.getElementById('ml4');

var mlYc1=document.getElementById('mlYc1');
var mlYc2=document.getElementById('mlYc2');
var mlYc3=document.getElementById('mlYc3');
var mlYc4=document.getElementById('mlYc4');
var mlYc5=document.getElementById('mlYc5');
var mlYc6=document.getElementById('mlYc6');
var mlYc7=document.getElementById('mlYc7');
var mlYc8=document.getElementById('mlYc8');


setTimeout(function(){
    ml1.style.height='5px';
    mlYc1.style.color='#fff';
    mlYc2.style.color='#fff';
},2500)
setTimeout(function(){
    ml2.style.height='5px';
    mlYc3.style.color='#fff';
    mlYc4.style.color='#fff';
},1500)
setTimeout(function(){
    ml3.style.height='5px';  
    mlYc5.style.color='#fff';
    mlYc6.style.color='#fff';
},1500)
setTimeout(function(){
    ml4.style.height='5px';
    mlYc7.style.color='#fff';
    mlYc8.style.color='#fff';
},2500)


setTimeout(function(){
    ml1.addEventListener('mouseenter',function(){
        ml1.style.height='150px';
    })
    ml2.addEventListener('mouseenter',function(){
        ml2.style.height='150px';
    })
    ml3.addEventListener('mouseenter',function(){
        ml3.style.height='150px';
    })
    ml4.addEventListener('mouseenter',function(){
        ml4.style.height='150px';
    })
    
    ml1.addEventListener('mouseout',function(){
        ml1.style.height='5px';
    })
    ml2.addEventListener('mouseout',function(){
        ml2.style.height='5px';
    })
    ml3.addEventListener('mouseout',function(){
        ml3.style.height='5px';
    })
    ml4.addEventListener('mouseout',function(){
        ml4.style.height='5px';
    })
},3000)

