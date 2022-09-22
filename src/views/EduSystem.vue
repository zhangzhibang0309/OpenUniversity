<template>
	<!-- 学制管理 -->
	<el-page-header :icon="ArrowLeft">
		<template #content>
			<span class="text-large font-600 mr-3"> 学制管理 </span>
		</template>
		<!-- 新建按钮及功能 -->
		<template #extra>
			<div class="flex items-center">
				<el-button type="success" class="ml-2" @click="dialogFormVisible1 = true">新建</el-button>
				<el-dialog v-model="dialogFormVisible1" title="添加学制">
					<el-form :model="form">
						<el-form-item label="学号" :label-width="formLabelWidth">
							<el-input v-model="form.code" autocomplete="off" />
						</el-form-item>
						<el-form-item label="姓名" :label-width="formLabelWidth">
							<el-input v-model="form.dame" autocomplete="off" />
						</el-form-item>
						<el-form-item label="学制" :label-width="formLabelWidth">
							<el-input v-model="form.name" autocomplete="off" />
						
						</el-form-item>
					</el-form>
					<template #footer>
						<span class="dialog-footer">
							
							<el-button @click="dialogFormVisible1 = false">取消</el-button>
							<el-button type="primary" @click="add()">确定</el-button>
						</span>
					</template>
				</el-dialog>

			</div>
		</template>
		
	</el-page-header>
	
	<!-- 查询 -->
	
	<el-input v-model="searchCode2" class="w-50 m-2" placeholder="请输入学号" :suffix-icon="Search"
		style="width: 150px; margin-left: 100px;" />
	<n-button size="small" @click="foo2" style="margin-left: 5px;">
		<span class="search_text">查询</span>
	</n-button>
	<n-button size="small" @click="fooReset2" style="margin-left: 5px;">
		<span class="search_text">返回主页面</span>
		</n-button>
	
	<el-input v-model="searchCode" class="w-50 m-2" placeholder="请输入姓名" :suffix-icon="Search"
		style="width: 150px; margin-left: 100px;" />
	<n-button size="small" @click="foo" style="margin-left: 5px;">
		<span class="search_text">查询</span>
	</n-button>
	<n-button size="small" @click="fooReset" style="margin-left: 5px;">
		<span class="search_text">返回主页面</span>
		</n-button>
	<el-input v-model="searchCode1" class="w-50 m-2" placeholder="请输入学制" :suffix-icon="Search"
		style="width: 150px; margin-left: 100px;" />
	<n-button size="small" @click="foo1" style="margin-left: 10px;">
		<span class="search_text">查询</span>
	</n-button>
	<n-button size="small" @click="fooReset1" style="margin-left: 5px;">
		<span class="search_text">返回主页面</span>
		</n-button>
		
	
	<span style="margin-left: 100px;"></span>
	
	<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" highlight-current-row="true">
		<el-table-column type="index" align="center" fixed prop="date" label="Index" width="150" />
		<el-table-column prop="code" label="学号" width="315" />
        <el-table-column prop="dame" label="姓名" width="250" />
		<el-table-column prop="name" label="学制" width="320" />
		<el-table-column fixed="right" label="操作" width="300">
			<!-- 绑定 按钮-->
			<template #default="scope">
				<el-button type="warning" round @click="editOpen(scope.$index)">编辑</el-button>
				
				<el-button type="danger" round @click="open(scope.$index)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
	
	<!-- 分页 -->
	
	 <!-- <div class="example-pagination-block">
	    <div class="example-demonstration"></div>
	   
		  <el-pagination background layout="prev, pager, next" :total="1000" />
		   <a-table :columns="columns" :data-source="data" bordered  :pagination="{ pageSize: 10 }"></a-table>
		 
	  </div> -->
	  <div class="demo-pagination-block" >
	  	<el-pagination 
	  		v-model:currentPage="currentPage" 
	  		v-model:page-size="pageSize" 
	  		:page-sizes="[5, 10, 15, 20]"
	  		:small="small" :disabled="disabled" :background="background"
	  		layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" 
	  		@size-change="handleSizeChange"
	  		@current-change="handleCurrentChange" />
	  </div>
	  
	  
	  


	<!-- 编辑学制 -->
	<el-dialog v-model="dialogFormVisible" title="编辑学制">
		<el-form :model="form">
		<el-form-item label="学号" :label-width="formLabelWidth">
			<el-input v-model="form.code" autocomplete="off" />
		</el-form-item>
		<el-form-item label="姓名" :label-width="formLabelWidth">
			<el-input v-model="form.dame" autocomplete="off" />
		</el-form-item>
		<el-form-item label="学制" :label-width="formLabelWidth">
			<el-input v-model="form.name" autocomplete="off" />
		
		</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="editHandle()">确定</el-button>
			</span>
		</template>
	</el-dialog>
	
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
// import { tr } from 'element-plus/es/locale';

