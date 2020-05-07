<template>
  <div class="mainHeader tixonex-container">
      <div class="headerNav">
        <div class="clearfix">
          <div class="pull-left logo">
                <img src="./../../public/img/tixonexImages/LOGO.png" alt=""> 
          </div>
          <div class="pull-left">
            <ul class="navList clearfix hidden-md-and-down" >
              
              <li v-for="(item,index) in navList" :key="index">
                <router-link :to="item.path" exact>
                  <!-- {{item[`name_${lang}`]}} -->
                  {{item.name}}

                </router-link>
              </li>
            </ul>
            <i class="hidden-md-and-up el-icon-s-operation"></i>
          </div>
          
          
        </div>
        
      </div>
      <div class="headerInfo clearfix">
        <div class="infoItem"></div>
        <div class="infoItem"></div>
        <div class="infoItem">
          <router-link to="/user/login" exact>{{$t('header.login')}}</router-link>
        </div>
        <div class="infoItem">
          <router-link to="/user/register" exact>{{$t('header.register')}}</router-link>
        </div>
        <div class="infoItem">
          <el-dropdown  @command="handleCommand">
            <div class="el-dropdown-link">
              {{langName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu class="langMenu" slot="dropdown" > 
              <el-dropdown-item v-for="(item,index) in langMenu" :key="index" :command="item.type" class="langMenuItem clearfix" >
                <div style="vertical-align: top;widht:200px" class="clearfix">
                  <img src="./../../public/img/tixonexImages/Bitmap.png" alt=""> 
                  <span >{{item.name}}</span>
                </div>
                
                </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        
      </div>

  </div>
</template>

<script>


export default {
    name:'mainHeader',
    data () {
      return {
        langMenu:[
          {
            type:'cn',
            imgPath:'public/img/tixonexImages/Bitmap.png',
            name:'简体中文'
          },
          {
            type:'en',
            imgPath:'./../../public/img/tixonexImages/Bitmap.png',
            name:'English'
          },
          
        ],
        navList:[],
        lang:localStorage.lang || 'cn',
        langName:''
      }
    },
    watch:{
      '$i18n.locale':{
        deep:true,
        handler(newVal){
          this.setnavList()
        }
      }
    },
    
    mounted(){
      this.getlang(this.lang)
      this.setnavList()
    },
    methods:{
      setnavList(){
        const navList=[
            {
              name:this.$t('header.home'),
              path:'/'
            },
            {
              name:this.$t('header.bbjy'),
              path:'/exchangeCenter'
            },
            {
              name:this.$t('header.fbjy'),
              path:'/OTC'
            },
            {
              name:this.$t('header.zcgl'),
              path:'/MyBalance'
            },
            {
              name:this.$t('header.zhzx'),
              path:'/Personal'
            }
        ]
        this.navList = navList
      },
      handleCommand(command) {
        this.$i18n.locale = command;
        this.getlang(command)
        window.localStorage.setItem('lang',command)
      },
      getlang(type){
        let str = ''
        switch (type) {
          case 'cn':
            str ='简体中文'
            break;
          case 'en':
            str ='English'
            break;
          default:
            str ='简体中文'
            break;
        }
        this.langName = str
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
      clickBtn(){

        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          
        });

      }
    }
}
</script>



<style scoped lang='less'>
.mainHeader{
  // max-width: 1250px;
  // margin: 0 auto;
  height: 100px;
  display: flex;
  
  .headerNav{
    flex: 1;
    // line-height: 100px;
    height: 100%;
    .navList{
      li{
        float: left;margin-right: 60px;
        line-height: 100px;
        a{
          color: #333333;
          display: block;
          width: 100%;
          height: 100%;
          font-size: 16px;
          &:hover{
            color: #1a8bf4;
          }
        }
        .currentActive{
        color: #1a8bf4;
        }
      }
    }
    .logo{
      width: 70px;
      height: 100%;
      margin-right:69px ;
      padding-top: 15px;
    }
  }
  .headerInfo{
    width: 280px;
    .infoItem{
      float: left;
      margin-right: 28px;
      line-height: 100px;
      a{
        color: #333333;
      }
      .currentActive{
        color: #1a8bf4;
        }
      &:last-child{
        margin: 0;
      }
    }
    .el-dropdown-link{
      width:120px;
      height:40px;
      border-radius:20px;
      border:1px solid rgba(153,153,153,1);
      text-align: center;
      line-height: 40px;
      font-size:16px;
      color: #333333;
      cursor: pointer;
    }
    
  }
  


  /* .box{
    width: 100px;
    height: 100px;
    background: red;
  } */
}

.myactive{
  color: #1a8bf4 !important;
}

.langMenu{
  padding: 10px 0;
  .el-dropdown-menu__item{
    line-height: normal;
  }
  .langMenuItem{
    // margin-bottom: 30px;
    padding: 10px 15px;
    :last-child{
      margin: 0;
    }
    img{
      float: left;
      width: 36px;
      height: 24px;
      margin-right: 15px;
    }
    span{
      float: left;
      color: #666;
      font-size: 16px;
      line-height: 24px;
    }
  }

}



</style>