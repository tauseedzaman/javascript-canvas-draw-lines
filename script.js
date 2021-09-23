alert("Your Browser Has Been Hacked! :) ");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF00FF";

function line(x, y){
		ctx.moveTo((Math.round(Math.random()*1000)),(Math.round(Math.random()*1000)));
		ctx.lineTo(x*(Math.round(Math.random()*10)),y*(Math.round(Math.random()*10)));
		ctx.stroke();
}

for (var i = 0; i < 5000; i++) {
		setTimeout(()=>{
		x = Math.round(Math.random()*1000); 
		y = Math.round(Math.random()*1000);
		line(x,y)
	},10)

}