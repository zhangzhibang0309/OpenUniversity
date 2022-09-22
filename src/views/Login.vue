<template>

	<div id="building">

		<div style="width: 100vw;height: 100vh;position: absolute;left: 0px;">
			

			  
			<div>
			  <nut-animate  type='breath' :loop='true'>
			  <n-gradient-text style="margin-left: 480px;margin-top: 10px;" :size="50" type="warning">
			    东软开放大学——前台
			  </n-gradient-text>
			   </nut-animate>
			   
			   </div>
			<div id="leftdiv">

			</div>

			<div id="middiv">
				<nut-animate type='ripple' :loop='true'>
					<n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)" style="margin-top: 100px;margin-left: 560px;">
						登录中心-学生端界面
					</n-gradient-text>
				</nut-animate>
				
				 
				
				<!-- 模态框 -->
				<el-dialog
				    v-model="dialogVisible"
				    title="被骗了吧"
				    width="30%"
				    :before-close="handleClose"
				  >
				    <span>哈哈，这个按钮能点但没用</span>
					<br>
					<br>
					<span>请问您要确定继续下去吧，接下来会有广告</span>
				    <template #footer>
				      <span class="dialog-footer">
						  <el-button size="large" type="success"  @click="visible = true"
						    >确定</el-button>
						  <el-button   size="small" type="danger" @click="dialogVisible = false">取消</el-button>
		
				      </span>
				    </template>
				  </el-dialog>
				  
				   <el-dialog v-model="visible" :show-close="false">
				      <template #header="{ close, titleId, titleClass }">
				        <div class="my-header">
				          <h4 :id="titleId" :class="titleClass">抽一抽试试吧，这一定会中奖的</h4>
				          <el-button type="danger" @click="submitForm()">
				            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
				            这才是登录
				          </el-button>
				        </div>
				      </template>
				      <nut-countup
				             v-model="dialogVisible"
				             ref="countupMachineDom"
				             type="machine"
				             :machine-num="machineNum"
				             :machine-prize-num="5"
				             :machine-prize-level="prizeLevel"
				             :custom-bg-img="bgImage"
				             :num-width="100"
				             :num-height="100"
				             :during="3000"
				             @scroll-end="scrollAniEnd"
				         >
				         </nut-countup>
				         <nut-button @click="startRole" :disabled="startFlag">抽奖</nut-button>
				    </el-dialog>

				<!-- 花里胡哨输入框 -->

				<nut-animate type='float' :loop='true'>
					<fc-typing-input style="margin-top: 60px;margin-left: 620px;height: 50px;" placeholder="UserName" white></fc-typing-input>
				</nut-animate>
				<nut-animate type='shake' :loop='true'>
					<fc-typing-input type="password" style="margin-top: 30px;;margin-left: 620px;height: 50px;" placeholder="PassWord" white></fc-typing-input>
				</nut-animate>
				  <nut-animate type='float' :loop='true'>
				  <nut-animate type='ripple' :loop='true'>
				  <nut-animate type='shake' :loop='true'>
				<nut-animate type='jump' :loop='true' >
					<fc-bubbles  Click  >
						<fc-3d-btn style="margin-top: 75px;margin-left: 650px;font-size: 18px;" >点不着的</fc-3d-btn>
					</fc-bubbles>
				</nut-animate>
				</nut-animate>
				</nut-animate>
				</nut-animate>

				<fc-warp-btn text-align="center" style="margin-top: 120px;margin-left: 1300px;color: black;font-size: 20px;" :plain="true"  @click="open3;dialogVisible = true"   black>点的着的</fc-warp-btn>

				
			</div>
			<div id="rigdiv">

			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
	
	import { useRouter } from 'vue-router'
	
	import { 
		ElMessage,
		ElMessageBox,
		ElButton, 
		ElDialog
	 } from 'element-plus'
	
	import { CircleCloseFilled } from '@element-plus/icons-vue'
	
	import {
		ref,
		defineComponent,
		onMounted,
		reactive,
		toRefs
	} from 'vue'


	// 花里胡哨输入框
	new FcTypingInput()
	import {
		FcBubbles,
		Fc3DBtn,
		FcTypingInput,
		FcWarpBtn
	} from 'fancy-components';
	new FcWarpBtn()
	new FcBubbles()
	new Fc3DBtn()

	/* eslint-disable no-new */
	new Fc3DBtn()
	
	
	 const dataList=reactive([
	        {
	          price:10
	        },
	        {
	          price:20
	        },
	        {
	          price:30
	        },
	        {
	          price:40
	        },
	      ])
	    const money = ref(0);
	    const inputChange = (val) => {
	      money.value = val;
	    };
	    const change = (item) => {
	      money.value = item.price;
	    };
	    const changeStep = (num,price) => {
	      const val = price * num;
	      money.value = val;
	    };
	
	const router = useRouter();
	
	const ruleFormRef = ref(null);
	
	function submitForm() {
	     router.push("/home")

	}
	
	const visible = ref(false)
	const dialogVisible = ref(false)
	
	const handleClose = (done: () => void) => {
	  ElMessageBox.confirm('Are you sure to close this dialog?')
	    .then(() => {
	      done()
	    })
	    .catch(() => {
	      // catch error
	    })
	}
	
	  const countupMachineDom = ref(null);
	        const startFlag = ref(false);
	        const machineNum = ref(3);
	        const bgImage = ref('https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png');
	        const prizeLevel = ref(0);
	        const startRole = () => {
	            prizeLevel.value = Math.floor(Math.random() * 5 + 1);
	            startFlag.value = true;
	            countupMachineDom.value.machineLuck();
	        };
	        const scrollAniEnd = () => {
	            console.log('恭喜中奖！！！');
	            setTimeout(() => {
	                startFlag.value = false;
	            }, 300);
	        }

	
	let showModal = ref(false);
	

</script>




<style scoped>
	
	
	.my-header {
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	}

	.dialog-footer button:first-child {
	  margin-right: 10px;
	}
	
	.el-button--text {
		margin-right: 15px;
	}

	.el-select {
		width: 300px;
	}

	.el-input {
		width: 300px;
	}

	.dialog-footer button:first-child {
		margin-right: 10px;
	}

	.demo-pagination-block+.demo-pagination-block {
		margin-top: 10px;
	}

	.demo-pagination-block .demonstration {
		margin-bottom: 16px;
	}

	.demo-pagination-block {
		position: absolute;
		left: 390px;
	}

	/* 花里胡哨输入框 */
	fc-typing-input {
		--color: black
	}

	svg {
		display: block
	}


	fc-3d-btn {
		--color: #6e50a6;
		--shadow-color: rgba(255, 255, 255, .4);
		--cover-color: rgba(0, 0, 0, .4);
		--inset-shadow-color: rgb(29, 4, 54);
		--inset-shadow-color-active: rgba(49, 23, 75, .9);
	}

	fc-bubbles {
		--color: #6195f9;
	}

	.n-gradient-text {
		font-size: 36px;
	}


	fc-warp-btn {
		--color: #40c6ff;
	}


	#building {
		background: url(../img/123123.jpg);
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0rem;
		background-size: 100% 100%;
	}
</style>
