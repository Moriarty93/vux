<template>
  <div class="hello">
    <p>登录页</p>
    <p class="call" @click="to">2222</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    to() {
      this.$router.push('/register');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .hello {
    p {
      height: 100px;
      color: @moriarty;
      border-radius: 50%;
    }
  }
</style>
