<template>
  <div class="sideBar">
    <section class="sideBar">
      <aside>
        视频新闻
        <router-link to="/list/video">more&gt;&gt;</router-link>
      </aside>
      <el-carousel indicator-position="outside" height="260px">
        <el-carousel-item v-for="el in videoArr" :key="el.id">
          <router-link :to="'/detailVideo/' + el.id">
            <img :src="el.src" alt="" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="sideBar">
      <aside>
        图片新闻
        <router-link to="/list/image">more&gt;&gt;</router-link>
      </aside>
      <el-carousel indicator-position="outside" height="260px">
        <el-carousel-item v-for="el in imageArr" :key="el.id">
          <router-link :to="'/detailImage/' + el.id">
            <img :src="el.src" alt="" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="sideBar" style="background-color: white">
      <aside>
        最新新闻
        <router-link to="/list/newest">more&gt;&gt;</router-link>
      </aside>
      <ul class="newest">
        <li v-for="el in newsetArr" :key="el.id">
          <router-link :to="'/detail/newest/' + el.id">
            <el-row :gutter="5">
              <el-col :span="4">
                <section>
                  <span v-text="el.day"></span>
                  <span v-text="el.monthYear" style="font-size: 12px"></span>
                </section>
              </el-col>
              <el-col :span="16">
                <article v-text="el.title"></article>
              </el-col>
              <el-col :span="4">
                <aside class="red">
                  <el-icon style="margin-top: 22px"><View /></el-icon>800
                </aside>
              </el-col>
            </el-row>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="sideBar" style="background-color: white">
      <aside>
        热点新闻
        <router-link to="/list/newhot">more&gt;&gt;</router-link>
      </aside>
      <ul class="newest">
        <li v-for="el in newhotArr" :key="el.id">
          <router-link :to="'/detail/newhot/' + el.id">
            <el-row :gutter="5">
              <el-col :span="4">
                <section>
                  <span v-text="el.day"></span>
                  <span v-text="el.monthYear" style="font-size: 12px"></span>
                </section>
              </el-col>
              <el-col :span="16">
                <article v-text="el.title"></article>
              </el-col>
              <el-col :span="4">
                <aside class="red">
                  <el-icon style="margin-top: 22px"><View /></el-icon>800
                </aside>
              </el-col>
            </el-row>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "sideComponent",
  data() {
    return {
      videoArr: [],
      imageArr: [],
      newsetArr: [],
      newhotArr: [],
    };
  },
  mounted() {
    let arr = this.$store.state.extraData;
    if (arr.length === 0) {
      this.$axios.get("getMsgObj").then((rs) => {
        arr = rs;
        this.public(arr)
      });
    } else {
      this.public(arr)
    }
  },
  methods: {
    public(arr) {
      this.newsetArr = arr[0].map((el) => {
        let d = new Date(el.updatedAt);
        return {
          id: el.id,
          title: el.title,
          day: d.getDate(),
          monthYear: d.getMonth() + 1 + "-" + d.getFullYear(),
        };
      });
      this.newhotArr = arr[1].map((el) => {
        let d = new Date(el.updatedAt);
        return {
          id: el.id,
          title: el.title,
          day: d.getDate(),
          monthYear: d.getMonth() + 1 + "-" + d.getFullYear(),
        };
      });
      this.imageArr = arr[2].map((el) => {
        return { id: el.id, src: this.$store.state.URL + "photoes/" + el.src };
      });
      this.videoArr = arr[3].map((el) => {
        return { id: el.id, src: this.$store.state.URL + "video/" + el.src };
      });
    },
  },
};
</script>

<style scoped lang="less">
section.sideBar {
  border: 1px solid rgb(113, 113, 179);
  border-radius: 4px;
  margin-bottom: 20px;
  aside {
    background-color: rgb(113, 113, 179);
    line-height: 45px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    color: white;
    a,
    a:visited {
      text-decoration: none;
      color: #e97c68;
    }
  }
  .el-carousel {
    background-color: #2e2c2c;
    img {
      width: 100%;
      height: 260px;
    }
  }
  ul.newest {
    padding: 10px 5px 0;
    margin: 0;
    list-style: none;
    li {
      border-bottom: 1px dashed #ccc;
      margin-bottom: 10px;
      padding-bottom: 7px;
      &:last-child {
        border-bottom: none;
      }
      a,
      a:visited {
        text-decoration: none;
        section {
          text-align: center;
          line-height: 25px;
          background-color: #524d4d;
          border-radius: 4px;
          color: white;
          padding: 5px 0;
          span {
            display: block;
          }
        }
        article {
          height: 60px;
          line-height: 30px;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          color: #333;
        }
        aside.red {
          line-height: 60px;
          background-color: transparent;
          color: #666;
        }
      }
    }
  }
}
</style>
