<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "appCom",
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("extraFun");
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 90px 0 0 0;
  background-color: #ecf2f6;
}
div.home .el-card__body {
  padding: 0;
}
div.list .el-card__header,
div.listNotice .el-card__header,
div.detail .el-card__header {
  background-color: #0b3c70;
  padding: 15px 20px 10px 15px;
}
div.list .el-card__body,
div.listNotice .el-card__body,
div.detail .el-card__header {
  padding: 0;
}
</style>
