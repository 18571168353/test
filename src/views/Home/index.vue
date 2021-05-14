<template>
  <div class="home-container">
    <el-row>
      <el-button type="primary" @click="logout" class="out">退出</el-button>
    </el-row>
    <el-aside width="200px">
      <!-- 侧边栏菜单区域 -->
      <div class="userlist" @click="userlist">用户列表</div>
    </el-aside>
    <el-main>
      <carousel />
    </el-main>
  </div>
</template>

<script>
import carousel from '../Carousel/carousel'
export default {
  name: 'HomeIndex',
  components: { carousel },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    logout() {
      this.$router.push('/')
    },
    userlist() {
      this.$router.push('/userlist')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  background-color: #ccc;
  // height: 100%;
}
.out {
  position: absolute;
  top: 10px;
  right: 20px;
}
.el-aside {
  height: 100%;
}
.userlist {
  background-color: #bbb;
  line-height: 50px;
  text-align: center;
  height: 50px;
  width: 100%;
}
</style>
