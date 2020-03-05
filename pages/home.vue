<template>
    <div class="container">
        <div class="title-field">
            <p id="title">MeYin程式學習筆記</p>
        </div>
        <div class="description_field">
            <p>MeYinWeb，程式學習、問題筆記 & 日常生活紀錄，僅供個人使用。</p>
        </div>
        <button @click="test_for_login()">TEST FOR LOGIN</button>
    </div>
</template>

<script>
export default {
    methods: {
        async test_for_login() {
            var vm = this;
            var response = await vm.$axios.post('/users/is_login')
            console.log(response);
            if(response.data.is_login){
                alert('登入了');
            }
            else{
                alert('沒登入');
            }
        }
    }
}
</script>

<style scoped>
    #title{
        font-size: 30px;
        text-align: center;
    }
    .title-field{
        text-align: center;
        margin-top: 20px;
        color: #555;
    }
    .description_field{
        text-align: center;
        margin-top: 10px;
        color: #888;
    }
</style>