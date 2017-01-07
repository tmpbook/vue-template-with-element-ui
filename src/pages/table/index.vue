<template>
    <div>
  <el-table
    :data="tableData3"
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <p>省: {{ props.row.province }}</p>
        <p>市: {{ props.row.city }}</p>
        <p>住址: {{ props.row.detailAddress }}</p>
        <p>邮编: {{ props.row.zip }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
  </el-table></div>
</template>

<script>
  export default {
    data () {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          detailAddress: '金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>