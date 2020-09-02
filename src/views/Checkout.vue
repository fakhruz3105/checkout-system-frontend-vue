<template>
  <div class="checkout-page">
    <PageBanner :iconName="'cart'" :pageTitle="'Checkout'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { ItemInterface } from "@/interface/Item.interface";
import PageBanner from "@/components/PageBanner.vue";

const itemStore = namespace("ItemStore");

@Component({
  components: {
    PageBanner
  }
})
export default class Checkout extends Vue {}
</script>

<style></style>
