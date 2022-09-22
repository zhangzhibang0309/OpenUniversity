<template>
    <div style="width: 100vw;height: 100vh;position: absolute;left: 0px;">
        <div class="login">

            <div class="box-card">
                <div class="logo">
                    <img src="../img/logo.png" alt="">
                </div>

                <div class="text">
                    <p>教师端登录</p>
                </div>

                <el-form ref="ruleFormRef" :model="temp" :rules="rules" label-width="300px" class="demo-ruleForm"
                    :size="formSize" status-icon>
                    <el-form-item label="用户名" prop="name" label-width="300px" color="black">
                        <el-input v-model="temp.name" style="width:200px" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password" label-width="300px" color="black">
                        <el-input type="password" v-model="temp.password" style="width:200px" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()" style="width:80px">登录</el-button>
                        
                        <el-button  style="margin-left:1vw" @click="resign" width:80px>注册</el-button>
                    </el-form-item>
                </el-form>
                <div style="color:black;font-size: 13px;margin-top: 12vh;">
                    <center> <p >忘记登录密码,学生用户请联系任课教师; </p></center>
                    <center><p > 教师用户请联系系统管理员</p></center>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter();
const formSize = ref('default')
const temp = reactive({
    name: 'dongruan',
    password: "123456"
})
const rules = reactive({
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名为3-10个字', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 15, message: '密码长度为6-15', trigger: 'blur' },
    ],
})

const ruleFormRef = ref(null);
function submitForm() {
    ruleFormRef.value.validate((valid) => {
        if (valid) {
            console.log("ok");
            router.push("/home")

        }
        else {
            console.log("error");
            return false
        }
    })
}

function resign() {
    alert("注册功能暂未开放，请联系管理员！！！！")
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 712px;
    background-image: url('../img/login-bg.jpg');
    /* background-color: rgb(247,246,244); */
    background-size: cover;
    background-position: center;
    position: relative;

}

.box-card {
    width: 500px;
    height: 430px;
    position: relative;
    left: 57vw;
    top: 15vh;
    background-color: white;
}

.demo-ruleForm {
    padding-top: 13vh;
    margin-left: -10vw
}

#el-id-6152-0 {
    width: 300px !important;
    color: black !important;
}

.logo {
    margin-left: 1vw;
    padding-top: 3vh;
}

.text {
    width: 300px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    margin-top: 30px;
    font-family: STXinwei;
    background-image: -webkit-linear-gradient(left, green, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, red 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s linear infinite;
    font-size: 29px;
}

@keyframes masked-animation {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>