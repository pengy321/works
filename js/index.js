// 获取元素
var nameBut=document.getElementById('nameBut');
var zpj=document.getElementById('zpj');
var mzYc=document.getElementById('mzYc');

//设置时间事件

setTimeout(function(){
    zpj.style.width='200px';
    zpj.innerHTML='';
    zpj.style.color='#fff';


    setTimeout(function(){
        nameBut.style.width='90px';
        zpj.style.width='40px';
        zpj.style.color='blue';
        setTimeout(function(){
            zpj.innerHTML='O';
            zpj.style.color='#fff';
        },2000)
        mzYc.style.color='#fff';
    },1000)
    mzYc.style.color='#fff';



    setTimeout(function(){
        zpj.addEventListener('mouseover',function(){
            zpj.style.width='200px';
            zpj.style.color='blue';
            setTimeout(function(){
                zpj.innerHTML='SAMPLE REELS';
                zpj.style.color='#fff';
            },1000)
        })
        
        //鼠标离开动效
        zpj.addEventListener('mouseout',function(){
            zpj.style.width='40px';
            zpj.style.color='blue';
            setTimeout(function(){
                zpj.innerHTML='O';
                zpj.style.color='#fff'; 
            },2000)
        })
    },5000)
    //鼠标触发动效
    
},1000)
