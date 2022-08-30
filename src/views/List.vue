<template>
  <div class="list" :style="{ width: $store.state.screenW + 'px' }">
    <el-row :gutter="30">
      <el-col :span="16">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>
                <el-icon :size="15" color="white"><HomeFilled /></el-icon
                ><router-link to="/">首页</router-link>
              </span>
              <span style="color: #ccc">{{ listName }}</span>
            </div>
          </template>
          <ul>
            <li v-for="el in arr" :key="el.id">
              <h4 v-text="el.title"></h4>
              <router-link :to="detailName + el.id">
                <article>
                  <p v-text="el.param"></p>
                  <section>
                    <el-icon style="margin-right: 10px"><Timer /></el-icon>
                    <span v-text="el.date" style="margin-right: 30px"></span>
                    <el-icon style="margin-right: 10px"><View /></el-icon>200
                  </section>
                </article>
                <aside>
                  <img :src="el.src" alt="" />
                </aside>
              </router-link>
            </li>
          </ul>
          <div class="page">
            <el-pagination
              background
              layout="prev, pager, next"
              @current-change="changePage"
              :page-size="5"
              :total="total"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <SideBar></SideBar>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "listComponent",
  data() {
    return {
      listLabel: "",
      listName: "",
      curPage: 0,
      arr: [],
      total: 0,
      detailName: "",
    };
  },
  mounted() {
    this.listLabel = this.$route.params.newType;
    this.subPage();
  },
  methods: {
    changePage(num) {
      this.curPage = num - 1;
      this.subPage();
    },
    subPage() {
      const dataType = this.listLabel;
      switch (dataType) {
        case "headlines":
          this.listName = "关注头条";
          this.detailName = "/detail/headlines/";
          break;
        case "comprehensive":
          this.listName = "综合新闻";
          this.detailName = "/detail/comprehensive/";
          break;
        case "learning":
          this.listName = "学术动态";
          this.detailName = "/detail/learning/";
          break;
        case "story":
          this.listName = "师大故事";
          this.detailName = "/detail/story/";
          break;
        case "newest":
          this.listName = "最新新闻";
          this.detailName = "/detail/newest/";
          break;
        case "newhot":
          this.listName = "热点新闻";
          this.detailName = "/detail/newhot/";
          break;
        case "video":
          this.listName = "视频新闻";
          this.detailName = "/detailVideo/";
          break;
        case "image":
          this.listName = "图片新闻";
          this.detailName = "/detailImage/";
          break;
      }
      let clsType = "";
      if (dataType === "video") {
        clsType = "Video";
      } else if (dataType === "image") {
        clsType = "Images";
      } else {
        clsType = "news";
      }
      let params = {
        type: dataType,
        start: this.curPage * 5,
        clsType,
      };
      this.$axios.get("getListMsg", { params }).then((rs) => {
        if (dataType === "video" || dataType === "image") {
          this.arr = rs.map((el) => {
            let obj = {};
            obj.param = el.content;
            obj.src =
              dataType === "video"
                ? this.$store.state.URL + "video/" + el.src
                : this.$store.state.URL + "photoes/" + el.src;
            obj.date = new Date(el.updatedAt).toLocaleDateString();
            obj.title = el.title;
            obj.id = el.id;
            return obj;
          });
        } else {
          this.arr = rs.map((el) => {
            let obj = {};
            obj.param = el.content
              .match(/<p>[^>]+>/)[0]
              .replace(/<p>|<\/p>/g, "");
            let src = el.content.match(/src="[^"]+"/)[0];
            obj.src = src.substring(5, src.length - 1);
            obj.date = new Date(el.updatedAt).toLocaleDateString();
            obj.title = el.title;
            obj.id = el.id;
            return obj;
          });
        }
      });
      params = {
        type: dataType,
        clsType,
      };
      this.$axios.get("getListTotal", { params }).then((rs) => {
        this.total = rs;
      });
    },
  },
  components: {
    SideBar,
  },
  watch: {
    $route() {
      this.listLabel = this.$route.path.substr(6);
      this.subPage();
    },
  },
};
</script>
<style scoped lang="less">
div.list {
  margin: 60px auto 30px;
  .box-card {
    border: 1px solid #0b3c70;
    background-color: #ecf2f6;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        a,
        a:visited {
          color: white;
          font-size: 15px;
          position: absolute;
          margin-top: 0;
          margin-left: 5px;
          text-decoration: none;
        }
      }
    }
    ul {
      list-style: none;
      padding-left: 0;
      li {
        background-color: white;
        margin-bottom: 20px;
        padding: 15px;
        a,
        a:visited {
          display: flex;
          text-decoration: none;
          article {
            flex: 1;
            p {
              margin: 0 0 15px;
              overflow: hidden;
              -webkit-line-clamp: 4;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              line-height: 1.6;
              color: #0b3c70;
            }
            section {
              font-size: 13px;
              color: #666;
              font-family: "simsun";
            }
          }
          aside {
            width: 200px;
            margin-left: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    div.page {
      margin: 30px 20px 20px 0;
      .el-pagination {
        display: flex;
        justify-content: right;
      }
    }
  }
}
</style>
