<template>
    <div>
      <el-table
        :data="pageList"
        ref="multipleTable"
        @selection-change="checked"
        border
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="creatDate"
          label="创建时间">
        </el-table-column>
        <el-table-column
          label="是否启用"
          width="150">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isopen"
              active-text="禁用"
              inactive-text="启用"
            >
            </el-switch>
        </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <router-link :to="'/table/edit/'+scope.row.id"><el-button type="text" size="small">编辑</el-button></router-link>
            <el-button type="text" size="small" @click="remove(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button-group class="table-pages" v-if="this.list.length">
        <el-button class="btn" size="small" type="primary" icon="el-icon-arrow-left"
      :disabled="curpage<2"
        @click="prev"
        ></el-button>
        <el-button class="btn" size="small" type="primary">{{curpage}}</el-button>
        <el-button class="btn" size="small" type="primary" icon="el-icon-arrow-right"
        :disabled="pages-curpage<1"
        @click="next"
        ></el-button>
      </el-button-group>
    </div>
</template>
<script>
import event from '@/components/event'
import {mapActions} from 'vuex'
    export default {
      data(){
        return {
          pages:1,
          curpage:1,
          list:[],
          pageList:[]
        };
      },
      methods:{
        ...mapActions('table',[
          'open',
          'checked'
        ]),
        remove(){
          this.$store.commit('crement/mutIncrement',v)
        },
        searchFn(keywords){
          var list=[...this.$store.state.table.list];
          const reg=new RegExp(keywords);
          this.list=list.filter(item=>reg.test(item.name));

          this.pages=Math.ceil(this.list.length/5);
          this.curpage=1;
          this.computePages();
        },
        prev(){
          this.curpage--;
          this.computePages();
        },
        next(){
          this.curpage++;
          this.computePages();
        },
        computePages(){
          const cur=this.curpage;
          let pageList=[];
          for(let i=(cur-1)*5;i<cur*5;i++){
            this.list[i]&&pageList.push(this.list[i]);
          }
          this.pageList=pageList;
        },
        initList(){
          this.list=[...this.$store.state.table.list];
          this.pages=Math.ceil(this.list.length/5);
          this.computePages();
        }
      },
      watch:{
        '$store.state.table.list':function(nVal,oVal){
          //console.log(nVal,oVal)
          this.initList();
        }
      },
      mounted(){
        // 初始化 List
        this.initList();
        // 绑定自定义事件，第二个参数建议用指针，方便解绑
        event.$on('keywords',this.searchFn)
      },
      beforeDestroy(){
        // 及时摧毁，否则可能造成内存泄漏
        event.$off('keywords',this.searchFn)
      }
  }
  //https://element.eleme.cn/#/zh-CN/component/switch
</script>

<style scoped>
  .table-pages{
    padding:10px;
    display: block;
  }
  .table-pages .btn{
    margin:0 5px;
  }
</style>
