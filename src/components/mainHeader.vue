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
                <router-link v-if="item.path==='/'" exact  active-class="myactive" :to="item.path">
                  {{item.name}}
                  <div class="sub"></div>
                </router-link>
                <router-link v-else :to="item.path">
                  {{item.name}}
                  <div class="sub"></div>
                </router-link>
                
              </li>
            </ul>
            <i class="hidden-md-and-up el-icon-s-operation"></i>
          </div>
          
          
        </div>
        
      </div>
      <div class="headerInfo clearfix">
        <div class="infoItem" v-if="isLogin">
          <i class="iconfont iconuser"></i>
           <span class="name">{{userInfo.userName}}</span>
          </div>
        <div v-else>
          <div class="infoItem" >
            <router-link to="/user/login" style="display:block;font-size:16px;" exact>
              {{$t('header.login')}}
              <div class="sub"></div>
            </router-link>
          </div>
          <div class="infoItem" style="margin-right:28px">
            <router-link to="/user/register" style="display:block;font-size:16px;" exact>
              {{$t('header.register')}}
              <div class="sub"></div>
            </router-link>
          </div>
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
import { isEmpty } from '@/utils/auth'


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
        langName:'',
        isLogin:isEmpty(this.$store.state.user.token),
        userInfo:this.$store.state.user.userInfo
      }
    },
    watch:{
      '$i18n.locale':{
        deep:true,
        handler(newVal){
          this.setnavList()
        },
      },
      '$route':{
        deep:true,
        handler(newVal){
          console.log(this.$store.state.user.token)
          console.log(this.$store.state.user.userInfo)
          this.isLogin = isEmpty(this.$store.state.user.token)
          this.userInfo = this.$store.state.user.userInfo
        },
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



<style scoped lang='scss'>

.mainHeader{
  height: 100px;
  display: flex;

  
  .headerNav{
    flex: 1;
    // line-height: 100px;
    height: 100%;
    .navList{
      li{
        float: left;
        margin-right: 60px;
        line-height: 100px;
        
        a{
          color: #333333;
          display: block;
          font-size: 16px;
          &:hover{
            color: $mainColor;
          }
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
      position: relative;
      .iconuser{
        font-size: 18px;
        display: inline;
        color: #666;
      }
      .name{
        font-size: 16px;
        display: inline;
        margin-left: 5px;
        cursor: pointer;
      }
      a{
        color: #333333;
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
  

}

.sub{
  position: absolute;
  left: 50%;
  top: 68px;
  margin-left: -12px;
  width: 25px;
  border-top:1px solid #2E54EB ;
  border-bottom:1px solid #2E54EB ;
  display: none;
}

.myactive{
  color: #2E54EB !important;
  position: relative;
  .sub{
    display: block;
  }
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