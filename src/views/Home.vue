<template>
  <div class="home">
    <cityAndCurrencies greet="HELLO" />
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

<style scoped>
.home {
  background-color: #f5f5f5;
}
</style>