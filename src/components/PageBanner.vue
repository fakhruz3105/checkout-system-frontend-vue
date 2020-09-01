<template>
  <div class="page-banner">
    <b-icon :icon="iconName" scale="3"></b-icon>
    <h1 class="page-title">{{ pageTitle }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class PageBanner extends Vue {
  @Prop({ default: "search" }) readonly iconName!: string;
  @Prop({ default: "Test" }) readonly pageTitle!: string; 
}
</script>

<style lang="scss" scoped>
@import "@/design";

.page-banner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-title {
  margin-left: 20px;
  text-align: center;
  font-size: 20px;
  padding: 40px 0;
}
</style>
