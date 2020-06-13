<template>
  <div class="container">
    <div class="form-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-item">
            <label class="grid-label" for="name">姓名：</label>
            <el-input v-model="name" id="name" placeholder="请输入姓名"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-item">
            <label class="grid-label" for="phone">电话：</label>
            <el-input v-model="phone" id="phone" placeholder="请输入电话"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-item grid-item-switch">
            <el-switch
              v-model="isopen"
              active-text="禁用"
              inactive-text="启用"
            >
            </el-switch>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-item">
            <el-button size="small" @click="edit" type="primary">编辑员工</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name:'addItem',
    data(){
      return {
        name:'',
        phone:'',
        isopen:true
      }
    },
    methods:{
      edit(){
        let form=this.form;
        const now=new Date();
        let year=now.getFullYear();
        let month=now.getMonth()+1;
        let day=now.getDate();
        let hour=now.getHours();
        let min=now.getMinutes();
        let sen=now.getSeconds();

        form.name=this.name;
        form.phone=this.phone;
        form.isopen=this.isopen;
        form.updateTime=year+'-'
          +(month<10?'0'+month:month)
          +'-'+(day<10?'0'+day:day)
          +' '+(hour<10?'0'+hour:hour)
          +':'+(min<10?'0'+min:min)
          +':'+(sen<10?'0'+sen:sen);
        this.$store.commit('table/edit',form);
        this.$message('编辑成功！');
      }
    },
    mounted() {
      //this.$route.params.id
      const form=this.$store.state.table.list.filter(item=>this.$route.params.id==item.id);
      if(form.length===0){
        return this.$router.push("/add");
      }
      this.name=form[0].name;
      this.phone=form[0].phone;
      this.isopen=form[0].isopen;
      this.form =form[0];
    }
  }
</script>
<style>
.container{
  padding: 20px;
}
  .form-box{
    padding-bottom: 15px;
  }
  .grid-item{
    display: flex;
    white-space: nowrap;
    align-items: center;
  }
  .grid-label{
    height: 100%;
  }
  .grid-btn{
    height:40px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .grid-item-switch{
    height: 40px;
  }
</style>
