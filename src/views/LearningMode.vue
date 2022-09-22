<template>	
	<el-page-header :icon="ArrowLeft">
		<template #content>
			<span class="text-large font-600 mr-3">学习形式</span>
		</template>
			
		<template #extra>
			<div class="flex items-center">
				<el-button type="success" class="ml-2" @click="dialogFormVisible1 = true">新建</el-button>
				<el-dialog v-model="dialogFormVisible1" title="增加">
                        <!-- 点击新建按钮，增加对话框显示 -->								
						<el-form :model="form">
							<el-form-item label="学习形式代码" :label-width="formLabelWidth">
								<el-input v-model="form.code" autocomplete="off" />
							</el-form-item>							
							<el-form-item label="学习形式名称" :label-width="formLabelWidth">
							<el-input v-model="form.name" autocomplete="off" />
							</el-form-item>
						</el-form>
						<template #footer>
							<span class="dialog-footer">
								<el-button @click="dialogFormVisible1 = false">取消</el-button>
                                <el-button type="primary" @click="Add()">确定</el-button>
							</span>
						</template>
					</el-dialog>								
			</div>
		</template>
	</el-page-header>
		<!-- 数据显示 -->
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;;"
        highlight-current-row :cell-class-name="ColorChange">
	    <el-table-column type="index" align="center" label="序号" fixed prop="date"  width="320" />
	    <el-table-column align="center" label="学习形式代码" prop="code"  width="320" />
		<el-table-column align="center" label="学习形式名称" prop="name"  width="320" />
	    <el-table-column align="center" label="操作" prop="action"  width="320">
			<!-- 添加编辑与删除按钮并定义 -->
	      <template #default="scope">
	        <el-button type="warning" size="small" @click="editOpen(scope.$index, scope.row)"
	          >编辑</el-button
	        >
	        <el-button
	          size="small"
	          type="danger"
	          @click="open(scope.$index, scope.row)"
	          >删除</el-button
	        >
	      </template>
	    </el-table-column>
	  </el-table>
	<!-- 模态框 -->
	<el-dialog v-model="dialogFormVisible" title="编辑">
		<el-form :model="form">
			<el-form-item label="学习形式代码" :label-width="formLabelWidth">
				<el-input v-model="form.code" autocomplete="off" />
			</el-form-item>
			<el-form-item label="学习形式名称" :label-width="formLabelWidth">
				<el-input v-model="form.name" autocomplete="off" />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="Edit()">确定</el-button>
			</span>
		</template>
	</el-dialog>
	  
<!-- Pagination 分页 -->
<div class="demo-pagination-block" >
		<el-pagination 
			v-model:currentPage="currentPage" 
			v-model:page-size="pagesize" 
			:page-sizes="[10, 20, 30, 40]"
			:small="small" :disabled="disabled" :background="background"
			layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" 
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>

</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'



// 对话框
let tmp;
function add() {
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
	tableData.value[indexEdit].code = form.value.code
	tableData.value[indexEdit].name = form.value.name
	dialogFormVisible.value = false;
}

let code1,name1
function fooDele(index) {
	function delChange1(){
		code1=tableData.value[indexEdit].code
		return code1
	
	}
	function delChange2(){
		name1=tableData.value[indexEdit].name
		return name1
	}
	tableData.value.splice(index, 1)

}
let arrTemp;
let searchCode = ref("");
const foo = () => {
	for (let i = 0; i < tableData.value.length; i++) {
		if (tableData.value[i].code=== searchCode.value) {
			arrTemp = tableData.value;
			tableData.value = [tableData.value[i]]
		}
	}
}
const fooReset = () => {
	tableData.value = arrTemp;
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

interface User {
  date: string
  code: string,
  name: string,
  address: string
}

const tableData = ref([
  {
    date: '1',
    code: '1',
	name: '业余D',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2',
    code: '10',
	name:'全日制',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '3',
    code: '2',
	name:'函授',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '4',
    code: '15',
	name:'幼儿教育',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '5',
    code: '9',
  	name: '学习形式9',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '6',
    code: '8',
  	name: '学习形式8',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '7',
    code: '3',
  	name: '111',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '8',
    code: '4',
  	name: '222',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '9',
    code: '6',
  	name: '333',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '10',
    code: '7',
  	name: '444',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '11',
    code: '3123',
  	name: '31233',
    address: 'No. 189, Grove St, Los Angeles',
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
		})
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


// Pagination 分页
// 分页实现
const pagesize = ref(10)
const currentPage = ref(1)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

function handleSizeChange (newSize) {
	this.pagesize.value=newSize
}
function handleCurrentChange (currentdata)  {
	this.currentPage.value = currentdata
}
//连续索引

const indexMethod = (index: number) => {
  return (currentPage.value - 1) * pagesize.value + index +1
}


</script>

<style scoped>
	/* Pagination 分页 */
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
/* 对话框 */
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
.demo-pagination-block{
	position: absolute;
	left:390px ;
}
.item {
	margin-top: 10px;
	margin-right: 25px;
}

.el-dropdown {
	margin-top: 22px;
}
</style>
