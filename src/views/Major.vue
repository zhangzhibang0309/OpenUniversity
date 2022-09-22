<template>

	  <div class="stars">
	 
	        <div @click="index" v-for="(item,index) in statrsCount" :key="index" ref="star" class="star"/>
	 
	 	</div>


	
    <nut-animate type='float' :loop='true'>
		  <fc-bubbles Click @click="handleClick" :active="isActive">
	<n-switch v-model:value="show" style="margin-left: 20px;margin-top: 0px;">
		<template #checked>
			一键隐私
		</template>
		<template #unchecked>
			专业查看
		</template>
	</n-switch>
	  </fc-bubbles>
	  </nut-animate>
	 <nut-animate type='ripple' :loop='true'>
	 <n-gradient-text
	    gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
		style="margin-top: 2px;margin-left: 20px;"
	  >
	    :如果临时离开可以把隐私开关打开
	  </n-gradient-text>
	   </nut-animate>
	  <n-time class="time" style="margin-left: 750px;" time-zone="Asia/Shanghai" />
	<n-collapse-transition :show="show">
		<n-watermark content="xxx同学的专业" cross selectable :font-size="20" :line-height="12" :width="190" :height="128"
		 :x-offset="10" :y-offset="28" :rotate="-10">
			<div class="common-layout">
				<el-container>
					<el-header>
						<el-page-header :icon="ArrowLeft">
							<template #content>
								<span class="text-large font-600 mr-3"> 专业管理</span>

							</template>
							<template #extra>
								<div class="flex items-center">

									<!-- 增加按钮 -->
									 <nut-animate  @click="dialogFormVisible = true" type='breath' :loop='true'>
										  <fc-bubbles Click @click="handleClick" :active="isActive">
									<fc-arrow-btn right type="primary" class="ml-2" @click="dialogFormVisible = true" style="margin-right: 10px;">增加
									</fc-arrow-btn>
										  </fc-bubbles>
									</nut-animate>


									<!-- 增加代码的弹出框 -->
									<el-dialog v-model="dialogFormVisible" title="添加专业">
										<el-form :model="form">
											<el-form-item label="专业代码" :label-width="formLabelWidth">
												<el-input v-model="form.name" autocomplete="off" />
											</el-form-item>
											<el-form-item label="专业名称" :label-width="formLabelWidth">
												<el-input v-model="form.region" autocomplete="off" />
											</el-form-item>
											<el-form-item label="毕业层次" :label-width="formLabelWidth">
												<el-select v-model="form.data1" placeholder="请选择您的毕业层次">
													<el-option label="本科" value="本科" />
													<el-option label="专科" value="专科" />
													<el-option label="高起本" value="高起本" />
													<el-option label="专升本" value="专升本" />
												</el-select>
											</el-form-item>
											<el-form-item label="其他备注" :label-width="formLabelWidth">
												<el-input v-model="form.data2" autocomplete="off" />
											</el-form-item>
										</el-form>
										<template #footer>
											<span class="dialog-footer">
												<el-button @click="dialogFormVisible = false">Cancel</el-button>
												<el-button type="primary" @click="add()">Confirm</el-button>
											</span>
										</template>
									</el-dialog>
								</div>
							</template>
						</el-page-header>
					</el-header>
					<el-main>

						<span style="margin-left: 5px;">专业代码</span>

						<el-input v-model="searchCode" class="w-50 m-2" placeholder="专业代码" :suffix-icon="Search" style="width: 210px; margin-left: 15px;" />
						<n-button size="small" @click="foo" style="margin-left: 5px;">
							<span class="search_text">
								查询
							</span>
						</n-button>
						<n-button size="small" @click="fooReset" style="margin-left: 5px;">
							<span class="search_text">
								重置
							</span>
						</n-button>


						<span style="margin-left: 65px;">专业名称</span>

						<el-input v-model="searchCode1" class="w-50 m-2" placeholder="专业名称" :suffix-icon="Search" style="width: 210px; margin-left: 15px;" />
						<n-button size="small" @click="foo1" style="margin-left: 5px;">
							<span class="search_text">
								查询
							</span>
						</n-button>
						<n-button size="small" @click="fooReset1" style="margin-left: 5px;">
							<span class="search_text">
								重置
							</span>
						</n-button>


						<!-- 选择器筛选 -->
						<span style="margin-left: 65px;">层次</span>
						<el-select v-model="search_lay.data1" class="m-2" placeholder="层次" style="margin-left: 15px;">
							<el-option label="本科" value="本科" />
							<el-option label="专科" value="专科" />
							<el-option label="高起本" value="高起本" />
							<el-option label="专升本" value="专升本" />
							<el-option label="研究生" value="研究生" />
						</el-select>


						<n-button size="small" @click="foo2" style="margin-left: 8px;" type="info" ghost>
							筛选
						</n-button>
						<n-button size="small" @click="fooReset2" style="margin-left: 8px;" type="error" ghost>
							重置
						</n-button>

						<br>
						<el-button @click="resetDateFilter" style="margin-top: 20px;">重置数据筛选</el-button>
						<el-button @click="clearFilter" style="margin-top: 20px;">重置所有筛选</el-button>

						<!-- 表格 -->
						<el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100% background:grey"
						 highlight-current-row="true">
							<el-table-column prop="date" label="专业代码" sortable width="240" column-key="date" :filters="[
					  { text: '982875', value: '982875' },
					  { text: 'C00001', value: 'C00001' },
					  { text: 'S00001', value: 'S00001' },
					  { text: 'zhm000', value: 'zhm000' },
					]"
							 :filter-method="filterHandler" />
							<el-table-column type="index" align="center" fixed prop="date" label="Index" width="120" />
							<el-table-column prop="name" label="专业名称" width="240" />
							<el-table-column prop="address" label="层次" :formatter="formatter" width="240" />

							<el-table-column prop="tag" label="备注" width="450" :filters="[
					  { text: 'level1', value: 'level1' },
					  { text: 'level2', value: 'level2' },
					  { text: 'level3', value: 'level3' },
					  { text: 'level4', value: 'level4' },
					]"
							 :filter-method="filterTag" filter-placement="bottom-end">
								<template #default="scope">
									<el-tag :type="scope.row.tag === 'level1' ? '' : 'success'" disable-transitions>{{ scope.row.tag }}
									</el-tag>

									<el-button type="success" round @click="email" style="margin-left: 34px;">添加邮箱</el-button>
									<el-button type="success" round @click="editOpen(scope.$index)" style="margin-left: 34px;">编辑</el-button>

									<!-- 编辑窗口 -->
									<el-dialog v-model="change" title="编辑专业">
										<el-form :model="changeform">
											<el-form-item label="专业代码" :label-width="formLabelWidth">
												<el-input v-model="changeform.name" autocomplete="off" />
											</el-form-item>
											<el-form-item label="专业名称" :label-width="formLabelWidth">
												<el-input v-model="changeform.region" autocomplete="off" />
											</el-form-item>
											<el-form-item label="毕业层次" :label-width="formLabelWidth">
												<el-select v-model="changeform.data1" placeholder="请选择您的毕业层次">
													<el-option label="本科" value="本科" />
													<el-option label="专科" value="专科" />
													<el-option label="研究生" value="研究生" />
													<el-option label="高起本" value="高起本" />
												</el-select>
											</el-form-item>
											<el-form-item label="其他备注" :label-width="formLabelWidth">
												<el-input v-model="changeform.data2" autocomplete="off" />
											</el-form-item>
										</el-form>
										<template #footer>
											<span class="dialog-footer">
												<el-button @click="change = false;">Cancel</el-button>
												<el-button type="primary" @click="editHandle()">Confirm</el-button>
											</span>
										</template>
									</el-dialog>

									<!-- 删除对话框 -->
									<el-button type="warning" round @click="open(scope.$index)" style="margin-left: 34px; color:black; background-color: orangered; text-shadow: #000000; text-decoration: line-through;
							text-emphasis: #000000;">删除</el-button>
								</template>

							</el-table-column>
						</el-table>

					</el-main>
					<el-footer style="width: 800px;margin: auto;margin-top: 20px;">
						<n-config-provider :theme="darkTheme">
							<n-upload v-model:value="value" :options="options" :theme-overrides="selectThemeOverrides" multiple
							 directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
								<n-upload-dragger>
									<div style="margin-bottom: 8px; color: #000000;">
										<n-icon size="20" :depth="3">
											<archive-icon />
										</n-icon>
									</div>
									<n-text style="font-size: 20px">
										专业信息批量上传
									</n-text>
									<n-p depth="3" style="margin: 8px 0 0 0">
										点击或者拖动专业文件到此来进行专业的批量上传
									</n-p>
								</n-upload-dragger>
							</n-upload>
							<n-upload style="margin: auto; margin-left: 330px;" action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
							 :headers="{
						  'naive-info': 'hello!'
						}" :data="{
						  'naive-data': 'cool! naive!'
						}">
								<n-button style="margin: auto;margin-top: 10px;">上传文件</n-button>
							</n-upload>
							<div class="demo-pagination-block">
								<div class="demonstration"></div>
								<el-pagination style="width: 600px; margin-left: 98px;margin-top: 20px;" v-model:currentPage="currentPage4"
								 v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled"
								 :background="background" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
								 @current-change="handleCurrentChange" />
								 
							</div>
							
						</n-config-provider>
					</el-footer>
				</el-container>
			</div>

		</n-watermark>

	</n-collapse-transition>
	

