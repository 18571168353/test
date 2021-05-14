<template>
  <div>
    <el-button type="primary" class="new" @click="add">新建</el-button>
    <el-button type="primary" class="new" @click="gohome">返回首页</el-button>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPageNum"
      :tableData="tableDataList"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="pagesizeNum"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 列表区域 -->
    <el-table :data="tableDataList" border style="width: 100%" stripe>
      <el-table-column label="ID" type="index" width="180" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" width="180">
        <template slot-scope="scope">
          <!-- 删除 -->
          <el-button
            type="primary"
            icon="el-icon-delete"
            @click="onDelete(scope.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增 -->
    <el-dialog title="新增成员" :visible.sync="dialogVisible" width="30%">
      <el-form ref="userform" :model="userform" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="userform.id"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="userform.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      // 添加
      userform: {
        id: null,
        name: ''
      },
      tableDataList: [], // 分页后的表格数据
      pagesizeNum: 10, // 单页数据量
      currentPageNum: 1, // 当前页码
      total: 0,
      tableData: [
        { id: 0, name: '王小虎0' },
        { id: 1, name: '王小虎1' },
        { id: 2, name: '王小虎2' },
        { id: 3, name: '王小虎3' },
        { id: 4, name: '王小虎4' },
        { id: 5, name: '王小虎5' },
        { id: 6, name: '王小虎6' },
        { id: 7, name: '王小虎7' },
        { id: 8, name: '王小虎8' },
        { id: 9, name: '王小虎9' },
        { id: 10, name: '王小虎10' },
        { id: 11, name: '王小虎11' },
        { id: 12, name: '王小虎12' },
        { id: 13, name: '王小虎13' },
        { id: 14, name: '王小虎14' },
        { id: 15, name: '王小虎15' },
        { id: 16, name: '王小虎16' },
        { id: 17, name: '王小虎17' },
        { id: 18, name: '王小虎18' },
        { id: 19, name: '王小虎19' },
        { id: 20, name: '王大虎20' },
        { id: 21, name: '王大虎21' },
        { id: 22, name: '王大虎22' },
        { id: 23, name: '王大虎23' },
        { id: 24, name: '王大虎24' },
        { id: 25, name: '王大虎25' },
        { id: 26, name: '王大虎26' },
        { id: 27, name: '王大虎27' },
        { id: 28, name: '王大虎28' },
        { id: 29, name: '王大虎29' },
        { id: 30, name: '王大虎30' },
        { id: 31, name: '王大虎31' },
        { id: 32, name: '王大虎32' },
        { id: 33, name: '王大虎33' },
        { id: 34, name: '王大虎34' },
        { id: 35, name: '王大虎35' },
        { id: 36, name: '王大虎36' },
        { id: 37, name: '王大虎37' },
        { id: 38, name: '王大虎38' },
        { id: 39, name: '王大虎39' }
      ],
      newlabledata: [],
      // 新增弹框显示与隐藏
      dialogVisible: false
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getNewData()
    this.total = this.tableData.length
  },
  mounted() {},
  methods: {
    // 每页显示信息条数
    handleSizeChange(newSize) {
      this.pagesizeNum = newSize
      this.getNewData()
    },
    // 进入某一页
    handleCurrentChange(newPage) {
      this.currentPageNum = newPage
      this.getNewData()
    },
    // 返回首页
    gohome() {
      this.$router.push('/home')
    },
    getNewData() {
      // 这里请自行更改为请求表格数据，并赋值给tableDataList；这里为了方便查看对mock数据做了假分页
      this.tableDataList = this.tableData.slice(
        (this.currentPageNum - 1) * this.pagesizeNum,
        this.currentPageNum * this.pagesizeNum
      )
    },
    // 新增
    add() {
      this.dialogVisible = true
    },
    addDate() {
      this.tableData.push(this.$refs.userform._props.model)
      this.getNewData()
      this.total++
      this.$refs.userform.resetFields()
      this.dialogVisible = false
    },
    // 删除
    onDelete(id) {
      this.$confirm('此操作将永久用户 ' + ', 是否继续?', '提示', {
        type: 'warning'
      }).then(id => {
        this.tableDataList.splice(id, 1)
        this.total--
        // 删除页面最后一行后自动跳转到前一页
        if (document.querySelectorAll('tbody tr').length === 1) {
          this.currentPageNum =
            this.currentPageNum > 1 ? this.currentPageNum - 1 : 1
          this.getNewData()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.new {
  margin: 10px;
}
</style>
