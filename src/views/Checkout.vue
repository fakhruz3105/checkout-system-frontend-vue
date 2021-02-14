<template>
  <div class="checkout-page">
    <PageBanner :iconName="'cart'" :pageTitle="'Checkout'" />
    <button @click="gotoItem">Change</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { ItemInterface } from '@/interface/Item.interface'
import PageBanner from '@/components/PageBanner.vue'
import sendAsync from '@/electron/renderer'

@Component({
  components: {
    PageBanner
  }
})
export default class Checkout extends Vue {
  async gotoItem() {
    const res = await sendAsync('test')
    console.log(res)
  }
}
</script>

<style></style>
