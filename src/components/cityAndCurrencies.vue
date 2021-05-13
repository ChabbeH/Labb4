<template>
  <div>
    <div class="wrapper">
      <img :src="image" />

      <div class="stars">
        <b-col md="3" class="mb-3">
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
        </b-col>
        <b-col md="4" class="mb-3">
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
        </b-col>
        <b-col md="5" class="mb-3">
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
        </b-col>
      </div>
    </div>

    <input placeholder="Enter your name" v-model="cityCurrency" />
    <input @click="onClick" type="button" value="Send" />
    <br />
    <br />
    <div class="buttons">
      <h2>List currencies</h2>
      <button @click="fetchCurrencies(10)">10</button>
      <button @click="fetchCurrencies(25)">25</button>
      <button @click="fetchCurrencies(50)">50</button>
    </div>
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
      amount: null,
    };
  },
  methods: {
    onClick: function () {
      alert(this.hello + " " + this.cityCurrency);
    },

    fetchCurrencies(amount) {
      this.currencies = null;
      this.fetchedData = [];
      let url = "https://api.coinbase.com/v2/currencies";
      this.axios.get(url).then((response) => {
        this.currencies = response.data.data;
        if (amount === undefined) {
          for (var i = 0; i < 10; i++) {
            this.fetchedData.push(this.currencies[i]);
          }
        } else {
          for (i = 0; i < amount; i++) {
            this.fetchedData.push(this.currencies[i]);
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.stars {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
}
.stars svg {
  color: rgb(255, 230, 0);
}
.stars div {
  width: auto;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.wrapper img {
  max-width: 100px;
  position: relative;
  right: 30px;
  margin-bottom: 20px;
}
.buttons button {
  margin: 0 5px;
  padding: 0 20px;
  border: none;
  cursor: pointer;
}
.buttons {
  margin-bottom: 20px;
}
</style>