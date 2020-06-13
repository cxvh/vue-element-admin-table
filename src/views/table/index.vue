<template>
  <div class="container">
    <search-form />
    <Operating />
    <my-table />
  </div>
</template>
<script>
import SearchForm from './components/search'
import Operating from './components/operating'
import MyTable from './components/tableList'
export default {
  components:{
    SearchForm,
    Operating,
    MyTable
  }
}
</script>
<style>
.container{
  padding: 20px;
}
  .form-box{
    padding-bottom: 15px;
    text-align: left;
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
</style>
