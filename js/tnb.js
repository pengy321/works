// 获取按钮元素
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var btn5=document.getElementById("btn5");
var btn6=document.getElementById("btn6");
var btn7=document.getElementById("btn7");

//获取弹窗元素
var tc1=document.getElementById("tc1");
var tc2=document.getElementById("tc2");
var tc3=document.getElementById("tc3");
var tc4=document.getElementById("tc4");
var tc5=document.getElementById("tc5");
var tc6=document.getElementById("tc6");
var tc7=document.getElementById("tc7");

// 绑定事件
//什么是糖尿病






btn1.addEventListener("mouseover",function(){
    tc6.style.opacity='1';
    tc6.style.width='590px';

    this.style.backgroundColor='#140271';
    this.style.cursor='pointer';
})
btn1.addEventListener("mouseout",function(){
    tc6.style.opacity='0';
    tc6.style.width='0px';

    this.style.backgroundColor='#be1414';
})

//早期症状
btn2.addEventListener("mouseover",function(){
    tc4.style.opacity='1';
    tc4.style.width='590px';
    this.style.backgroundColor='#140271';
    this.style.cursor='pointer';
})
btn2.addEventListener("mouseout",function(){
    tc4.style.opacity='0';
    tc4.style.width='0px';
    this.style.backgroundColor='#be1414';
})

//全球糖尿病数据
btn3.addEventListener("mouseover",function(){
    tc1.style.opacity='1';
    tc1.style.width='590px';
    this.style.backgroundColor='#140271';
    this.style.cursor='pointer';
})
btn3.addEventListener("mouseout",function(){
    tc1.style.opacity='0';
    tc1.style.width='0px';
    this.style.backgroundColor='#be1414';
})

//全球糖尿病增长百分比
btn4.addEventListener("mouseover",function(){
    tc2.style.opacity='1';
    tc2.style.width='590px';
    this.style.backgroundColor='#140271';
    this.style.cursor='pointer';
})
btn4.addEventListener("mouseout",function(){
    tc2.style.opacity='0';
    tc2.style.width='0px';

    this.style.backgroundColor='#be1414';
})

//我国糖尿病分布规律
btn5.addEventListener("mouseover",function(){
    tc5.style.opacity='1';
    tc5.style.width='590px';

    this.style.backgroundColor='#140271';
    this.style.cursor='pointer';
})
btn5.addEventListener("mouseout",function(){
    tc5.style.opacity='0';
    tc5.style.width='0px';
    this.style.backgroundColor='#be1414';
})

//我国糖尿病预计增加
btn6.addEventListener("mouseover",function(){
    tc7.style.opacity='1';
    tc7.style.width='590px';
    this.style.backgroundColor='#140271';
    this.style.cursor='pointer';
})
btn6.addEventListener("mouseout",function(){
    tc7.style.opacity='0';
    tc7.style.width='0px';
    this.style.backgroundColor='#be1414';
})

//预防
btn7.addEventListener("mouseover",function(){
    tc3.style.opacity='1';
    tc3.style.width='590px';

    this.style.backgroundColor='#140271';
    this.style.cursor='pointer';
})
btn7.addEventListener("mouseout",function(){
    tc3.style.opacity='0';
    tc3.style.width='0px';
    this.style.backgroundColor='#be1414';
})


//获取数据
var xinjiang=document.getElementById("xinjiang");
var anhui=document.getElementById('anhui');
var beijing=document.getElementById("beijing");
var chongqing=document.getElementById("chongqing");
var fujian=document.getElementById('fujian')
var gansu=document.getElementById("gansu");
var guangdong=document.getElementById("guangdong");
var guangxi=document.getElementById('guangxi');
var hainan=document.getElementById("hainan");
var hebei=document.getElementById('hebei')
var henan=document.getElementById("henan");
var heilongjiang=document.getElementById("heilongjiang");
var hubei=document.getElementById("hubei");
var hunan=document.getElementById("hunan");
var jilin=document.getElementById("jilin");
var jiangsu=document.getElementById("jiangsu");
var jiangxi=document.getElementById("jiangxi");
var liaoning=document.getElementById("liaoning");
var neimenggu=document.getElementById('neimenggu');
var qinghai=document.getElementById("qinghai");
var shandong=document.getElementById("shandong");
var shanxi1=document.getElementById("shanxi1");
var shanxi3=document.getElementById("shanxi3");
var sichuan =document.getElementById("sichuan");
var taiwan=document.getElementById("taiwan");
var tianjin=document.getElementById("tianjin");
var xizang=document.getElementById("xizang");
var xinjiang=document.getElementById("xinjiang");
var yunnan=document.getElementById("yunnan");
var zhejiang=document.getElementById("zhejiang");
var shanghai=document.getElementById("shanghai");
var guizhou=document.getElementById("guizhou");
var ningxia=document.getElementById("ningxia");





