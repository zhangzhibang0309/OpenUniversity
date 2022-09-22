<template>
	<div style="width: 100vw;height: 100vh;position: absolute;left: 0px; background-color: aquamarine;">
		<n-grid :cols="2">
			<n-gi span="1">
				<div class="box" @click="foo1">
					<img src="../img/login2.jpg">
					<div class="shadow-left"></div>
					
					
					<div class="logo">
						 <nut-animate type='jump' :loop='true'>
						<nut-animate type='breath' :loop='true'>
						<img class="aimg" src="../img/logo.png" alt="">
						<n-gradient-text
						    gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
						  >
						    东软开
						  </n-gradient-text>
						  	</nut-animate>
							</nut-animate>
					</div>
					
					
					<div class="dialog">
						 <nut-animate type='breath' :loop='true'>
						<p>—— 一个不正经的登录界面</p>
						</nut-animate>
					</div>
				
					
					<div class="student">
					  <nut-animate type='ripple' :loop='true'>
						    <nut-animate type='breath' :loop='true'>
							  <nut-animate type='twinkle' :loop='true'>
						  <nut-animate type='shake' :loop='true'>
							    <nut-animate type='float' :loop='true'>
						  <nut-animate type='jump' :loop='true'>
						<n-gradient-text
						    gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
						  >
						    学生端登录
							
						  </n-gradient-text>
							  </nut-animate>
							   
								</nut-animate>
								</nut-animate>
								</nut-animate>
								</nut-animate>
								</nut-animate>
								
					</div>
				</div>
			</n-gi>
			<n-gi span="1">
				<div class="box" @click="foo2">
					<img src="../img/login1.png">

					<div class="shadow-right">
					</div>
					
					<div class="college">
						<p>
						    放大学
						  </p>
					</div>
					
					<div class="text">
						<p>教师端登录</p>
					</div>
					
					<div class="dialog2">
						 <nut-animate type='breath' :loop='true'>
						<p>—— 一个正经的登录界面</p>
						</nut-animate>
					</div>
					
					
				</div>
			</n-gi>
		</n-grid>
	</div>


</template>

<script setup lang="ts">	
import { useRouter } from "vue-router";
const router = useRouter()

function foo1() {
	router.push('/login')
}
function foo2() {
	router.push('/loginmain')
}
</script>

<style scoped>
img {
	width: 100%;
}

.box {
	height: 100vh;
	overflow: hidden;
	position: relative;
}

.shadow-left {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	filter: blur(0);
	background-image: url("../img/login2.jpg");
	background-size:100% ;
	transition: filter 1s;
}

.shadow-left:hover {
	width: 100%;
	height: 100vh;
	border:10px rgb(108, 0, 231) solid;
	position: absolute;
	top: 0;
	left: 0;
	filter: blur(20px);
	background-image: url("../img/login2.jpg");
	background-size:100% ;
	transition: filter 1s;
}


.shadow-right {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	filter: blur(0);
	background-image: url("../img/login1.png");
	background-size:100% ;
	transition: filter 1s;
}

.shadow-right:hover {
	width: 100%;
	height: 100vh;
	border: 10px blue solid;
	position: absolute;
	top: 0;
	left: 0;
	filter: blur(20px);
	background-image: url("../img/login1.png");
	background-size:100% ;
	transition: filter 1s;
}

.text {
	width: 440px;
	height: 200px;
	position: absolute;
	z-index: 999;
	top: 38vh;
	left: 18vw;
	font-size: 	82px;
	margin-left: -80px;
	margin-top: 30px;
	font-family: STXinwei;
	background-image: -webkit-linear-gradient(left, green, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, red 100%);
	text-fill-color: transparent;
	background-clip: text;
	background-size: 200% 100%;
	animation: masked-animation 4s linear infinite;
}

.dialog{
	width: 400px;
	height: 200px;
	position: absolute;
	z-index: 999;
	top: 55vh;
	left: 25vw;
	font-size: 	30px;
	color: mediumblue;
	margin-left: -80px;
	margin-top: 30px;
	font-family: STXinwei;
}


.dialog2{
	width: 400px;
	height: 200px;
	position: absolute;
	z-index: 999;
	top: 55vh;
	left: 27vw;
	font-size: 	30px;
	color: chartreuse;
	margin-left: -80px;
	margin-top: 30px;
	font-family: STXinwei;
}

.student{
	width: 400px;
	height: 200px;
	position: absolute;
	z-index: 999;
	top: 35vh;
	left: 18vw;
	font-size: 	80px;
	margin-left: -80px;
	margin-top: 30px;
	background-image: -webkit-linear-gradient(left, green, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, red 100%);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-background-size: 200% 100%;
	-webkit-animation: masked-animation 4s linear infinite;
}

.college{
	width: 400px;
	height: 200px;
	position: absolute;
	z-index: 999;
	top: 1.6vh;
	left: 1vw;
	font-size: 	83px;
	margin-left: 0px;
	margin-top: 0px;
	font-family: STXinwei;
	background-image: -webkit-linear-gradient(left, green, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, red 100%);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-background-size: 200% 100%;
	-webkit-animation: masked-animation 4s linear infinite;
}


.logo{
		width: 400px;
		height: 200px;
		position: absolute;
		z-index: 999;
		top: 1vh;
		left: 38vw;
		font-size: 	80px;
		margin-left: -80px;
		margin-top: 0px;
	}
	
.aimg{
	width: 250px;
	position: absolute;
	z-index: 999;
	margin-left: -250px;
	margin-top: 60px;
}


@keyframes masked-animation {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
}

.n-gradient-text {
  font-size: 80px;
  font-family: STXinwei;
}
</style>