var canvas = document.getElementById("c")
var h = window.innerHeight
var w = window.innerWidth
canvas.width = w ;
canvas.height = h ;
var ctx = canvas.getContext("2d");
var circleCont = [];
var maxCircle = 500;
for(var i=0; i< maxCircle; i++)
{
    var circle = 
        {
            x:(Math.random()*w),
            y:Math.random()*h,
            r:Math.random()*7
            
        }
    circleCont.push(circle)
}

function drawCircle()
{
    ctx.clearRect(0,0,w,h)
    ctx.beginPath();
    for(var i=0; i< circleCont.length; i++)
{
    var c = circleCont[i];
    ctx.moveTo(c.x,c.y)
    ctx.arc(c.x,c.y,c.r,0,2*Math.PI)
}
    ctx.fillStyle="#000";
    ctx.fill();
    moveCircle();
}
function moveCircle()
{
    for(var i=0;i<circleCont.length;i++)
    {
        var c = circleCont[i];
        c.y +=1;
        c.x +=1;
        if(c.y>h){circleCont[i].y=-20;}
        if(c.x>w){circleCont[i].x=-20;}
    }
}

$("#options i").click(function(){
    
    $(".color-options").toggle();
})


var lis = $("#options ul li");
lis.eq(0).css("backgroundColor","teal")
lis.eq(1).css("backgroundColor","tan")
lis.eq(2).css("backgroundColor","orange")
lis.eq(3).css("backgroundColor","#09c")
lis.eq(4).css("backgroundColor","red")
lis.click(function(){
    var color = $(this).css("backgroundColor")
    $("canvas").css("backgroundColor",color)
})
setInterval(drawCircle,10)