setTimeout( function(){
    //填充颜色变化
    xinjiang.style.fill='#342684';
    anhui.style.fill='#6156a0';
    beijing.style.fill='#6156a0';
    chongqing.style.fill='#8e86bb';
    fujian.style.fill='#bbb6d6';
    gansu.style.fill='#bbb6d6';
    guangdong.style.fill='#d2cfe4';
    guangxi.style.fill='#d2cfe4';
    hainan.style.fill='#d2cfe4';
    hebei.style.fill='#1e0e77';
    henan.style.fill='#6156a0';
    heilongjiang.style.fill='#8e86bb';
    hubei.style.fill='#d2cfe4';
    hunan.style.fill='##bbb6d6';
    jilin.style.fill='#1e0e77';
    jiangsu.style.fill='#a59fc9';
    jiangxi.style.fill='#4b3e92';
    liaoning.style.fill='#6156a0';
    neimenggu.style.fill='#1e0e77';
    ningxia.style.fill='#342684';
    qinghai.style.fill='#4b3e92';
    shandong.style.fill='#342684';
    shanxi1.style,fill='#6156a0';
    shanxi3.style.fill='#786ead';
    sichuan.style.fill='#8e86bb';
    taiwan.style.fill='#fff';
    tianjin.style.fill='#dddbeb';
    xizang.style.fill='#fff';
    yunnan.style.fill='#8e86bb';
    zhejiang.style.fill='#dddbeb';
    shanghai.style.fill='#a59fc9';
    guizhou.style.fill='#a59fc9';
},1000);
setTimeout(function(){
     //边框变化
   xinjiang.style.stroke='#fff';
   anhui.style.stroke='#fff';
   beijing.style.stroke='#fff';
   chongqing.style.stroke='#fff';
   fujian.style.stroke='#fff';
   gansu.style.stroke='#fff';
   guangdong.style.stroke='#fff';
   guangxi.style.stroke='#fff';
   hainan.style.stroke='#fff';
   heilongjiang.style.stroke='#fff';
   hubei.style.stroke='#fff';
   hunan.style.stroke='#fff';
   jilin.style.stroke='#fff';
   jiangsu.style.stroke='#fff';
   jiangxi.style.stroke='#fff';
   liaoning.style.stroke='#fff';
   neimenggu.style.stroke='#fff';
   ningxia.style.stroke='#fff';
   qinghai.style.stroke='#fff';
   shandong.style.stroke='#fff';
   shanxi1.style.stroke='#fff';
   shanxi3.style.stroke='#fff';
   sichuan.style.stroke='#fff';
   taiwan.style.stroke='#fff';
   tianjin.style.stroke='#fff';
   xizang.style.stroke='#fff';
   yunnan.style.stroke='#fff';
   zhejiang.style.stroke='#fff';
   shanghai.style.stroke='#fff';
   guizhou.style.stroke='#fff';
   henan.style.stroke='#fff';
},2000)

