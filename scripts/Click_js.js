var click = 1;
function increment(e) {
    var x = e.clientX - 240;
    var y = e.clientY - 160;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<50) {
        click++;
        redraw();
    }
}
var c=document.getElementById("canvas");
c.addEventListener("click", increment);
var ctx = c.getContext("2d");
function redraw() {
    ctx.clearRect(0,0, c.width, c.height);
    ctx.font="20px verdana ";
    ctx.fillText("хуи во рту" + click,190,20);
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.arc(c.width/2, c.height /2,50,0,2*3.14 );
    ctx.fill()
}
//  Наши объекты их координаты и размер
var obj1 = {
    x: 100,
    y: 300,
    w: 100,
    h: 100
};
var obj2 = {
    x: 500,
    y: 100,
    w: 100,
    h: 100
};
// функция, запускающая движение
    function initWorld(){
    var acc = 100;
    var acceleration = 0;
    var mTimer1 = setInterval(function() {
        if ((obj1.x  <=  obj2.x) && (obj1.y >= obj2.y)) { // проверка в какой области находится obj2 относительно obj1
            if (a / b > b / a) {
                obj1.x += a/b+acceleration; // собственно, вот оно наше передвижение
                obj1.y -= b/a+acceleration; // --
                if (acc < 500) { // подобие ускорения
                    acc += 50;
                    acceleration += 0.5;
                }
                if ((obj1.x+obj1.w > obj2.x)&&(obj1.y < obj2.y+obj2.h)) {   //простая проверка на столкновение
                    clearInterval(mTimer1); //остановка движения
                }
                else if((obj1.x-100>=800)||(obj1.y+100<=0)){ // проверка на вылет из рабочей области проекта
                    clearInterval(mTimer1);
                }
            }
            else {
                //
            }
        }
    }, 1000/acc)

};
        
