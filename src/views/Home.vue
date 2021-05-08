<template>
  <div class="home">
    <cityAndCurrencies test="korv" />
  </div>
</template>

<script>
import cityAndCurrencies from "../components/cityAndCurrencies.vue";

export default {
  name: "Home",
  components: {
    cityAndCurrencies,
  },
};
</script>
