<template>
  <div class="header">
      <b-container fluid="lg">
        Header
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

.header {
    background: $secondary-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
}
</style>
