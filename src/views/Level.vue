<template>
	<el-page-header :icon="ArrowLeft">
		<template #content>
			<span class="text-large font-600 mr-3"> 层次管理 </span>


		</template>
		<el-badge v-model:value="addSum" class="item" type="primary">
			<el-button plain @click="open1">新增数</el-button>
		</el-badge>
		<el-badge v-model:value="editSum" class="item" type="warning">
			<el-button :plain="true" @click="open2">修改数</el-button>
		</el-badge>

		<!-- <el-button type="primary" style="margin-left: 16px" @click="delSum(drawer)">
			删除项
		</el-button>

		<el-drawer v-model="drawer" title="I am the title" :with-header="false">
			<span>Hi there!</span>
		</el-drawer> -->

		<template #extra>
			<div class="flex items-center" style="">

				<!-- <el-button type="primary" class="ml-2" @click="dialogFormVisible1 = true" style=" margin-right: 201px;">
					新增</el-button> -->
				<nut-animate type='twinkle' :loop='true' @click="dialogFormVisible1 = true" style="margin-right:201px">
					<nut-button color="rgb(64,158,255)" type='primary'>增加</nut-button>
				</nut-animate>
				<el-dialog v-model="dialogFormVisible1" title="增加">
					<el-form :model="form">
						<el-form-item label="层次代码" :label-width="formLabelWidth">
							<el-input v-model="form.code" autocomplete="off" placeholder="请输入编号" clearable />
						</el-form-item>
						<el-form-item label="层次名称" :label-width="formLabelWidth">
							<el-input v-model="form.name" autocomplete="off" placeholder="请输入名称" clearable />

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

	<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;;"
		highlight-current-row :cell-class-name="ColorChange">
		<el-table-column type="index" :index="indexMethod" align="center" fixed label="Index" width="150" />
		<el-table-column prop="code" label="层次代码" width="450" />

		<el-table-column prop="name" label="层次名称" width="450" />
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
			<el-form-item label="层次代码" :label-width="formLabelWidth">
				<el-input v-model="form.code" autocomplete="off" placeholder="请输入序号" clearable />
			</el-form-item>
			<el-form-item label="层次名称" :label-width="formLabelWidth">
				<el-input v-model="form.name" autocomplete="off" placeholder="请输入全称" clearable />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">Cancel</el-button>
				<el-button type="primary" @click="Edit()">ok</el-button>
			</span>
		</template>
	</el-dialog>
	<!-- 底部页码 -->
	<div class="demo-pagination-block">
		<el-pagination v-model:currentPage="currentPage" v-model:page-size="pagesize" :page-sizes="[10, 20, 30, 40]"
			:small="small" :disabled="disabled" :background="background"
			layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>

</template>

<script setup lang="ts">

import { ref, watch } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import Color from 'element-plus/es/components/color-picker/src/color';
const drawer = ref(false)
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

let code1, name1: string
function fooDele(index) {
	function delChange1() {
		code1 = tableData.value[indexEdit].code
		return code1

	}
	function delChange2() {
		name1 = tableData.value[indexEdit].name
		return name1
	}
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



// 数据数组
const tableData = ref([{

	code: "0144",
	name: "专升本",

},
{

	code: "0222",
	name: "3+2",
},
{

	code: "0321",
	name: "本科生",
},
{

	code: "0412",
	name: "层次1",
},
{

	code: "0555",
	name: "层次2",
},
{

	code: "0621",
	name: "层次3",
},
{

	code: "0332",
	name: "层次4",
},
{

	code: "0366",
	name: "层次5",
},
{

	code: "0366",
	name: "层次6",
},
{

	code: "0355",
	name: "层次7",
},
{

	code: "0333",
	name: "层次8",
},
{

	code: "0344",
	name: "层次9",
},



]);

const tableData1 = ref([{
	code2: "",
	name2: ""

}])
const handleEdit = (index, row) => {
	console.log(index, row);
};


const dialogVisible = ref(false)
// 分页实现
const pagesize = ref(10)
const currentPage = ref(1)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

function handleSizeChange(newSize) {
	this.pagesize.value = newSize
}
function handleCurrentChange(currentdata) {
	this.currentPage.value = currentdata
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

function delSum(drawer){
	drawer = true
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

.demo-pagination-block+.demo-pagination-block {
	margin-top: 10px;
}

.demo-pagination-block .demonstration {
	margin-bottom: 16px;
}

.demo-pagination-block {
	position: fixed;
	left: 270px;
	bottom: 20px;
}

.item {
	margin-top: 10px;
	margin-right: 25px;
}

.el-dropdown {
	margin-top: 22px;
}

.row-grey {
	background-color: #E0E0E0 !important;
}
</style>