//绑定事件
//新疆
xinjiang.addEventListener("mouseover",function(){
    this.style.fill='red';
})
xinjiang.addEventListener("mouseout",function(){
    this.style.fill='#342684';
})
//安徽
anhui.addEventListener("mouseover",function(){
    this.style.fill='red';
})
anhui.addEventListener("mouseout",function(){
    this.style.fill='#6156a0';
})
//北京
beijing.addEventListener("mouseover",function(){
    this.style.fill='red';
})
beijing.addEventListener("mouseout",function(){
    this.style.fill='#6156a0';
})
//重庆
chongqing.addEventListener("mouseover",function(){
    this.style.fill='red';
})
chongqing.addEventListener("mouseout",function(){
    this.style.fill='#8e86bb';
})
//福建
fujian.addEventListener("mouseover",function(){
    this.style.fill='red';
})
fujian.addEventListener("mouseout",function(){
    this.style.fill='#bbb6d6';
})
//甘肃
gansu.addEventListener("mouseover",function(){
    this.style.fill='red';
})
gansu.addEventListener("mouseout",function(){
    this.style.fill='#786ead';
})
//广东
guangdong.addEventListener("mouseover",function(){
    this.style.fill='red';
})
guangdong.addEventListener("mouseout",function(){
    this.style.fill='#d2cfe4';
})
//广西
guangxi.addEventListener("mouseover",function(){
    this.style.fill='red';
})
guangxi.addEventListener("mouseout",function(){
    this.style.fill='#d2cfe4';
})
//海南
hainan.addEventListener("mouseover",function(){
    this.style.fill='red';
})
hainan.addEventListener("mouseout",function(){
    this.style.fill='#d2cfe4';
})
//河北
hebei.addEventListener("mouseover",function(){
    this.style.fill='red';
})
hebei.addEventListener("mouseout",function(){
    this.style.fill='#1e0e77';
})
//河南
henan.addEventListener("mouseover",function(){
    this.style.fill='red';
})
henan.addEventListener("mouseout",function(){
    this.style.fill='#6156a0';
})
//黑龙江
heilongjiang.addEventListener("mouseover",function(){
    this.style.fill='red';
})
heilongjiang.addEventListener("mouseout",function(){
    this.style.fill='#8e86bb';
})
//湖北
hubei.addEventListener("mouseover",function(){
    this.style.fill='red';
})
hubei.addEventListener("mouseout",function(){
    this.style.fill='#d2cfe4';
})
//湖南
hunan.addEventListener("mouseover",function(){
    this.style.fill='red';
})
hunan.addEventListener("mouseout",function(){
    this.style.fill='#bbb6d6';
})
//吉林
jilin.addEventListener("mouseover",function(){
    this.style.fill='red';
})
jilin.addEventListener("mouseout",function(){
    this.style.fill='#1e0e77';
})
//江苏
jiangsu.addEventListener("mouseover",function(){
    this.style.fill='red';
})
jiangsu.addEventListener("mouseout",function(){
    this.style.fill='#a59fc9';
})
//江西
jiangxi.addEventListener("mouseover",function(){
    this.style.fill='red';
})
jiangxi.addEventListener("mouseout",function(){
    this.style.fill='#4b3e92';
})
//辽宁
liaoning.addEventListener("mouseover",function(){
    this.style.fill='red';
})
liaoning.addEventListener("mouseout",function(){
    this.style.fill='#6156a0';
})
//内蒙古
neimenggu.addEventListener("mouseover",function(){
    this.style.fill='red';
})
neimenggu.addEventListener("mouseout",function(){
    this.style.fill='#1e0e77';
})
//宁夏
ningxia.addEventListener("mouseover",function(){
    this.style.fill='red';
})
ningxia.addEventListener("mouseout",function(){
    this.style.fill='#342684';
})
//青海
qinghai.addEventListener("mouseover",function(){
    this.style.fill='red';
})
qinghai.addEventListener("mouseout",function(){
    this.style.fill='#4b3e92';
})
//山东
shandong.addEventListener("mouseover",function(){
    this.style.fill='red';
})
shandong.addEventListener("mouseout",function(){
    this.style.fill='#342684';
})
//山西
shanxi1.addEventListener("mouseover",function(){
    this.style.fill='red';
})
shanxi1.addEventListener("mouseout",function(){
    this.style.fill='#6156a0';
})
//陕西
shanxi3.addEventListener("mouseover",function(){
    this.style.fill='red';
})
shanxi3.addEventListener("mouseout",function(){
    this.style.fill='#786ead';
})
//四川
sichuan.addEventListener("mouseover",function(){
    this.style.fill='red';
})
sichuan.addEventListener("mouseout",function(){
    this.style.fill='#8e86bb';
})
//台湾
taiwan.addEventListener("mouseover",function(){
    this.style.fill='red';
})
taiwan.addEventListener("mouseout",function(){
    this.style.fill='#fff';
})
//天津
tianjin.addEventListener("mouseover",function(){
    this.style.fill='red';
})
tianjin.addEventListener("mouseout",function(){
    this.style.fill='#dddbeb';
})

