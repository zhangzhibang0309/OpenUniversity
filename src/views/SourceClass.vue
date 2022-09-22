<template>
	<el-page-header :icon="ArrowLeft">
		<template #content>
			<span class="text-large font-600 mr-3"> 资源管理分类 </span>
		</template>
		<div id="topBanner" style="margin-left:400px;margin-top: -60px;">
			<el-badge v-model:value="addSum" class="item" type="primary">
			<el-button plain @click="open1">新增数</el-button>
		</el-badge>
		<el-badge v-model:value="editSum" class="item" type="warning">
			<el-button :plain="true" @click="open2">修改数</el-button>
		</el-badge>
		<!-- <el-dropdown trigger="click">
			<span class="el-dropdown-link">
				点击查看删除项
				<el-icon class="el-icon--right">
					<caret-bottom />
				</el-icon>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item class="clearfix">
						删除的层次代码是：
						<el-badge class="mark" :value="code1" />
					</el-dropdown-item>
					<el-dropdown-item class="clearfix">
						删除的层次名称是：
						<el-badge class="mark" :value="name1" />
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown> -->
		</div>
		
		<template #extra>
			<div class="flex items-center">
				<el-button type="primary" class="ml-2" @click="dialogFormVisible1 = true">新建</el-button>
				<el-dialog v-model="dialogFormVisible1" title="增加">
					<el-form :model="form">
						<el-form-item label="资源分类代码" :label-width="formLabelWidth">
							<el-input v-model="form.code" autocomplete="off" placeholder="请输入代码编号" clearable />
						</el-form-item>
						<el-form-item label="资源分类名称" :label-width="formLabelWidth">
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
	<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;" highlight-current-row="true">
		<el-table-column type="index" :index="indexMethod" align="center" fixed prop="date" label="Index" width="150" />
		<el-table-column prop="code" label="资源分类代码" width="450" />

		<el-table-column prop="name" label="资源分类名称" width="450" />
		<el-table-column fixed="right" label="Operations" width="300">
			<!-- 按钮的绑定 -->
			<template #default="scope">
				<el-button type="success" round @click="editOpen(scope.$index)">修改</el-button>
				<!-- <el-button type="danger" round @click="fooDele(scope.$index)">删除</el-button> -->
				<el-button type="danger" round @click="open(scope.$index)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>

	<!-- 模态框 -->
	<el-dialog v-model="dialogFormVisible" title="修改">
		<el-form :model="form">
			<el-form-item label="资源分类代码" :label-width="formLabelWidth">
				<el-input v-model="form.code" autocomplete="off" placeholder="请输入代码编号" clearable />
			</el-form-item>
			<el-form-item label="资源分类名称" :label-width="formLabelWidth">
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

	<!-- 实现分页 -->
	<div class="demo-pagination-block" >
		<el-pagination 
			v-model:currentPage="currentPage" 
			v-model:page-size="pageSize" 
			:page-sizes="[10, 20, 30, 40]"
			:small="small" :disabled="disabled" :background="background"
			layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" 
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>

</template>

<script setup lang="ts">
import { CaretBottom } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

let tmp;
function add() {
	addSum.value = addSum.value + 1;
	tableData.value.push({
		code: form.value.code,
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
	editSum.value = editSum.value + 1;
	tableData.value[indexEdit].code = form.value.code
	tableData.value[indexEdit].name = form.value.name
	dialogFormVisible.value = false;
}

function fooDele(index) {
	tableData.value.splice(index, 1)
}


const dialogTableVisible = ref(false)
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
	code: "A101",
	name: "高等数学",

},
{
	code: "A102",
	name: "线性代数",
},
{
	code: "A103",
	name: "概率论与数理统计",
},
{
	code: "B201",
	name: "大学英语",
},
{
	code: "C301",
	name: "马克思主义原理",
},
{
	code: "D06",
	name: "872操作系统",
},
{
	code: "D303",
	name: "数据库原理",
},
{
	code: "D304",
	name: "计算机网络",
},

{
	code: "D331",
	name: "操作系统",
},
{
	code: "D408",
	name: "计算机组成原理",
},
{
	code: "D234",
	name: "c语言与程序设计",
},{
	code: "D445",
	name: "javaweb开发",
},{
	code: "D443",
	name: "大数据原理",
},{
	code: "D782",
	name: "算法",
},{
	code: "E234",
	name: "模拟电路和数字电路",
},
]);

const handleEdit = (index, row) => {
	console.log(index, row);
};


const dialogVisible = ref(false)

const handleClose = (done) => {
	ElMessageBox.confirm('Are you sure to close this dialog?')
		.then(() => {
			done()
		})
		.catch(() => {
			// catch error
		})
}

// 分页
const pagesize = ref(10)
const currentPage = ref(1)
const total = ref(0)
function size_change(newSize){
       this.pagesize = newSize
   }
function current_change(currentPage){
       this.currentPage = newPage
   };

function prePage(currentPage){
	this.currentPage=currentPage
	this.showlist()
}
function nextPage(currentPage){
	this.currentPage=currentPage+1
	this.showlist()
}




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
const Edit = (index) => {
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
//提示函数
const editSum = ref(0)
const addSum = ref(0)


//连续索引

const indexMethod = (index: number) => {
	return (currentPage.value - 1) * pagesize.value + index + 1
}

let red

//实现行颜色变换
function ColorChange({ row, column, rowIndex, columnIndex }) {
	rowIndex = row.index
	if (rowIndex == '1') {
		return 'row-grey';
	}
}

//增加修改提示类
import { ElNotification } from 'element-plus'
const open1 = () => {
	let tmp = tableData.value.length.toString();
	tmp = `新增加的项是${tmp}`
	ElNotification({
		title: '添加成功',
		message: tmp,
		type: 'success',
	})
}
const open2 = (index) => {
	let n = indexEdit + 1;
	let tmp = n.toString();
	tmp = `修改项是${tmp}`
	ElNotification({
		title: '请谨慎修改',
		message: tmp,
		type: 'warning',
	})

}
let code2, name2: any
function clue() {
	tableData1.value[indexEdit].code2 = tableData.value[indexEdit].code;
	tableData1.value[indexEdit].name2 = tableData.value[indexEdit].name
}
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

.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-dropdown {
  margin-top: 1.1rem;
}
.demo-pagination-block {
	position: fixed;
	left: 580px;
	bottom: 20px;
}
</style>
