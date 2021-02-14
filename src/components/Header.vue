<template>
  <div class="header-bg">
    <b-container fluid="lg" class="header">
      <div @click="gotoCheckout" class="logo">
        <b-icon icon="shop" scale="3"></b-icon>
        <p id="banner">Kedai Maci Ayang</p>
      </div>
      <ul class="navs">
        <li class="nav-items">
          <a @click="gotoCheckout" title="Checkout">
            <b-icon icon="cart" scale="2"></b-icon>
          </a>
        </li>
        <li class="nav-items">
          <a @click="gotoStock" title="Stock">
            <b-icon icon="box" scale="2"></b-icon>
          </a>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  gotoCheckout() {
    if (this.$route.path !== "/") {
      this.$router.push({ name: "Checkout" });
    }
  }

  gotoStock() {
    if (this.$route.path !== "/items") {
      this.$router.push({ name: "ListofItems" });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/design";

.header-bg {
  background: $secondary-color;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;

      #banner {
        margin: auto 0;
        margin-left: 25px;
        font-weight: bold;
        font-size: 25px;
        font-family: $logo-font;
      }

      &:hover {
        cursor: pointer;
      }
    }

    .navs {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0;

      .nav-items {
        list-style: none;
        a {
          display: block;
          padding: 10px 15px;

          &:hover {
            cursor: pointer;
            color: $primary-color;
          }
        }
      }
    }
  }
}
</style>