let tmp;
function add() {
	tableData.value.push({
		code: form.value.code,
		name: form.value.name,
		dame: form.value.dame,
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
	tableData.value[indexEdit].name = form.value.name
	tableData.value[indexEdit].dame = form.value.dame
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

// 数据
const tableData = ref([{
	code: "201901",
	name: "4.5",
    dame:"小刘",
},
{
	code: "201902",
	name: "1.5",
	 dame:"小李",
},
{
	code: "201903",
	name: "8",
	 dame:"小王",
},
{
	code: "201904",
	name: "5",
	 dame:"小张",
},
{
	code: "201905",
	name: "全日制",
	 dame:"大刘",
},
{
	code: "201906",
	name: "1",
	 dame:"大李",
},
{
	code:'201907',
	name:'10',
	dame:"大王",
},
{
	code:'201908',
	name:'11',
	dame:"大张",
},
{
	code:'201909',
	name:'6',
	dame:"小王",
},
{
	code:'201910',
	name:'非全日制',
	dame:"张三",
},
{
	code:'201911',
	name:'4.5',
	dame:"小宋",
},
{
	code:'201913',
	name:'6',
	 dame:"张三",
},{
	code:'201914',
	name:'6',
	 dame:"李四",
},{
	code:'201915',
	name:'6',
	 dame:"王五",
},{
	code:'201916',
	name:'6',
	 dame:"小刘",
},
{
	code:'201917',
	name:'6',
	 dame:"小王",
},
{
	code:'201918',
	name:'6',
	 dame:"小杨",
},
{
	code:'201919',
	name:'6',
	dame:"小石",
},
{
	code:'201920',
	name:'6',
	dame:"小贺",
},
{
	code:'201921',
	name:'6',
	dame:"张四",
},
{
	code:'201922',
	name:'6',
	dame:"张五",
},
{
	code:'201923',
	name:'6',
	 dame:"张五",
},
{
	code:'201924',
	name:'6',
	dame:"张五",
},
{
	code:'201925',
	name:'6',
	 dame:"张五",
},
{
	code:'201926',
	name:'6',
	dame:"张五",
},
{
	code:'201927',
	name:'6',
	dame:"张五",
},
{
	code:'201928',
	name:'6',
	dame:"张五",
}

]);

const handleEdit = (index, row) => {
	console.log(index, row);
};


const dialogVisible = ref(false)

// const currentPage1 = ref(5)
// const currentPage2 = ref(5)
// const currentPage3 = ref(5)
// const currentPage4 = ref(4)
// const pageSize2 = ref(10)
// const pageSize3 = ref(10)
// const pageSize4 = ref(10)
// const small = ref(false)
// const background = ref(false)
// const disabled = ref(false)

// const handleSizeChange = (val: number) => {
// 	console.log(`${val} items per page`)
// }
// const handleCurrentChange = (val: number) => {
// 	console.log(`current page: ${val}`)
// }

const pagesize = ref(10)
const currentPage = ref(1)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

function handleSizeChange (newSize) {
	this.pageSize=newSize
}
function handleCurrentChange (currentdata)  {
	this.currentPage = this.contentdata
}

// 删除
const open = (index) => {
	ElMessageBox.confirm(
		'确定要删除此数据吗？',
		'提示消息',
		{
			confirmButtonText: '确定',
			cancelButtonText: '取消',
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

let arrTemp2;
let searchCode2  = ref("");
const foo2 = () => {
	for (let j = 0; j < tableData.value.length; j++) {
		if (tableData.value[j].code === searchCode2.value) {
			arrTemp2 = tableData.value;
			tableData.value = [tableData.value[j]]
		}
	}
}
const fooReset2 = () => {
	tableData.value = arrTemp2;
}

let arrTemp1;
let searchCode1  = ref("");
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

let arrTemp;
let searchCode = ref("");
const foo = () => {
	for (let i = 0; i < tableData.value.length; i++) {
		if (tableData.value[i].dame === searchCode.value) {
			arrTemp = tableData.value;
			tableData.value = [tableData.value[i]]
		}
	}
}
const fooReset = () => {
	tableData.value = arrTemp;
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

.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}

</style>


