<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      token: "",
    };
  },
  mounted() {},
  created() {
    //token为地址栏中想要的参数名称
    this.getUrl("token");
  },
  methods: {
    getUrl(name, url) {
      if (!url) url = location.href;
      console.log(url, name, "url");
      var op = url.split("=")[1];//地址栏的参数
      sessionStorage.setItem('token',op)
      console.log(op, "name");
    },
  },
};
</script>

<style>
#app
{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    text-align: center;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50;
  margin-top: 60px; */
}

</style>