</template>




<script setup lang="ts">
	import {
		SelectProps,
		ButtonProps,
		darkTheme,
	} from 'naive-ui'
	import {
		reactive,
		ref,
		defineComponent,
		computed
	} from 'vue'
	

	import { FcArrowBtn } from 'fancy-components'
	import { FcWarpBtn } from 'fancy-components'
	/* eslint-disable no-new */
	new FcArrowBtn()
	new FcWarpBtn()
	import { Fc3DBtn } from 'fancy-components'
	
	/* eslint-disable no-new */
	new Fc3DBtn()

	import { FcBubbles } from 'fancy-components';
	
	/* eslint-disable no-new */
	new FcBubbles()
	new Fc3DBtn()
	

	const isActive = ref(false)
	const handleClick = () => isActive.value = true

	
	const isLike = ref(false)
	
	
	
	const currentPage1 = ref(5)
	const currentPage2 = ref(5)
	const currentPage3 = ref(5)
	const currentPage4 = ref(4)
	const pageSize2 = ref(100)
	const pageSize3 = ref(100)
	const pageSize4 = ref(100)
	const small = ref(false)
	const background = ref(false)
	const disabled = ref(false)

	const handleSizeChange = (val: number) => {
		console.log(`${val} items per page`)
	}
	const handleCurrentChange = (val: number) => {
		console.log(`current page: ${val}`)
	}


	



	let show = ref(true)
	let time = new Date(0)

	const input1 = ref('')
	const input2 = ref('')
	const input3 = ref('')

	 let statrsCount = 1800//星星数量
	 let distance = 1000//间距
	computed(() => {
		let _this = this
		let starArr = _this.$refs.star
		console.log(starArr)
		starArr.forEach(item =>{
		    var speed = 0.2 + (Math.random() * 1);
		    var thisDistance = _this.distance + (Math.random() * 300);
		    item.style.transformOrigin = `0 0 ${thisDistance}px`;
		    item.style.transform=`translate3d(0,0,-${thisDistance}px)
		    rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
		})
	})


	let tmp;

	// 添加功能
	function add() {
		tableData.value.push({
			name: form.value.region,
			date: form.value.name,

			address: form.value.data1,
			tag: form.value.data2

		})
		tableData.value.splice(index, 0, 1)
		dialogFormVisible.value = false;

	}

	//删除模块
	function fooDele(index) {
		tableData.value.splice(index, 1)
	}


	//编辑模块
	let indexEdit: number;

	function editOpen(index) {
		change.value = true;
		indexEdit = index
	}

	const handleEdit = (index, row) => {
		console.log(index, row);
	};

	function editHandle() {
		console.log(changeform.value)
		tableData.value[indexEdit].name = changeform.value.region
		tableData.value[indexEdit].date = changeform.value.name
		tableData.value[indexEdit].address = changeform.value.data1
		tableData.value[indexEdit].tag = changeform.value.data2
		change.value = false;
	}

	const dialogTableVisible = ref(false)
	const dialogFormVisible = ref(false)
	const formLabelWidth = '140px'

	// 删除弹框
	const open = (index) => {
		ElMessageBox.confirm(
				'此操作将会删除该专业，请问是否继续?',
				'提示', {
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancel',
					type: 'warning',
				}
			)
			.then(function() {
				ElMessage({
					type: 'success',
					message: 'Delete completed',
				})
				fooDele(index)
			})
			.catch(() => {
				ElMessage({
					type: 'info',
					message: 'Delete canceled',
				})
			})
	}

	const change = ref(false)
	const changeform = ref({
		name: '',
		region: '',
		data1: '',
		data2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: '',
	})

	const search_lay = ref({
		name: '',
		region: '',
		data1: '',
		data2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: '',
	})

	const form = ref({
		name: '',
		region: '',
		data1: '',
		data2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: '',
	})

	const gridData = [{
			date: '2016-05-02',
			name: 'John Smith',
			address: 'No.1518,  Jinshajiang Road, Putuo District',
		},
		{
			date: '2016-05-04',
			name: 'John Smith',
			address: 'No.1518,  Jinshajiang Road, Putuo District',
		},
		{
			date: '2016-05-01',
			name: 'John Smith',
			address: 'No.1518,  Jinshajiang Road, Putuo District',
		},
		{
			date: '2016-05-03',
			name: 'John Smith',
			address: 'No.1518,  Jinshajiang Road, Putuo District',
		},
	]
	import {
		Check,
		Delete,
		Edit,
		Message,
		Search,
		Star,
	} from '@element-plus/icons-vue'

	import {
		ElTable
	} from 'element-plus'
	import type {
		TableColumnCtx
	} from 'element-plus/es/components/table/src/table-column/defaults'

	import {
		ElMessage,
		ElMessageBox
	} from 'element-plus'


	interface User {
		date: string
		name: string
		address: string
		tag: string
	}

	const tableRef = ref < InstanceType < typeof ElTable >> ()

	const resetDateFilter = () => {
		tableRef.value!.clearFilter(['date'])
	}
	// TODO: improvement typing when refactor table
	const clearFilter = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		tableRef.value!.clearFilter()
	}
	const formatter = (row: User, column: TableColumnCtx < User > ) => {
		return row.address
	}
	const filterTag = (value: string, row: User) => {
		return row.tag === value
	}
	const filterHandler = (
		value: string,
		row: User,
		column: TableColumnCtx < User >
	) => {
		const property = column['property']
		return row[property] === value
	}


	// 表格数组
	const tableData = ref([{
			date: '982875',
			name: '测试专业',
			address: '本科',
			tag: '此专业无备注',
		},
		{
			date: 'C00001',
			name: '英语专业',
			address: '研究生',
			tag: '研究生的专业',
		},
		{
			date: 'S00001',
			name: '计算机专业',
			address: '专科',
			tag: '专科的专业',
		},
		{
			date: 'zhm000',
			name: '测试',
			address: '小学',
			tag: '小学的专业',
		},
	])

	const email = () => {
		ElMessageBox.prompt('请添加个人邮箱', '提示', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
				inputErrorMessage: 'Invalid Email',
			})
			.then(({
				value
			}) => {
				ElMessage({
					type: 'success',
					message: `Your email is:${value}`,
				})
			})
			.catch(() => {
				ElMessage({
					type: 'info',
					message: 'Input canceled',
				})
			})
	}

	// 新建
	let arrTemp;
	let searchCode = ref("");
	const foo = () => {
		for (let i = 0; i < tableData.value.length; i++) {
			if (tableData.value[i].date === searchCode.value) {
				arrTemp = tableData.value;
				tableData.value = [tableData.value[i]]
			}
		}
	}
	const fooReset = () => {
		tableData.value = arrTemp;
	}

	// 修改
	let arrTemp1;
	let searchCode1 = ref("");
	const foo1 = () => {
		for (let j = 0; j < tableData.value.length; j++) {
			if (tableData.value[j].name === searchCode1.value) {
				arrTemp1 = tableData.value;
				tableData.value = [tableData.value[j]]
			}
		}
	}
	const fooReset1 = () => {
		tableData.value = arrTemp1;
	}

	let arrTemp2;
	const foo2 = () => {
		for (let k = 0; k < tableData.value.length; k++) {
			if (tableData.value[k].address === search_lay.value.data1) {
				arrTemp2 = tableData.value;
				tableData.value = [tableData.value[k]]
			}
		}
	}
	const fooReset2 = () => {
		tableData.value = arrTemp2;
	}
	
	
	
</script>

<style scoped>
	.demo-pagination-block+.demo-pagination-block {
		margin-top: 10px;
	}

	.search_text {
		color: white !important;
	}

	.demo-pagination-block .demonstration {
		margin-bottom: 16px;
	}



	.el-row {
		margin-bottom: 20px;
	}

	.el-row:last-child {
		margin-bottom: 0;
	}

	.el-col {
		border-radius: 4px;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.n-gradient-text {
	  font-size: 17px;
	}
	
	.time{
		font-size: 15px;
		color: #BAEEBA;
	}
	
	body {
	  background: #3f2766
	}
	
	fc-typing-input {
	  --placeholder-color: #fff8;
	  --placeholder-shadow: none;
	}
	
	fc-warp-btn {
	  --width: 160px
	}
	
	fc-bubbles { --color: #ff3874 }
	svg { display: block }
	fc-bubbles {
	  --color: #6195f9;
	}
	
	 @keyframes rotate {
	        0%{
	            transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
	        }
	        100%{
	            transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
	        }
	    }
	    .stars{
	        transform: perspective(500px);
	        transform-style: preserve-3d;
	        position: absolute;
	        perspective-origin: 50% 100%;
	        left:50%;
	        animation: rotate 90s infinite linear ;
	        bottom: 0;
	    }
	    .star{
	        width: 2px;
	        height: 2px;
	        background: #f7f7b8;
	        position: absolute;
	        top: 0;
	        left: 0;
	        backface-visibility: hidden;
	    }
	    
		.wallpaper{
	        background: radial-gradient(200% 100% at bottom center,#f7f7b6,#e96f92,#1b2947);
	        background: radial-gradient(220% 105% at top center,#1b2947 10%,#75517d 40%,#e96f92 65%,#f7f7b6);
	        background-attachment: fixed;
	        overflow: hidden;
	        height: 100%;
	        margin: 0px;
	        padding: 30px;
	    }
	
</style>
