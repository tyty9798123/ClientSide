<template>
  <div class="Login">
      <div class="modal fade" id="loginDialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">登入您的 MeYin 帳戶!</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <input type="text" class="form-control" id="loginAccount" placeholder="帳號" autofocus>
                      <input type="password" class="form-control mt-3" id="loginPassword" placeholder="密碼" >
                      <el-button type="danger" class="w-100 mt-3" @click="login_btn_clicked()">登入</el-button>
                      <!--
                      <el-button type="danger" class="w-100 mt-3" @click="login_btn_clicked()" :disabled="!checkInputsLength">登入</el-button>
                      -->
                      <div class="text-center mt-3">
                          或 <a href='/' style="text-decoration: none;">忘記密碼</a>
                      </div>
                      <div class="text-center mt-4">
                          還沒有建立帳戶嗎？ <a href='/' style="text-decoration: none;">註冊</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
  data(){
    return {
      loginAccount: '',
      loginPassword: '',
    }
  },
  created(){
    var vm = this;
    vm.$bus.$on('show_log_in_dialog', () =>{
      $('#loginDialog').modal('show')
      var loadingInstance1 = Loading.service({fullscreen: true});
      setTimeout(() => {
          loadingInstance1 && loadingInstance1.close()
      }, 300)
    })
  },
  methods: {
    async login_btn_clicked(){
      var loadingInstance1 = Loading.service({fullscreen: true});
      var vm = this;
      if(true){
        /*
        var data = {
          account: vm.loginAccount,
          password: vm.loginPassword
        }
        */
        var data = {
          account: $('#loginAccount').val(),
          password: $('#loginPassword').val(),
        }
        
        var response = await vm.$axios.post('/users/login', data)
        loadingInstance1 && loadingInstance1.close()
        if ( response.data.success ){
          //vm.$checkAuth();
          vm.$message({
            message: '登入成功！',
            type: 'success'
          });
          vm.loginAccount = "";
          vm.loginPassword = "";
          $('#loginDialog').modal('hide')
        }
        else {
          vm.$message.error('帳號或密碼錯誤！');
        }
      }
    }
  },
  computed: {
    //checkInputsLength(){
    //  return ( this.loginAccount.length > 0 && this.loginPassword.length > 0 )
    //}
  },
}
</script>

<style>
</style>