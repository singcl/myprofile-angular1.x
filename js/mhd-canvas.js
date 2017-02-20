
var canvas=document.getElementById("mhd-canvas");
	var context=canvas.getContext("2d");
	var maxWidth=canvas.width;
	var maxHeight=canvas.height;
	var colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"]

	//随机数
	function random(min,max){
		return Math.floor(Math.random()*(max-min)+min)
	}

	//构造函数
	function Ball(){
		this.a=true;
		this.b=true;
		this.r=random(10,30);
		this.ballColor={color: colors[Math.floor(Math.random() * colors.length)]}
		this.vx=random(30,maxWidth-30);
		this.vy=random(30,maxHeight-30);
		this.ispeed=random(1,10);
		this.ispeed2=random(1,10);
	}

	// 面向对象
	Ball.prototype.moveBall=function(){
		context.beginPath();
		if (this.a) {
			this.vx += this.ispeed;
			if (this.vx>=maxWidth-this.r) {	
				this.a = false;
			}

		} else {
			this.vx -= this.ispeed;
			if (this.vx <= this.r) {
				this.a = true;
			}
		}

		if (this.b) {
			this.vy+= this.ispeed2;
			if (this.vy >= maxHeight-this.r) {
				this.b = false;
			}

		} else {
			this.vy -= this.ispeed2;
			if (this.vy <= this.r) {
				this.b = true;
			}
		}

		context.fillStyle=this.ballColor.color;
		context.arc(this.vx,this.vy,this.r,0,Math.PI*2,false);
		context.fill();
	}

	var Aball=[];
	for(var i=0;i<100;i++){
		Aball[i]=new Ball();
	}

	setInterval(function(){
		context.clearRect(0,0,canvas.width,canvas.height)
		for(var i=0;i<100;i++){
			Aball[i].moveBall();
		}
		
	},30)