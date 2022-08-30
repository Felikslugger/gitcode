<template>
  <div class="listNotice" :style="{ width: $store.state.screenW + 'px' }">
    <el-row :gutter="30">
      <el-col :span="16">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>
                <el-icon :size="15" color="white"><HomeFilled /></el-icon
                ><router-link to="/">首页</router-link>
              </span>
              <span style="color: #ccc">通知公告</span>
            </div>
          </template>
          <ul>
            <li v-for="el in arr" :key="el.id">
              <h4 v-text="el.title" style="margin-left:30px"></h4>
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
  name: "listNoticeComponent",
  data() {
    return {
      curPage:0,
      arr:[],
      total:0
    };
  },
  mounted() {
    this.subPage();
  },
  methods: {
    changePage(num) {
      this.curPage = num - 1;
      this.subPage();
    },
    subPage() {
      let params = {
        type: 'ok',
        start: this.curPage * 5,
        clsType:'Notice',
      };
      this.$axios.get("getListMsg", { params }).then((rs) => {
          this.arr = rs.map((el) => {
            let obj = {};
            obj.param = el.content.replace(/ /g,'').replace(/<br>/g,'');
            let d=new Date(el.updatedAt);
            obj.date =d.getFullYear()+'年'+(d.getMonth()+1)+"月"+d.getDate()+'日';
            obj.title = el.title;
            obj.id = el.id;
            return obj;
          });
      });
      params = {
        type: 'ok',
        clsType:'Notice'
      };
      this.$axios.get("getListTotal", { params }).then((rs) => {
        this.total = rs;
      });
    },
  },
  components: {
    SideBar,
  },
};
</script>

<style scoped lang="less">
div.listNotice {
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
