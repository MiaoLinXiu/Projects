window.onload = function () {
    function Magic() {//构造函数
      this.oUl = document.querySelector('#list').children[0];
      this.listNum = 125;
      this.aLi = this.oUl.children;
      this.aBtn = document.querySelectorAll("#btn ul li");
    }
    Magic.prototype = {//原型
        init:function () {//初始化
            for (i = 0; i < this.listNum;i++) {
                var oli = document.createElement('li');
                var d = data[0];
                // oli.innerHTML = "<b class='liCover'></b>"+
                //                 "<p class='liTitle'>"+d.title+"</p>"+
                //                 "<p class='liAuthor'>"+d.author+"</p>"+
                //                 "<p class='liTime'>"+d.time+"</p>";
                oli.innerHTML = d.content;
                var tx = Math.random() * 2000 - 1000;//随机产生起始位置
                var  ty = Math.random() * 2000 - 1000;
                var tz = Math.random() * 2000 - 1000;
                oli.style.transform =  "translate3D(" + tx + "px," + ty + "px," + tz + "px)";
                this.oUl.appendChild(oli);
            }
            setTimeout(function () {
               this.grid();
               //  this.helix();
            }.bind(this),200);//一定要绑定this对象，因为setTimeout是window对象
            this.clickEvent();
        },
        clickEvent:function(){//点击事件
            var arr = [this.grid,this.helix,this.sphere];//数组映射，通过下标去查找事件
            for (var i = 0; i < this.aBtn.length; i++){
                this.aBtn[i].onclick = arr[i].bind(this);//一定要绑定当前this对象
            }
        },
        //网格
        grid:function () {
            console.log(this.grid.arr);
            if(this.grid.arr){
                for (i = 0; i < this.listNum;i++) {
                    this.aLi[i].style.transform = this.grid.arr[i];
                }
            }else {
                this.grid.arr = [];
                var disX = 150;//每一个li x方向的间距
                var disY = 180;//每一个li y方向的间距
                var disZ = 400;//每一个li z方向的间距
                for (var i = 0; i < this.listNum; i++) {
                    this.aLix = Math.floor(i % 5);//x轴序列号 01234 01234 01234 ...
                    this.aLiy = Math.floor(i % 25 / 5); //y轴序列号  00000 11111 22222 .....
                    this.aLiz = 4 - Math.floor(i / 25);//z轴序号 4 3 2 1 0 从上至下
                    var x = disX * (this.aLix - 2),
                        y = disY * (this.aLiy - 2),
                        z = disZ * (this.aLiz - 2);
                    var val =  "translate3D(" + x + "px," + y + "px," + z + "px)";
                    this.grid.arr[i] = val;
                    this.aLi[i].style.transform = val;
                }
            }
        },
        //螺旋式布局
        helix:function(){
            if (this.helix.arr){
                for (i = 0; i < this.listNum;i++) {
                    this.aLi[i].style.transform = this.helix.arr[i];
                    console.log(this.helix.arr[i]);
                }
            }else
            {
                this.helix.arr = [];
                var h = 3.7,//环数
                    num = this.listNum / h,//每环个数
                    deg = 360 / num,//每一个li y轴旋转相差
                    ty = 3;//每一个相重合的li上下位移相差
                for (var i = 0; i < this.listNum; i++) {
                    var val = "rotateY(" + (i * deg) + "deg) translateY(" + (i * ty - 200) + "px) translateZ(300px)";
                    this.helix.arr[i] = val;
                    this.aLi[i].style.transform = val;
                }
            }

        }
    }
    // Magic.prototype.init = function () {//原型
    //     //初始化
    //     // this.grid();
    //    }
    //网格
    // function grid() {
    //
    // }

    var magic = new Magic();
    magic.init();

}
/*面向对象的组合模式
    构造函数： 是放你的公有属性
    原型：是放你的公共的属性

    在原型里面可以使用构造函数里面的私有属性
        */