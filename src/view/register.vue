<template>
  <div class="hello">
    <p>注册页</p>
    <p class="call">222</p>
    <group title="set is-type=email" class="ignore">
      <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
    </group>
  </div>
</template>

<script>
  import { XInput, Group } from 'vux';
  export default {
    name: 'HelloWorld',
    components: {
      XInput,
      Group
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      const str = 'aaabbcccbbbccbb';
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .hello {
    p {
      width: 100px;
      height: 100px;
    }
  }
</style>
