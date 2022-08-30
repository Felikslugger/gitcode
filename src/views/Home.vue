<template>
  <div class="home">
    <div class="one">
      <el-carousel height="500px">
        <el-carousel-item v-for="el in arrOne" :key="el.id">
          <router-link :to="'/detailCarousel/' + el.id">
            <img
              style="width: 100%; height: 475px"
              :src="el.src"
            />
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <aside></aside>
    </div>
    <div class="public two">
      <div class="head" :style="{ width: $store.state.screenW + 'px' }">
        <el-row>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#305b8f' }" />
          </el-col>
          <el-col :span="4" style="text-align: center; margin-top: 10px">
            <router-link to="/list/headlines">
              <img src="@/assets/images/title01.png" alt="" /><el-icon
                color="white"
                class="is-loading"
                style="position: absolute; margin-top: 7px"
                ><Loading
              /></el-icon>
            </router-link>
          </el-col>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#305b8f' }" />
          </el-col>
        </el-row>
      </div>
      <div class="body" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="20">
          <el-col :span="6" v-for="el in arrTwo" :key="el.id">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>{{ el.title }}</span>
                </div>
              </template>
              <img :src="el.src" alt="" />
              <div class="bottom">
                <router-link :to="'/detail/headlines/' + el.id"
                  >详细内容<el-icon><Right /></el-icon
                ></router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="public three">
      <div class="head" :style="{ width: $store.state.screenW + 'px' }">
        <el-row>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#555' }" />
          </el-col>
          <el-col :span="4" style="text-align: center; margin-top: 10px">
            <router-link to="/list/comprehensive">
              <img src="@/assets/images/title02.png" alt="" />
              <el-icon
                color="#333"
                class="is-loading"
                style="position: absolute; margin-top: 7px"
                ><Loading
              /></el-icon>
            </router-link>
          </el-col>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#555' }" />
          </el-col>
        </el-row>
      </div>
      <div class="body" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="20">
          <el-col :span="6" v-for="el in arrThree" :key="el.id">
            <el-card :body-style="{ padding: '0px' }">
              <template #header>
                <div class="card-header">
                  <span>{{ el.title }}</span>
                </div>
              </template>
              <img :src="el.src" alt="" />
              <div class="con" v-text="el.param"></div>
              <div class="bottom">
                <router-link :to="'/detail/comprehensive/' + el.id"
                  >详细内容<el-icon><Right /></el-icon
                ></router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="public three four">
      <div class="head" :style="{ width: $store.state.screenW + 'px' }">
        <el-row>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#555' }" />
          </el-col>
          <el-col :span="4" style="text-align: center; margin-top: 10px">
            <router-link to="/list/learning">
              <img src="@/assets/images/title03.png" alt="" />
              <el-icon
                color="#333"
                class="is-loading"
                style="position: absolute; margin-top: 7px"
                ><Loading />
              </el-icon>
            </router-link>
          </el-col>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#555' }" />
          </el-col>
        </el-row>
      </div>
      <div class="body" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="20">
          <el-col :span="6" v-for="el in arrFour" :key="el.id">
            <el-card :body-style="{ padding: '0px' }">
              <template #header>
                <div class="card-header">
                  <span>{{ el.title }}</span>
                </div>
              </template>
              <img :src="el.src" alt="" />
              <div class="con" v-text="el.param"></div>
              <div class="bottom">
                <router-link :to="'/detail/learning/' + el.id"
                  >详细内容<el-icon><Right /></el-icon
                ></router-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="public five">
      <div class="head" :style="{ width: $store.state.screenW + 'px' }">
        <el-row>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#555' }" />
          </el-col>
          <el-col :span="4" style="text-align: center; margin-top: 10px">
            <router-link to="/list/story">
              <img src="@/assets/images/title04.png" alt="" />
              <el-icon
                color="#bbb"
                class="is-loading"
                style="position: absolute; margin-top: 7px"
                ><Loading
              /></el-icon>
            </router-link>
          </el-col>
          <el-col :span="10" class="two01">
            <el-divider :style="{ borderTopColor: '#555' }" />
          </el-col>
        </el-row>
      </div>
      <div class="body" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="20">
          <el-col :span="6" v-for="el in arrFive" :key="el.id">
            <el-card :body-style="{ padding: '0px' }">
              <router-link :to="'/detail/story/' + el.id">
                <img :src="el.src" alt="" />
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="public six">
      <div class="subSix" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="30">
          <el-col :span="12">
            <div class="head">
              <el-row>
                <el-col :span="10" class="two01">
                  <el-divider :style="{ borderTopColor: '#999' }" />
                </el-col>
                <el-col :span="4" style="text-align: center; margin-top: 10px">
                  <router-link to="/listNotice">
                    <img src="@/assets/images/title05.png" alt="" />
                  </router-link>
                </el-col>
                <el-col :span="10" class="two01">
                  <el-divider :style="{ borderTopColor: '#999' }" />
                </el-col>
              </el-row>
            </div>
            <div class="body">
              <el-card class="sixCard">
                <div
                  class="sixScroll"
                  :style="{ height: sixCardH + 'px' }"
                  :scrollTop="moveTop"
                  @mouseover="sixStop"
                  @mouseout="sixMove"
                >
                  <router-link
                    :to="'/detailNotice/' + el.id"
                    v-for="el in arrSix"
                    :key="el.id"
                    :title="el.title"
                  >
                    <el-row :gutter="20">
                      <el-col :span="19">
                        <p v-text="el.index + '.' + el.title"></p>
                      </el-col>
                      <el-col :span="5">
                        <p class="date" v-text="el.date"></p>
                      </el-col>
                    </el-row>
                  </router-link>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="head">
              <el-row>
                <el-col :span="10" class="two01">
                  <el-divider :style="{ borderTopColor: '#999' }" />
                </el-col>
                <el-col :span="4" style="text-align: center; margin-top: 10px">
                  <router-link to="/">
                    <img src="@/assets/images/title06.png" alt="" />
                  </router-link>
                </el-col>
                <el-col :span="10" class="two01">
                  <el-divider :style="{ borderTopColor: '#999' }" />
                </el-col>
              </el-row>
            </div>
            <div class="bodyTwo">
              <el-row :gutter="30">
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a10.jpg" alt="" />
                    <el-icon :size="30" color="white"><ZoomIn /></el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a11.jpg" alt="" />
                    <el-icon :size="30" color="white"><ZoomIn /></el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a12.jpg" alt="" />
                    <el-icon :size="30" color="white"><ZoomIn /></el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a13.jpg" alt="" />
                    <el-icon :size="30" color="white"><ZoomIn /></el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a10.jpg" alt="" />
                    <el-icon :size="30" color="white"><ZoomIn /></el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a11.jpg" alt="" />
                    <el-icon :size="30" color="white"><ZoomIn /></el-icon>
                  </a>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-backtop :right="50" :bottom="50" />
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      arrOne: [],
      arrTwo: [],
      arrThree: [],
      arrFour: [],
      arrFive: [],
      arrSix: [],
      sixCardH: 320,
      moveTop: 0,
      timer: null,
    };
  },
  mounted() {
    this.$axios.get("getData").then((rs) => {
      this.arrOne = rs[0].map((el) => {
        return { id: el.id, src: this.$store.state.URL + "adv/" + el.src };
      });
      this.arrTwo = rs[1].map((el) => {
        let src = el.content.match(/src="[^"]+"/)[0];
        src = src.substring(5, src.length - 1);
        return { id: el.id, src, title: el.title };
      });
      this.arrThree = rs[2].map((el) => {
        let src = el.content.match(/src="[^"]+"/)[0];
        src = src.substring(5, src.length - 1);
        let param = el.content.match(/<p>[^>]+<\/p>/)[0];
        param = param.replace(/<[^>]+>/g, "");
        return { id: el.id, src, param, title: el.title };
      });
      this.arrFour = rs[3].map((el) => {
        let src = el.content.match(/src="[^"]+"/)[0];
        src = src.substring(5, src.length - 1);
        let param = el.content.match(/<p>[^>]+<\/p>/)[0];
        param = param.replace(/<[^>]+>/g, "");
        return { id: el.id, src, param, title: el.title };
      });
      this.arrFive = rs[4].map((el) => {
        let src = el.content.match(/src="[^"]+"/)[0];
        src = src.substring(5, src.length - 1);
        return { id: el.id, src };
      });
      let temp = rs[5].map((el, i) => {
        let date = new Date(el.updatedAt).toLocaleDateString();
        return { index: i + 1, id: el.id, title: el.title, date };
      });
      this.arrSix = [...temp, ...temp];
      this.moveUp();
    });
  },
  methods: {
    moveUp() {
      this.timer = setInterval(() => {
        if (this.moveTop === 320) {
          this.moveTop = 0;
        } else {
          this.moveTop++;
        }
      }, 30);
    },
    sixStop() {
      clearInterval(this.timer);
    },
    sixMove() {
      this.moveUp();
    },
  },
};
</script>
<style scoped lang="less">
div.home {
  background-color: #222429;
  padding-bottom: 30px;
  div.one {
    aside {
      height: 48px;
      background: url(../assets/images/line.png) no-repeat center center,
        url(../assets/images/banner_bg01.png) no-repeat center top;
      background-color: #103909;
    }
  }
  div.public {
    margin-bottom: 20px;
    padding-bottom: 20px;
    div.head {
      margin: auto;
      .el-col.two01 {
        display: flex;
        justify-items: center;
      }
    }
    div.body {
      margin: auto;
      .el-card {
        span {
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          height: 42px;
          line-height: 21px;
        }
        img {
          width: 100%;
          height: 250px;
        }
      }
    }
    &.two {
      background-color: #103909;
      div.body {
        .el-card {
          background-color: #8fd5f9;
          img {
            margin-bottom: 20px;
          }
          div.bottom {
            text-align: right;
            padding-bottom: 20px;
            a,
            a:visited {
              margin-right: 10px;
              text-decoration: none;
              color: rgb(7, 6, 24);
            }
          }
        }
      }
    }
    &.three {
      &.four {
        background-color: #eaeef5;
        .el-card {
          margin-bottom: 10px;
        }
      }
      background-color: #cce1fa;
      div.con {
        overflow: hidden;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        font-size: 14px;
        margin: 7px;
        color: #666;
      }
      div.bottom {
        text-align: right;
        padding-bottom: 20px;
        margin-top: 20px;
        a,
        a:visited {
          margin-right: 10px;
          text-decoration: none;
          color: rgb(7, 6, 24);
        }
      }
    }
    &.five {
      background: url(../assets/images/mode04_bg.png) no-repeat center center;
      .el-card {
        margin-bottom: 10px;
      }
    }
    &.six {
      background-color: #cce1fa;
      margin-bottom: 0;
      .subSix {
        margin: auto;
        .sixCard {
          border: 10px solid #103909;
          div.sixScroll {
            background-color: rgb(26, 26, 56);
            line-height: 40px;
            overflow: hidden;
            a {
              text-decoration: none;
              font-family: "simsun";
              p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #eee;
                padding-left: 10px;
                margin: 0;
                &.date {
                  color: #999;
                  text-align: right;
                  padding-right: 10px;
                }
              }
            }
          }
        }
      }
      .bodyTwo {
        a {
          display: block;
          position: relative;
          margin-bottom: 35px;
          &::before {
            content: "";
            position: absolute;
            height: 0;
            width: 0;
            left: 50%;
            top: 50%;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid #999;
            transition: all 0.4s;
            opacity: 0;
          }
          &:hover::before {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
          }
          img {
            width: 100%;
            height: 90px;
            vertical-align: middle;
          }
          .el-icon {
            position: absolute;
            left: calc(50% - 15px);
            top: calc(50% - 15px);
            opacity: 0;
            transition: opacity 0.4s;
          }
          &:hover .el-icon {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
