<template>
    <div><div class="form-box">
      <form>
        <el-row :gutter="20">
          <el-col :span="7"><div class="grid-item">
            <el-input
              placeholder="请输入姓名"
              suffix-icon="el-icon-date"
              v-model="name"
              @keyup.enter.native="search"
              >
            </el-input>
          </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-item">
              <el-date-picker
                v-model="date"
                type="monthrange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>&nbsp;&nbsp;&nbsp;
              <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            </div>
          </el-col>
        </el-row>
      </form>
    </div></div>
</template>
<script>
import event from '@/components/event'
    export default {
      data(){
        return {
          name:'',
          date:''
        }
      },
      methods:{
        search(){
          console.log(123)
          var keywords=this.name.trim();
          event.$emit('keywords',keywords);
        }
      }
    }
</script>

<style scoped>

</style>
