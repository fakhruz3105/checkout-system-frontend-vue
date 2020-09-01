<template>
  <div class="header-bg">
      <b-container fluid="lg" class="header">
        <b-icon icon="shop" scale="2"></b-icon>
        <p id="banner">Kedai Maci Ayang</p>
      </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/design";

.header-bg {
    background: $secondary-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .header {
      display: flex;
      align-items: center;
      #banner {
        margin: auto 0;
        margin-left: 15px;
        font-weight: bold;
        font-size: 20px;
        font-family: $logo-font;
      }
    }
}
</style>
