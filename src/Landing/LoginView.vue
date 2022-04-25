<template>

    <!-- Login -->
    <div class="pt-40 pb-32">
        <div class="container">
            <div class="w-full">
                <div class="border-cyan-200 rounded-md shadow-sm shadow-secondary max-w-sm mx-auto px-3 pt-3">
                    <img src="../assets/img/user.png" alt="User" class="max-w-full mx-auto">
                    <div class="py-3 px-2 my-3 bg-red-500/80 text-sm text-center items-center text-dark rounded-md w-full" v-if="error_msg">{{error_msg}}</div>
                    <div class="py-3 px-2 my-3 bg-primary/80 text-sm text-center items-center text-dark rounded-md w-full" v-if="success_msg">{{success_msg}}</div>
                    <div class="px-2 mt-3 border rounded-md bg-slate-100">
                        <input type="email" v-model="email" placeholder="Email" class="w-full my-3 border-b border-slate-300 p-1 bg-transparent focus:outline-none required:bg-red-500">
                        <input type="password" v-model="password" placeholder="Password" class="w-full my-3 border-b border-slate-300 p-1 bg-transparent focus:outline-none">
                    </div>
                    <router-link to="/" class="text-[14px] text-cyan-700 italic underline font-serif px-2">forgot password</router-link>
                    <div class="py-3">
                        <button class="bg-transparent rounded-lg shadow-sm border font-bold text-lg w-full py-1 px-2 hover:bg-secondary hover:shadow-md hover:text-white transition duration-300 ease-in-out" v-on:click="signin">Sign In</button>
                        <div class="clear-both"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   
</template>


<script>
import axios from 'axios'

export default {
    name: "login",
    props: {
        url: String
    },
    data() {
      return{
        email: null,
        password:'',
        error_msg: null,
        success_msg: null,

      }  
    },
    methods:{
        async signin()
        {

            if (!this.email || !this.password) {
                this.error_msg = 'Email & Password Is Required!'

                setTimeout(() => {
                    this.error_msg = !this.error_msg;
                }, 4000)

                return this.error_msg

            } 

            try {
                let res = await axios({
                        url: this.url + '/api/v1/auth',
                        method: 'post',
                        data: {email: this.email, password: this.password},
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        if(res.status == 200){
                            // test for status you want, etc
                            this.success_msg = "Success login🤝 wait to redirect.."
                            
                            const resp = res.data.data

                            localStorage.setItem("token", resp.token)

                            this.$router.push({name: 'Dashboard'})
                        }    
                        // Don't forget to return something   
                        return this.success_msg
                    }
            catch (err) {
                const error_msg = err.response.data.data.message


                this.error_msg = error_msg + '!!'
                

                setTimeout(() => {
                    this.error_msg = !this.error_msg;
                }, 4000)

                return error_msg

            }
        }
        
    }
}
</script>