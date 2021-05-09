<template>
  <div>
    <b-col id="snurra" md="6" class="mb-3">
      <p>Wow den snurrar:</p>
      <b-icon
        class="korv"
        icon="arrow-counterclockwise"
        animation="spin-reverse"
        font-scale="3"
      ></b-icon>
    </b-col>

    <div id="logga">
      <img :src="image" />
    </div>
    <input v-model="cityCurrency" />
    <input @click="onClick" type="button" value="Enter a name" />
    <br />
    <br />
    <div v-if="currencies">
      <p v-for="data in fetchedData" :key="data.id">
        {{ data.name }}
      </p>
    </div>
    <p v-else>laddar....</p>
  </div>
</template>



<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import image from "../assets/img/juve.png";

Vue.use(VueAxios, axios);

export default {
  name: "fetch",
  props: ["greet"],

  created() {
    this.fetchCurrencies();
  },
  data() {
    return {
      currencies: null,
      cityCurrency: "",
      image: image,
      hello: this.greet,
      fetchedData: [],
    };
  },
  methods: {
    onClick: function () {
      alert(this.hello + " " + this.cityCurrency);
    },

    fetchCurrencies() {
      let url = "https://api.coinbase.com/v2/currencies";
      this.axios.get(url).then((response) => {
        this.currencies = response.data.data;
        for (var i = 0; i < 10; i++) {
          this.fetchedData.push(this.currencies[i]);
        }
      });
    },
  },
};
</script>

<style scoped>
@media (max-width: 480px) {
  #logga {
    position: absolute;
    top: -25px;
    right: 20px;
  }
  #snurra {
    position: absolute;
    top: -25px;
    left: 10px;
  }
}
#logga {
  position: absolute;
  top: -25px;
  right: 20px;
}
#snurra .korv {
  position: absolute;
  top: 80px;
  left: 80px;
}
</style>