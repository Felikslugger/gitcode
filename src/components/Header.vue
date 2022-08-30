<template>
  <div class="header">
    <div class="one">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="10">
          <router-link to="/">鸡</router-link>
          <router-link to="/">你</router-link>
          <router-link to="/">太</router-link>
          <router-link to="/">美</router-link>
          <router-link to="/">你干嘛</router-link>
          <router-link to="/">哎哟</router-link>
        </el-col>
        <el-col :span="4">
          <router-link
            to="/"
            style="
              background-color: transparent;
              position: absolute;
              z-index: 10;
            "
          >
            <img
              style="margin-top: 10px"
              src="@/assets/images/logo1.png"
              alt=""
              width="120"
            />
          </router-link>
        </el-col>
        <el-col :span="10">
          <router-link to="/">唱</router-link>
          <router-link to="/">跳</router-link>
          <router-link to="/">rap</router-link>
          <router-link to="/">篮球</router-link>
          <router-link to="/">music</router-link>
          <router-link to="/search" style="padding-top: 3px">
            <el-icon><Search /></el-icon>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="two">
      <el-row
        :style="{
          width: $store.state.screenW + 'px',
          height: '42px',
          margin: 'auto',
        }"
      >
        <el-col :span="10">
          <el-menu
            style="height: 42px; border-bottom: transparent"
            mode="horizontal"
            @select="handleSelect"
            router
          >
            <el-sub-menu index="1">
              <template #title>个人信息</template>
              <el-menu-item index="1-1">姓名:陈国胜</el-menu-item>
              <el-menu-item index="1-2">年龄:23</el-menu-item>
              <el-menu-item index="/about">性别:男</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>教育背景</template>
              <el-menu-item index="2-1">重庆文理学院</el-menu-item>
              <el-menu-item index="2-2">软件工程</el-menu-item>
              <el-menu-item index="2-3">前端</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>技术栈</template>
              <el-menu-item index="3-1">H5C3JS</el-menu-item>
              <el-menu-item index="3-2">Vue</el-menu-item>
              <el-menu-item index="3-3">Nodejs</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>我的偶像</template>
              <el-menu-item index="3-1">鸡哥</el-menu-item>
              <el-menu-item index="3-2">雪豹</el-menu-item>
              <el-menu-item index="3-3">动物朋友</el-menu-item>
            </el-sub-menu>
            <!-- <el-menu-item index="4">科学研究</el-menu-item> -->
          </el-menu>
        </el-col>
        <el-col :span="4" style="margin-top: 42px">
          <router-link to="/" style="background-color: transparent">
            <img src="@/assets/images/logo_bg.png" alt="" width="200" />
          </router-link>
        </el-col>
        <el-col :span="10">
          <el-menu
            style="height: 42px; border-bottom: transparent"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-sub-menu index="1">
              <template #title>个人作品</template>
              <el-menu-item index="1-1">个人主页</el-menu-item>
              <el-menu-item index="1-2">阿飞的校园生活</el-menu-item>
              <el-menu-item index="1-3">阿尼亚小软件</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>课程</template>
              <el-menu-item index="2-1">Java Web</el-menu-item>
              <el-menu-item index="2-2">软件工程</el-menu-item>
              <el-menu-item index="2-3">软件体系结构</el-menu-item>
              <el-menu-item index="2-4">……</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>学校经历</template>
              <el-menu-item index="3-1">社团部长</el-menu-item>
              <el-menu-item index="3-2">部门干事</el-menu-item>
              <el-menu-item index="3-3">魔方人</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="4">其他信息</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerWorld",
  data() {
    return {};
  },
  methods: {
    handleSelect(val) {
      alert(val);
    },
  },
};
</script>

<style scoped lang="less">
div.header {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  .one {
    height: 40px;
    background: url(../assets/images/header_bg.jpg);
    .el-row {
      margin: auto;
      .el-col {
        display: flex;
        justify-content: space-around;
      }
      a,
      a:visited {
        color: white;
        height: 40px;
        line-height: 40px;
        text-decoration: none;
        padding: 0 5px;
        .el-icon {
          margin-top: 5px;
        }
        &:hover {
          background-color: white;
          color: rgb(14, 13, 39);
        }
      }
    }
  }
  .two {
    box-shadow: 1px 5px 16px 5px rgba(0, 0, 0, 0.2);
    background-color: white;
    .el-col {
    }
  }
}
</style>
