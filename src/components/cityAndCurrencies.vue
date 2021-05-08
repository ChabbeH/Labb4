<template>
  <div>
    <b-col md="6" class="mb-3">
      <p>Wow den snurrar:</p>
      <b-icon
        icon="arrow-counterclockwise"
        animation="spin-reverse"
        font-scale="4"
      ></b-icon>
    </b-col>

    <img :src="image" />
    <input v-model="cityCurrency" />
    <input @click="onClick" type="button" value="Enter a name" />
    <div v-if="currencies">
      <p v-for="currency in currencies" :key="currency.id">
        {{ currency.name }}
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
  props: ["test"],

  created() {
    this.fetchCurrencies();
  },
  data() {
    return {
      currencies: "",
      cityCurrency: "",
      image: image,
      korv: this.test,
    };
  },
  methods: {
    onClick: function () {
      alert(this.cityCurrency + " " + this.korv);
    },

    fetchCurrencies() {
      for (let i = 0; i < 10; i++) {
        let url = "https://api.coinbase.com/v2/currencies";
        this.axios.get(url).then((response) => {
          this.currencies = response.data.data;
        });
      }
    },
  },
};
</script>
