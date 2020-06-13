const state={
  list:[{"id":1591777890105,"name":"张三","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:30","updateTime":"2020-06-10 16:31:30"},{"id":1591777889899,"name":"李四","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:29","updateTime":"2020-06-10 16:31:29"},{"id":1591777889683,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:29","updateTime":"2020-06-10 16:31:29"},{"id":1591777889445,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:29","updateTime":"2020-06-10 16:31:29"},{"id":1591777889231,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:29","updateTime":"2020-06-10 16:31:29"},{"id":1591777889013,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:29","updateTime":"2020-06-10 16:31:29"},{"id":1591777888785,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:28","updateTime":"2020-06-10 16:31:28"},{"id":1591777888576,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:28","updateTime":"2020-06-10 16:31:28"},{"id":1591777888369,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:28","updateTime":"2020-06-10 16:31:28"},{"id":1591777888158,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:28","updateTime":"2020-06-10 16:31:28"},{"id":1591777887943,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:27","updateTime":"2020-06-10 16:31:27"},{"id":1591777887743,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:27","updateTime":"2020-06-10 16:31:27"},{"id":1591777887542,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:27","updateTime":"2020-06-10 16:31:27"},{"id":1591777887292,"name":"1111111111111","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:27","updateTime":"2020-06-10 16:31:27"},{"id":1591777887061,"name":"李三","phone":"2222222222","isopen":true,"creatDate":"2020-06-10 16:31:27","updateTime":"2020-06-10 16:31:27"}],
  checkList:[]
};
const mutations={
  add(state,val){
    state.list=[val,...state.list];
  },
  edit(state,obj){
    state.list.map(function (item,idx) {
      item.id===obj.id&&(state.list[idx]=obj)
    });
  },
  remove(state,id){
    state.list=state.list.filter(item=>item.id !== id)
  },
  removeSome(state){
    let oldList=[...state.list];
    for(let i=0;i<state.checkList.length;i++){
      oldList=oldList.filter(item=>item.id !== state.checkList[i].id)
    }
    state.list=oldList;
  },
  checked(state,list){
    state.checkList=list;
  },
  curpage(state,curpage){
    state.curpage=curpage
  }
};
const actions={
  add({commit},val){
    commit('add',val)
  },
  edit({commit},val){
    commit('add',val)
  },
  remove({commit},id){
    commit('remove',id)
  },
  removeSome({commit},ids){
    commit('removeSome',ids)
  },
  checked({commit},list){
    commit('checked',list)
  },
  curpage({commit},curpage){
    commit('curpage',curpage)
  }
}
// namespaced 命名空间，防止冲突
export default {namespaced:true,state,mutations,actions}
