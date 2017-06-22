<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
     UserName:<input v-model="user.username"/>
     Password:<input v-model="user.password"/>
     
     <button v-on:click="login()">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

import router from '../router/index';

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to App and Login form',
      user:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    login(){
        axios.post('http://localhost:8000/user/login',this.user)
        .then(function(user){
            if(user.data){
                window.localStorage.setItem('token',user.data.token);
                app.__vue__.$router.push({path:'books'})
            }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
