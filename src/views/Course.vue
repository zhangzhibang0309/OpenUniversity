<template>
	<!-- header -->
	<img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/header_.png" alt="">
	<!--  -->
	<el-page-header :icon="ArrowLeft">
		<template #content>
			<span class="text-large font-600 mr-3"> 课程管理分类 </span>
		</template>
		<template #extra>
			<div class="flex items-center">
				<el-button type="primary" class="ml-2" @click="dialogFormVisible1 = true">新建</el-button>
				<el-dialog v-model="dialogFormVisible1" title="增加">
					<el-form :model="form">
						<el-form-item label="课程分类代码" :label-width="formLabelWidth">
							<el-input v-model="form.code" autocomplete="off" placeholder="请输入代码编号" clearable />
						</el-form-item>
						<el-form-item label="课程名称" :label-width="formLabelWidth">
							<el-input v-model="form.course" autocomplete="off" placeholder="请输入课程明橙" clearable />
						</el-form-item>
						<el-form-item label="课程分类名称" :label-width="formLabelWidth">
							<el-input v-model="form.name" autocomplete="off" placeholder="请输入全称" clearable />

						</el-form-item>
					</el-form>
					<template #footer>
						<span class="dialog-footer">

							<el-button @click="dialogFormVisible1 = false">Cancel</el-button>
							<el-button type="primary" @click="Add()">Ok</el-button>
						</span>
					</template>
				</el-dialog>

			</div>
		</template>
	</el-page-header>
	<el-table :data="tableData" style="width: 100%;" highlight-current-row="true">
		<el-table-column type="index" align="center" fixed prop="date" label="Index" width="150" />
		<el-table-column prop="code" label="课程分类代码" width="280" />
		<el-table-column prop="course" label="课程名称" width="280" />
		<el-table-column prop="name" label="课程分类名称" width="280" />
		<el-table-column fixed="right" label="Operations" width="300">
			<!-- 按钮的绑定 -->
			<template #default="scope">
				<el-button type="success" round @click="editOpen(scope.$index)">修改</el-button>
				<el-button type="danger" round @click="open(scope.$index)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>

	<!-- 模态框 -->
	<el-dialog v-model="dialogFormVisible" title="修改">
		<el-form :model="form">
			<el-form-item label="课程分类代码" :label-width="formLabelWidth">
				<el-input v-model="form.code" autocomplete="off" placeholder="请输入代码编号" clearable />
			</el-form-item>
			<el-form-item label="课程名称" :label-width="formLabelWidth">
				<el-input v-model="form.course" autocomplete="off" placeholder="请输入课程明橙" clearable />
			</el-form-item>
			<el-form-item label="课程分类名称" :label-width="formLabelWidth">
				<el-input v-model="form.name" autocomplete="off" placeholder="请输入全称" clearable />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">Cancel</el-button>
				<el-button type="primary" @click="Edit()">Ok</el-button>
			</span>
		</template>
	</el-dialog>
	<div class="demo-pagination-block">
		<el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4" :page-sizes="[10, 20, 30, 40]"
			:small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
			:total="40" />
	</div>
	<br><br>


	<!--  -->
	<h1>课程分类可视化</h1>
	<div id="main1"></div>
	<br><br>
	<!-- 课程申请 -->

	<h1>课程需求申请</h1>
	<div>
		<el-input v-model="addCour" placeholder="Please input" />
		<el-button type="primary" @click="courNum = 2">添加申请</el-button>
	</div>
	<el-steps :active="courNum" align-center>
		<el-step title="Step 1" description="添加申请" />
		<el-step title="Step 2" description="课程寻找中" />
		<el-step title="Step 3" description="课程质量评估" />
		<el-step title="Step 4" description="申请成功/失败" />
	</el-steps>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ArrowLeft } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import * as echarts from 'echarts';

let addCour = ref("")
let courNum = ref(1)

function add() {
	tableData.value.push({
		code: form.value.code,
		course: form.value.course,
		name: form.value.name,
	})
	dialogFormVisible1.value = false;
}

let indexEdit: number;
function editOpen(index) {
	dialogFormVisible.value = true;
	indexEdit = index
}
function editHandle() {
	tableData.value[indexEdit].code = form.value.code
	tableData.value[indexEdit].course = form.value.course
	tableData.value[indexEdit].name = form.value.name
	dialogFormVisible.value = false;
}

function fooDele(index) {
	tableData.value.splice(index, 1)
}


const dialogFormVisible = ref(false)
const dialogFormVisible1 = ref(false)


const formLabelWidth = '140px'
const form: any = ref({
	name: '',
	code: '',
	region: '',
	date1: '',
	date2: '',
	delivery: false,
	type: [],
	resource: '',
	desc: '',
})

const tableData = ref([{
	code: "01",
	course: "计算机网络",
	name: "计算机类",
},
{
	code: "02",
	course: "微积分",
	name: "数学类",
},
{
	code: "03",
	course: "阅读与写作",
	name: "文学类",
},
{
	code: "04",
	course: "苏格拉底",
	name: "哲学类",
},
{
	code: "05",
	course: "艺术鉴赏",
	name: "艺术类",
},
{
	code: "06",
	course: "体育理论",
	name: "体育类",
},
]);


const currentPage4 = ref(4)
const pageSize4 = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

// 通知函数
// 增加通知函数
const Add = () => {
	ElMessageBox.confirm(
		'确定要增加数据吗？',
		'提示',
		{
			confirmButtonText: 'OK',
			cancelButtonText: 'Cancel',
			type: 'warning',
		}
	)
		.then(function () {
			ElMessage({
				type: 'success',
				message: '已增加',
			})
			add()
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: '用户取消增加',
			})
		})
}


// 修改通知函数
const Edit = () => {
	ElMessageBox.confirm(
		'确定要修改此数据吗？',
		'提示',
		{
			confirmButtonText: 'OK',
			cancelButtonText: 'Cancel',
			type: 'warning',
		}
	)
		.then(function () {
			ElMessage({
				type: 'success',
				message: '已修改',
			})

			editHandle()
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: '取消修改',
			})
		})


}
// 删除通知函数
const open = (index) => {
	ElMessageBox.confirm(
		'确定要删除此数据吗？',
		'Warning',
		{
			confirmButtonText: 'OK',
			cancelButtonText: 'Cancel',
			type: 'warning',
		}
	)
		.then(function () {
			ElMessage({
				type: 'success',
				message: '已删除',
			})
			fooDele(index)
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: '删除失败',
			})
		})
}

// 基于准备好的dom，初始化echarts实例
onMounted(() => {
	let dom: any = document.getElementById('main1');
	console.log(dom);
	var myChart = echarts.init(dom);
	// 绘制图表
	myChart.setOption({
		legend: {
			orient: 'vertical',
			right: 10,
			top: 'center'
		},
		dataset: {
			source: [
				['product', '2015', '2016', '2017',],
				['计算机类', 20, 30, 40],
				['数学类', 13, 29, 55],
				['文学类', 30, 50, 51],
				['哲学类', 10, 60, 45],
				['艺术类', 46, 46, 50],
				['体育类', 7, 20, 30],
			]
		},
		xAxis: { type: 'category' },
		yAxis: {},
		series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
	});
})

</script>

<style scoped>
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

#main1 {
	height: 500px;
}

img {
	width: 100%;
}

.el-input {
	width: 950px;
	margin-left: 150px;
	margin-bottom: 10px;
}
</style>
