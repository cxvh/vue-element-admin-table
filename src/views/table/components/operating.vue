<template>
  <div class="form-box">
    <el-row>
      <router-link to="/table/add"><el-button size="small" type="primary">添加员工</el-button></router-link>
      <el-button size="small" type="danger" @click="removeSome()">
        <i class="el-icon-delete"></i>
        批量删除
      </el-button>
    </el-row>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    methods:mapActions('table',[
      "removeSome"
    ])
  }
</script>