//西藏
xizang.addEventListener("mouseover",function(){
    this.style.fill='red';
})
xizang.addEventListener("mouseout",function(){
    this.style.fill='#fff';
})
//新疆
xinjiang.addEventListener("mouseover",function(){
    this.style.fill='red';
})
xinjiang.addEventListener("mouseout",function(){
    this.style.fill='#342684';
})
//云南
yunnan.addEventListener("mouseover",function(){
    this.style.fill='red';
})
yunnan.addEventListener("mouseout",function(){
    this.style.fill='#8e86bb';
})
//浙江
zhejiang.addEventListener("mouseover",function(){
    this.style.fill='red';
})
zhejiang.addEventListener("mouseout",function(){
    this.style.fill='#dddbeb';
})
//上海
shanghai.addEventListener("mouseover",function(){
    this.style.fill='red';
})
shanghai.addEventListener("mouseout",function(){
    this.style.fill='#a59fc9';
})
//贵州
guizhou.addEventListener("mouseover",function(){
    this.style.fill='red';
})
guizhou.addEventListener("mouseout",function(){
    this.style.fill='#a59fc9';
})

//获取各个省份小弹窗元素
var box=document.getElementById('box');
var chongqingTc=document.getElementById('chongqingTc');
var xinjiangTc=document.getElementById('xinjiangTc');
var anhuiTc=document.getElementById('anhuiTc');
var beijingTc=document.getElementById('beijingTc');
var fujianTc=document.getElementById('fujianTc');
var gansuTc=document.getElementById('gansuTc');
var guangdongTc=document.getElementById('guangdongTc');
var guangxiTc=document.getElementById('guangxiTc');
var hainanTc=document.getElementById('hainanTc');
var heilongjiangTc=document.getElementById('heilongjiangTc');
var hubeiTc=document.getElementById('hubeiTc');
var hunanTc=document.getElementById('hunanTc');
var jilinTc=document.getElementById('jilinTc');
var jiangsuTc=document.getElementById('jiangsuTc');
var jiaingxiTc=document.getElementById('jiaingxiTc');
var liaoningTc=document.getElementById('liaoningTc');
var neimengguTc=document.getElementById('neimengguTc');
var ningxiaTc=document.getElementById('ningxiaTc');
var qinghaiTc=document.getElementById('qinghaiTc');
var shandongTc=document.getElementById('shandongTc');
var shanxi1Tc=document.getElementById('shanxi1Tc');
var shanxi3Tc=document.getElementById('shanxi3Tc');
var sichuanTc=document.getElementById('sichuanTc');
var taiwanTc=document.getElementById('taiwanTc');
var tianjinTc=document.getElementById('tianjinTc');
var xizangTc=document.getElementById('xizangTc');
var yunnanTc=document.getElementById('yunnanTc');
var zhejiangTc=document.getElementById('zhejiangTc');
var shanghaiTc=document.getElementById('shanghaiTc');
var guizhouTc=document.getElementById('guizhouTc');
var henanTc=document.getElementById('henanTc');
var hebeiTc=document.getElementById('hebeiTc')

