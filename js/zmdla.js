

setTimeout(function(){
//获取ul元素 并为其追加一组相同图片（为了做到无缝衔接）
let ul=document.querySelector('ul');
ul.innerHTML=ul.innerHTML+ul.innerHTML;
//获取所有的li元素和.btn元素
let lis=document.querySelectorAll('li');
let btns=document.querySelectorAll('.btn');

//每次滚动的跨度（正数向右 负数向左 默认向左滚动）
let spa=-2;
//计算并设置ul的总宽度
ul.style.width=lis[0].offsetWidth*lis.length+'px';

//滚动函数
function move(){
    if(ul.offsetLeft<-ul.offsetWidth/2){
        // 向左走时 判断图片是否走完（后面追加了一组图片 所以需要ul的总长度来除以2进行判断） 走完时重新开始
        ul.style.left='0';
    }
    if(ul.offsetLeft>0){
        //向右走时 判断图片是否走完
        ul.style.left=-ul.offsetWidth/2+'px';
    }
    //设置偏移位置
    ul.style.left=ul.offsetLeft+spa+'px';
}

//定时器 每30毫秒执行一次move函数
let timer=setInterval(move,30);

ul.addEventListener('mousemove',function(){
    clearInterval(timer);
})

//为ul绑定事件 悬停停止 移开滚动
ul.addEventListener('mouseout',function(){
    timer=setInterval(move,30);
})

//为两个按钮绑定点击事件
//向左走
btns[0].addEventListener('click',function(){
    spa=-2;
})

//向右走
btns[1].addEventListener('click',function(){
    spa=2;
})



var list = document.getElementsByTagName("li");
        for(var i = 0; i < list.length; i++) {
            list[i].index = i;
            
            list[i].addEventListener('mouseenter',function(){
                this.style.border='3px solid red';
            })
            list[i].addEventListener('mouseout',function(){
                this.style.border='3px solid blue';
            })
        }

},2000)