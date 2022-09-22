<template>
  <el-card class="box-card">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </el-card>
  <br>
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card class="box-card">
        <div class="demo-collapse">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="word,index in words" :title="word.title" :name="index">
              <p v-for="text in word.text">
                {{text}}
              </p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card>
        <!-- 日历 -->
        <el-calendar v-model="value" />
      </el-card>
    </el-col>
  </el-row>


</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date())


const activeName = ref(0)
const imgs = [
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/738493783a7af8931e303d6d3964f81d_1_3_art.jpg",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20220904210146.png",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%8A%A8%E6%BC%AB%E5%A5%B3%20(12).jpg",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/766340.png"
]
const words = [{
  title: "课程分类",
  text: [
    "实现大学课程资源的展示",
    "实现大学课程资源的增删改",
    "实现大学课程资源的可视化图表展示",
    "实现大学课程资源的资源申请",
    "让同学们更好的使用我们的东软大学课程平台",
    ],
    type: ""
},
{
  title: "学习形式模块",
  text: [
    " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.",
    " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
    ],
    type: "success"
},
{
  title: "学制管理模块",
  text: [
    " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.",
    " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
    ],
    type: "info"
},
{
  title: "层次模块",
  text: [
    "实现层次模块的展示",
    "实现层次模块的增加，可添加新的信息",
    "实现层次模块的修改，可修改相应信息",
    "实现层次模块的删除，可删除相应信息"
    ],
    type: "danger"
},
{
  title: "资源分类模块",
  text: [
  "实现资源分类模块的展示",
    "实现资源分类模块的增加，可添加新的信息",
    "实现资源分类模块的修改，可修改相应信息",
    "实现资源分类模块的删除，可删除相应信息"
    ],
    type: "warning"
},
{
  title: "专业模块",
  text: [
    " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.",
    " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
    ],
    type: ""
}]
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  width: 100%;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

p {
  word-break: break-all;
}
</style>
