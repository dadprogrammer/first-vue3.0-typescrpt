<template>
  <div id="login-page" shadow="always">
    <div class="right-content">
      <div class="login-operations">
        <div class="login-operation-setting" @click="setIpAddress">
          <i class="iconfont iconshezhi"></i>
        </div>
        <div class="login-operation-logout" @click="handleExit">
          <i class="iconfont iconyonghuming1"></i>
        </div>
      </div>
      <img class="company-logo" src="../assets/image/qmzn.png" alt="包钢" @click.right="handleReloadPage"/>
      <!-- 登录表单 -->
      <el-form ref="login" class="login-form" :hide-required-asterisk="true" :model="user" label-position="right"
               label-width="60px" size="small" status-icon>
        <el-form-item label="用户名" prop="username">
          <i class="iconfont iconweibiaoti-- user-position"></i>
          <el-input v-model.trim="user.username"></el-input>
        </el-form-item>
        <el-form-item  label="密码" prop="password">
          <i class="iconfont iconmima1 password-position"></i>
          <el-input v-model.trim="user.password" show-password ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="large" style="width: 100%" type="primary" @click="loginHandle">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="left-content">
      <img class="company-logo" src="../assets/image/baogang.png" alt="包钢" />
    </div>

   <!--设置ip地址弹窗-->
    <el-dialog
      title="设置IP地址"
      width="520px"
      :model-value="dialogVisible"
      :before-close="handleClose"
      :close-on-click-modal="false">
      <el-form :hide-required-asterisk="true" label-position="right" label-width="140px" size="small" status-icon>
        <el-form-item label="IP地址">
          <el-input v-model="newIpAddress" placeholder="请输入IP地址"></el-input>
        </el-form-item>
        <el-form-item label="端口号">
          <el-input v-model="newPort" placeholder="请输入端口号"></el-input>
        </el-form-item>
        <el-form-item label="开启测试环境">
          <el-switch v-model="testEnvironment" active-text="" inactive-text="">
          </el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="dialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="saveNewIpAddress">启用</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
 import type {Users} from  '@/datas/user'
 import{ref,reactive,defineProps} from 'vue'
 import type {PropType} from  'vue'
 // 父组件传来的值可以在这里接受

 // defineProps({
 //     titleInfo:{
 //        type:Object as  PropType <Users>
 //     },
 //     required:true
 // })
 let title = ref<string>('稀土钢冷轧原料库智能库房管理系统')
 let dialogVisible = ref<boolean>(false)
 let  newIpAddress = ref<string>('')
 let  newPort = ref<string>('')
 let testEnvironment = ref<boolean>(false)
 let versionName = ref<number>(10)
 console.log(title)
 interface UserInfo{
   username:'',
   password:''
 }
 const  user:UserInfo =reactive({
   username:'baogang',
   password:'123456'
 })
  //  ref返回的是RefImpl对象 修改的时候必须改value能直接双向绑定的原因是vue在template已帮我们做处理了 dialogVisible=dialogVisibl.value
  function handleClose():void {
    dialogVisible.value=true
  }
  function  loginHandle():void {

  }
  function setIpAddress():void {

  }
  function  handleExit():void {

  }
  function  handleReloadPage():void {

  }
  function saveNewIpAddress():void {

  }

</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/app';

  ::v-deep .el-input--small .el-input__inner {
    height: 30px;
    line-height: 30px;
    padding-left: 30px;
  }

  ::v-deep .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 10px;
    margin-left: 20px;
    margin-top: 50px;
    width: 200px;
  }
  #login-page{
    background: red;
    height: 520px;
    width: 940px;
    .left-content {
      width: 675px;
      height: 520px;
      border: none;
      background: url('../assets/image/login.png');
      background-size: cover;
      color: $app-font-color-normal;
      -webkit-app-region: no-drag;

    }

    .right-content {
      float: right;
      width: 285px;
      height: 520px;
      background: $app-white-background-color;

      .company-logo {
        text-align: center;
        width: 120px;
        height: 35px;
        margin-top: 100px;
        margin-left: 89px;
      }

      .login-form {
        margin: 60px 20px 0px 20px;
        position: relative;
        color: $app-login-person-color;
        position: relative;

        .user-position {
          position: absolute;
          left: 10px;
          color: $app-login-person-color;
          z-index: 999;
        }

        .password-position {
          position: absolute;
          left: 10px;
          color: $app-login-person-color;
          z-index: 999;
        }

      }

      .login-operations {
        position: relative;
        .login-operation-setting {
          position: absolute;
          left: 220px;
          top: 10px;
          cursor: pointer;
          font-size: 18px;
          padding: 5px;
          color: $app-login-person-color;
        }

        .login-operation-logout {
          position: absolute;
          left: 250px;
          top: 10px;
          cursor: pointer;
          font-size: 18px;
          padding: 5px;
          color: $app-login-person-color;
        }

      }
    }

  }

</style>
