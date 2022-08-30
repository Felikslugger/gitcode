<template>
  <div
    class="detail detailVideo"
    :style="{ width: $store.state.screenW + 'px' }"
  >
    <el-row :gutter="30">
      <el-col :span="16">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <router-link to="/">返回首页</router-link>/
              <router-link to="/list/video">返回列表页</router-link>/详细情况...
            </div>
          </template>
          <h4 v-text="obj.title" style="text-align: center"></h4>
          <p
            v-text="obj.date"
            style="text-align: center; margin-bottom: 20px"
          ></p>
          <video :src="obj.Url" controls autoplay />
          <div class="content" v-html="obj.content"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <SideBar></SideBar>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
export default {
  name: "detailVideoComponent",
  data() {
    return {
      obj: {},
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.$axios
      .get("getDetail", { params: { tableName: "Video", id } })
      .then((rs) => {
        this.obj.title = rs.title;
        const d = new Date(rs.updatedAt);
        this.obj.date =
          d.getFullYear() +
          "年" +
          (d.getMonth() + 1) +
          "月" +
          d.getDate() +
          "日";
        this.obj.Url = this.$store.state.URL + "video/aaa.mp4";
        this.obj.content = rs.content;
      });
  },
  components: {
    SideBar,
  },
};
</script>
<style scoped lang="less">
div.detailVideo {
  margin: 60px auto 30px;
  .box-card {
    .card-header {
      line-height: 40px;
      color: white;
      padding-left: 40px;

      a,
      a:visited {
        color: white;
      }
    }
    video {
      width: 100%;
      margin-bottom: 20px;
    }
    div.content {
      line-height: 30px;
      text-indent: 2em;
    }
  }
}
</style>
