<template>
  <div class="list search" :style="{ width: $store.state.screenW + 'px' }">
    <el-row :gutter="20" style="line-height: 36px; margin-bottom: 20px">
      <el-col :span="2" style="text-align: right">搜索内容</el-col>
      <el-col :span="6"
        ><el-input v-model="keyword" placeholder="请输入搜索关键字"
      /></el-col>
      <el-col :span="2" style="text-align: right">类别</el-col>
      <el-col :span="3">
        <el-select v-model="newType">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="search">搜索</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="16">
        <el-card class="box-card" v-show="arr.length">
          <template #header>
            <div class="card-header">
              <span>
                <el-icon :size="15" color="white"><HomeFilled /></el-icon
                ><router-link to="/">首页</router-link>
              </span>
            </div>
          </template>
          <ul class="ul2" v-if="tableName==='Notice'">
            <li v-for="el in arr" :key="el.id">
              <h4 v-text="el.title" style="margin-left: 30px"></h4>
              <router-link :to="'/detailNotice/' + el.id">
                <article>
                  <p v-html="el.param"></p>
                  <section>
                    <el-icon style="margin-right: 10px"><View /></el-icon>200
                  </section>
                </article>
                <aside>
                  <span v-text="el.date" style="margin-right: 30px"></span>
                </aside>
              </router-link>
            </li>
          </ul>
          <ul class="ul1" v-else>
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
  name: "searchComponent",
  data() {
    return {
      curPage: 0,
      arr: [],
      total: 0,
      detailName: "",
      tableName: "",
      keyword: "",
      options: [
        { value: "headlines", label: "关注头条" },
        { value: "comprehensive", label: "综合新闻" },
        { value: "learning", label: "学术动态" },
        { value: "story", label: "师大故事" },
        { value: "newest", label: "最新新闻" },
        { value: "newhot", label: "热点新闻" },
        { value: "Video", label: "视频新闻" },
        { value: "Images", label: "图片新闻" },
        { value: "Notice", label: "通知公告" },
      ],
      newType: "--请选择--",
    };
  },
  methods: {
    changePage(num) {
      this.curPage = num - 1;
      this.subPage();
    },
    search() {
      if (this.newType === "--请选择--") return;
      let tableName = "News";
      this.detailName = "/detail/" + this.newType + "/";
      switch (this.newType) {
        case "Video":
          tableName = "Video";
          this.detailName = "/detailVideo/";
          break;
        case "Images":
          tableName = "Images";
          this.detailName = "/detailImage/";
          break;
        case "Notice":
          tableName = "Notice";
          this.detailName = "/detailNotice/";
          break;
      }
      this.tableName = tableName;
      this.subPage();

      const params = {
        type: this.newType,
        tableName,
        keyword: this.keyword,
      };
      this.$axios.get("getSearchTotal", { params }).then((rs) => {
        this.total = rs;
      });
    },
    subPage() {
      const params = {
        type: this.newType,
        start: this.curPage * 5,
        tableName: this.tableName,
        keyword: this.keyword,
      };
      this.$axios.get("getSearchMsg", { params }).then((rs) => {
        if (this.newType === "Video" || this.newType === "Images") {
          this.arr = rs.map((el) => {
            let obj = {};
            obj.param = el.content;
            obj.src =
              this.newType === "Video"
                ? this.$store.state.URL + "video/" + el.src
                : this.$store.state.URL + "photoes/" + el.src;
            obj.date = new Date(el.updatedAt).toLocaleDateString();
            obj.title = el.title;
            obj.id = el.id;
            return obj;
          });
        } else if (this.newType === "Notice") {
          this.arr = rs.map((el) => {
            let obj = {};
            obj.param = el.content.replace(/ /g, "").replace(/<br>/g, "");
            let d = new Date(el.updatedAt);
            obj.date =
              d.getFullYear() +
              "年" +
              (d.getMonth() + 1) +
              "月" +
              d.getDate() +
              "日";
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
    },
  },
  components: {
    SideBar,
  },
};
</script>
<style scoped lang="less">
div.search {
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
    ul.ul1 {
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
    ul.ul2 {
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
              text-align: justify;
            }
            section {
              margin-left: 60px;
              font-size: 13px;
              color: #666;
              font-family: "simsun";
            }
          }
          aside {
            width: 150px;
            margin-top: 30px;
            text-align: right;
            color: #666;
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
