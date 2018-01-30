<template>
  <div class="news" v-show="showFlag" ref="news">
    <div class="back" @click="hide">
      <Icon type="close-circled"></Icon>
    </div>
    <Input v-model="cityname" style="width: 300px"></Input>
    <div class="province">Province: {{ info.province }}</div>
    <div class="city">City: {{ info.city }}</div>
    <div class="temp">Temperature: {{ info.temperature }}℃</div>
    <div class="weather">Weather: {{ info.weather }}</div>

  </div>
</template>

<script type="text/ecamscript-6">
export default {
  props: {
    loading: {
      type: Boolean
    }
  },
  data() {
    return {
      cityname: '北京',
      info: '',
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
      this.$emit('changeLoading', this.showFlag);
      // this.loading = false;
    }
  },
  computed: {
    _calculateApi() {}
  },
  created() {
    this.$http
      .get(
        'http://restapi.amap.com/v3/weather/weatherInfo?city=110108&key=1aabd9ab4ab35bf467dbcec07d231f67'
        // '../../../data.json'
      )
      .then(
        response => {
          response = response.body;
          this.info = response;
          // console.log(this.live[7]);
          console.log(this.info.lives[0]);
          this.info = this.info.lives[0];
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

.province,
.city,
.weather,
.temp {
  font-size: 20px;
}

.back {
  font-size: 40px;
}
</style>
