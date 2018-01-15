<template>
  <div class="news" v-show="showFlag" ref="news">
    <div class="city">City: {{ cityName }}</div>
    <div class="weather">Weather: {{ }}</div>
  </div>
</template>

<script type="text/ecamscript-6">
  export default {
    props: {
      weatherInfo: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
        cityName: '北京'
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      }
    },
    created() {
      this.$http.get('http://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=1aabd9ab4ab35bf467dbcec07d231f67').then(
        response => {
          response = response.body;
          console.log(response.lives[0].weather);
        },
        response => {
          // error callback  ../../../data.json
        }
      );
    }
  };
</script>

<style>
.news {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0px;
  z-index: 30;
  width: 100%;
  background: #fff;
}
</style>