// 调用xy坐标
        box.addEventListener('mousemove',function(e){
            var x=e.pageX-box.offsetLeft;
            var y=e.pageY-box.offsetTop-40;
            //重庆
            chongqing.addEventListener('mousemove',function(){
                chongqingTc.style.display='block';
                chongqingTc.style.left=x+'px';
                chongqingTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            chongqing.addEventListener('mouseout',function(){
                chongqingTc.style.display='none';
                chongqingTc.style.left=0;
                chongqingTc.style.top=0;
            })
            //新疆
            xinjiang.addEventListener('mousemove',function(){
                xinjiangTc.style.display='block';
                xinjiangTc.style.left=x+'px';
                xinjiangTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            xinjiang.addEventListener('mouseout',function(){
                xinjiangTc.style.display='none';
                xinjiangTc.style.left=0;
                xinjiangTc.style.top=0;
            })
            //安徽
            anhui.addEventListener('mousemove',function(){
                anhuiTc.style.display='block';
                anhuiTc.style.left=x+'px';
                anhuiTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            anhui.addEventListener('mouseout',function(){
                anhuiTc.style.display='none';
                anhuiTc.style.left=0;
                anhuiTc.style.top=0;
            })
            //河南
            henan.addEventListener('mousemove',function(){
                henanTc.style.display='block';
                henanTc.style.left=x+'px';
                henanTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            henan.addEventListener('mouseout',function(){
                henanTc.style.display='none';
                henanTc.style.left=0;
                henanTc.style.top=0;
            })
            //河北
            hebei.addEventListener('mousemove',function(){
                hebeiTc.style.display='block';
                hebeiTc.style.left=x+'px';
                hebeiTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            hebei.addEventListener('mouseout',function(){
                hebeiTc.style.display='none';
                hebeiTc.style.left=0;
                hebeiTc.style.top=0;
            })
            //北京
            beijing.addEventListener('mousemove',function(){
                beijingTc.style.display='block';
                beijingTc.style.left=x+'px';
                beijingTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            beijing.addEventListener('mouseout',function(){
                beijingTc.style.display='none';
                beijingTc.style.left=0;
                beijingTc.style.top=0;
            })
            //福建
            fujian.addEventListener('mousemove',function(){
                fujianTc.style.display='block';
                fujianTc.style.left=x+'px';
                fujianTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            fujian.addEventListener('mouseout',function(){
                fujianTc.style.display='none';
                fujianTc.style.left=0;
                fujianTc.style.top=0;
            })
            //甘肃
            gansu.addEventListener('mousemove',function(){
                gansuTc.style.display='block';
                gansuTc.style.left=x+'px';
                gansuTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            gansu.addEventListener('mouseout',function(){
                gansuTc.style.display='none';
                gansuTc.style.left=0;
                gansuTc.style.top=0;
            })
            //广东
            guangdong.addEventListener('mousemove',function(){
                guangdongTc.style.display='block';
                guangdongTc.style.left=x+'px';
                guangdongTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            guangdong.addEventListener('mouseout',function(){
                guangdongTc.style.display='none';
                guangdongTc.style.left=0;
                guangdongTc.style.top=0;
            })
            //广西
            guangxi.addEventListener('mousemove',function(){
                guangxiTc.style.display='block';
                guangxiTc.style.left=x+'px';
                guangxiTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            guangxi.addEventListener('mouseout',function(){
                guangxiTc.style.display='none';
                guangxiTc.style.left=0;
                guangxiTc.style.top=0;
            })
            //海南
            hainan.addEventListener('mousemove',function(){
                hainanTc.style.display='block';
                hainanTc.style.left=x+'px';
                hainanTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            hainan.addEventListener('mouseout',function(){
                hainanTc.style.display='none';
                hainanTc.style.left=0;
                hainanTc.style.top=0;
            })
            //黑龙江
            heilongjiang.addEventListener('mousemove',function(){
                heilongjiangTc.style.display='block';
                heilongjiangTc.style.left=x+'px';
                heilongjiangTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            heilongjiang.addEventListener('mouseout',function(){
                heilongjiangTc.style.display='none';
                heilongjiangTc.style.left=0;
                heilongjiangTc.style.top=0;
            })
            //湖北
            hubei.addEventListener('mousemove',function(){
                hubeiTc.style.display='block';
                hubeiTc.style.left=x+'px';
                hubeiTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            hubei.addEventListener('mouseout',function(){
                hubeiTc.style.display='none';
                hubeiTc.style.left=0;
                hubeiTc.style.top=0;
            })
            //湖南
            hunan.addEventListener('mousemove',function(){
                hunanTc.style.display='block';
                hunanTc.style.left=x+'px';
                hunanTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            hunan.addEventListener('mouseout',function(){
                hunanTc.style.display='none';
                hunanTc.style.left=0;
                hunanTc.style.top=0;
            })
            //吉林
            jilin.addEventListener('mousemove',function(){
                jilinTc.style.display='block';
                jilinTc.style.left=x+'px';
                jilinTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            jilin.addEventListener('mouseout',function(){
                jilinTc.style.display='none';
                jilinTc.style.left=0;
                jilinTc.style.top=0;
            })
            //江苏
            jiangsu.addEventListener('mousemove',function(){
                jiangsuTc.style.display='block';
                jiangsuTc.style.left=x+'px';
                jiangsuTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            jiangsu.addEventListener('mouseout',function(){
                jiangsuTc.style.display='none';
                jiangsuTc.style.left=0;
                jiangsuTc.style.top=0;
            })
            //江西
            jiangxi.addEventListener('mousemove',function(){
                jiangxiTc.style.display='block';
                jiangxiTc.style.left=x+'px';
                jiangxiTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            jiangxi.addEventListener('mouseout',function(){
                jiangxiTc.style.display='none';
                jiangxiTc.style.left=0;
                jiangxiTc.style.top=0;
            })
            //辽宁
            liaoning.addEventListener('mousemove',function(){
                liaoningTc.style.display='block';
                liaoningTc.style.left=x+'px';
                liaoningTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            liaoning.addEventListener('mouseout',function(){
                liaoningTc.style.display='none';
                liaoningTc.style.left=0;
                liaoningTc.style.top=0;
            })
            //内蒙古
            neimenggu.addEventListener('mousemove',function(){
                neimengguTc.style.display='block';
                neimengguTc.style.left=x+'px';
                neimengguTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            neimenggu.addEventListener('mouseout',function(){
                neimengguTc.style.display='none';
                neimengguTc.style.left=0;
                neimengguTc.style.top=0;
            })
            //宁夏
            ningxia.addEventListener('mousemove',function(){
                ningxiaTc.style.display='block';
                ningxiaTc.style.left=x+'px';
                ningxiaTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            ningxia.addEventListener('mouseout',function(){
                ningxiaTc.style.display='none';
                ningxiaTc.style.left=0;
                ningxiaTc.style.top=0;
            })
            //青海
            qinghai.addEventListener('mousemove',function(){
                qinghaiTc.style.display='block';
                qinghaiTc.style.left=x+'px';
                qinghaiTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            qinghai.addEventListener('mouseout',function(){
                qinghaiTc.style.display='none';
                qinghaiTc.style.left=0;
                qinghaiTc.style.top=0;
            })
            //山东
            shandong.addEventListener('mousemove',function(){
                shandongTc.style.display='block';
                shandongTc.style.left=x+'px';
                shandongTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            shandong.addEventListener('mouseout',function(){
            shandongTc.style.display='none';
                shandongTc.style.left=0;
                shandongTc.style.top=0;
            })
            //山西
            shanxi1.addEventListener('mousemove',function(){
                shanxi1Tc.style.display='block';
                shanxi1Tc.style.left=x+'px';
                shanxi1Tc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            shanxi1.addEventListener('mouseout',function(){
            shanxi1Tc.style.display='none';
                shanxi1Tc.style.left=0;
                shanxi1Tc.style.top=0;
            })
            //陕西
            shanxi3.addEventListener('mousemove',function(){
                shanxi3Tc.style.display='block';
                shanxi3Tc.style.left=x+'px';
                shanxi3Tc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            shanxi3.addEventListener('mouseout',function(){
            shanxi3Tc.style.display='none';
                shanxi3Tc.style.left=0;
                shanxi3Tc.style.top=0;
            })
            //台湾
            taiwan.addEventListener('mousemove',function(){
                taiwanTc.style.display='block';
                taiwanTc.style.left=x+'px';
                taiwanTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            taiwan.addEventListener('mouseout',function(){
            taiwanTc.style.display='none';
                taiwanTc.style.left=0;
                taiwanTc.style.top=0;
            })
            //四川
            sichuan.addEventListener('mousemove',function(){
                sichuanTc.style.display='block';
                sichuanTc.style.left=x+'px';
                sichuanTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            sichuan.addEventListener('mouseout',function(){
            sichuanTc.style.display='none';
                sichuanTc.style.left=0;
                sichuanTc.style.top=0;
            })
            //天津
            tianjin.addEventListener('mousemove',function(){
                tianjinTc.style.display='block';
                tianjinTc.style.left=x+'px';
                tianjinTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            tianjin.addEventListener('mouseout',function(){
            tianjinTc.style.display='none';
                tianjinTc.style.left=0;
                tianjinTc.style.top=0;
            })
            //西藏
            xizang.addEventListener('mousemove',function(){
                xizangTc.style.display='block';
                xizangTc.style.left=x+'px';
                xizangTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            xizang.addEventListener('mouseout',function(){
            xizangTc.style.display='none';
                xizangTc.style.left=0;
                xizangTc.style.top=0;
            })
            //云南
            yunnan.addEventListener('mousemove',function(){
                yunnanTc.style.display='block';
                yunnanTc.style.left=x+'px';
                yunnanTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            yunnan.addEventListener('mouseout',function(){
            yunnanTc.style.display='none';
                yunnanTc.style.left=0;
                yunnanTc.style.top=0;
            })
            //浙江
            zhejiang.addEventListener('mousemove',function(){
                zhejiangTc.style.display='block';
                zhejiangTc.style.left=x+'px';
                zhejiangTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            zhejiang.addEventListener('mouseout',function(){
                zhejiangTc.style.display='none';
                zhejiangTc.style.left=0;
                zhejiangTc.style.top=0;
            })
            //上海
            shanghai.addEventListener('mousemove',function(){
                shanghaiTc.style.display='block';
                shanghaiTc.style.left=x+'px';
                shanghaiTc.style.top=y+'px';
            })
            shanghai.addEventListener('mouseout',function(){
                shanghaiTc.style.display='none';
                shanghaiTc.style.left=0;
                shanghaiTc.style.top=0;
                
                this.style.cursor='pointer';
            })
             //惠州
             guizhou.addEventListener('mousemove',function(){
                guizhouTc.style.display='block';
                guizhouTc.style.left=x+'px';
                guizhouTc.style.top=y+'px';
                this.style.cursor='pointer';
            })
            guizhou.addEventListener('mouseout',function(){
                guizhouTc.style.display='none';
                guizhouTc.style.left=0;
                guizhouTc.style.top=0;
            })
            
        })
 
        //副标题触发动效
        var fbt=document.getElementById('fbt')
        fbt.addEventListener('mousemove',function(){
            this.style.backgroundColor='#be1414';
        })
        fbt.addEventListener('mouseout',function(){
            this.style.backgroundColor='rgb(17, 0, 114)';
        })

        // 数据来源动效
        var sjly=document.getElementById('sjly')
        sjly.addEventListener('mousemove',function(){
            this.style.backgroundColor='rgb(17, 0, 114)';
        })
        sjly.addEventListener('mouseout',function(){
            this.style.backgroundColor='#be1414';
        })

        function f(){
            var tnbr=document.getElementById('tnbr');
            var tnbtime=document.getElementById('tnbtime');
            tnbtime.style.width='100px';
            tnbtime.style.backgroundColor='rgb(17, 0, 114)';
            tnbr.style.backgroundColor='rgb(17, 0, 114)';
            tnbr.style.cursor='pointer';
          }
          setTimeout(f,1000);
          function e(){
            var tnbr=document.getElementById('tnbr');
            var tnbtime=document.getElementById('tnbtime');
            tnbtime.style.width='0px';
            tnbtime.style.backgroundColor='#be1414';
            tnbr.style.backgroundColor='#be1414';
          }
          setTimeout(e,5000);


          //世界糖尿病日的交互
        var tnbr=document.getElementById('tnbr');
        var tnbtime=document.getElementById('tnbtime');
        tnbr.addEventListener('mousemove',function(){
            tnbtime.style.width='100px';
            tnbtime.style.backgroundColor='rgb(17, 0, 114)';
            this.style.backgroundColor='rgb(17, 0, 114)';
            this.style.cursor='pointer';
        })
        tnbr.addEventListener('mouseout',function(){
            tnbtime.style.width='0px';
            tnbtime.style.backgroundColor='#be1414';
            this.style.backgroundColor='#be1414';
        })