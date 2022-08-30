<template>
  <div class="footer">
    <div class="one">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="6">
          <el-row>
            <el-col :span="8" class="sina"></el-col>
            <el-col :span="8">
              <img src="@/assets/images/ma01.png" alt="" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="weixin"></el-col>
            <el-col :span="8">
              <img src="@/assets/images/ma02.png" alt="" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="9" class="bottom-center">
          <h4>@北京师范大学</h4>
          <p>
            #百廿初心 红色基因##我的青春宣言# 百余年引领时代，木铎金声传风采。
            献礼建党百年和建校120周年， 北师大人唱响《青春恰时来》！
          </p>
        </el-col>
        <el-col :span="9" class="bottom-center right">
          <h4>@北京师范大学</h4>
          <p>
            北京师范大学举办“庆华诞 学党史”主题晚会
            百年前，马克思主义来到中国，它就像一道光，点亮前方的路。
            百年征程，革命战场上的炮火、找寻真理的灯火、英雄化作的点点星光，这些光芒不断汇聚。
            信仰之光，代代传承，生生不息。
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="two">
      <p :style="{ width: $store.state.screenW + 'px' }">
        © 版权所有 北京师范大学 地址：北京市新街口外大街19号 邮编：100875
        京ICP备10031106号-58 京公网安备110402430002号 <span>电话查号台：010-58806183</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>

<style scoped lang="less">
div.footer {
  div.one {
    background-color: #92e6ec;
    padding: 30px 0 50px;
    .el-row {
      margin: auto;
      .el-col {
        .sina {
          width: 90px;
          height: 90px;
          background: #00aecd url(../assets/images/sina.png) no-repeat center
            center;
          background-size: 90px 90px;
          margin: 0 10px 10px 0;
        }
        .weixin {
          margin-right: 10px;
          width: 90px;
          height: 90px;
          background: #00aecd url(../assets/images/weixin.png) no-repeat center
            center;
          background-size: 90px 90px;
        }
      }
      .bottom-center {
        h4 {
          background: url(../assets/images/small_sina.png) no-repeat left center;
          padding-left: 40px;
        }
        p {
          line-height: 2;
          color: #555;
        }
        &.right {
          padding-left: 40px;
          h4 {
            background-image: url(../assets/images/small_weixin.png);
          }
        }
      }
    }
  }
  div.two{
    line-height: 80px;
    background: url(../assets/images/footer_bg.jpg) no-repeat center center;
    p{
      margin: auto;
      color: white;
      span{
        display: inline-block;
        background: url(../assets/images/tel_bg.png)  no-repeat left center;
        padding-left: 40px;
        margin-left: 10px;
      }
    }
  }
}
</style>
