<template>
  <div class="home">
    <PageBanner :iconName="'box-seam'" :pageTitle="'List of Items'"  />
    <b-input-group size="md" class="search-item mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input v-model="searchItem" type="search" placeholder="Search items"></b-form-input>
    </b-input-group>
    <b-table
      striped
      :items="items"
      :table-class="'item-table'"
      :tbody-class="'item-table-body'"
      :tbody-tr-class="'item-table-body'"
    ></b-table>
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
export default class ListofItems extends Vue {
  private searchItem: string = "";
  private items: ItemInterface[] = [];

  @itemStore.State
  private _items!: ItemInterface[];

  created() {
    this.items = this._items;
  }

  @Watch("searchItem")
  onSearchItemChanged(val: string) {
    const valLowerCase = val.toLowerCase();
    this.items = this._items;
    this.items = this.items.filter(item => item.id.toString().includes(valLowerCase) || item.name.toLowerCase().includes(valLowerCase));
  }
}
</script>

<style lang="scss" scoped>
@import "@/design/_colors";

.search-item {
  margin: 20px 0;
}

.item-table {
  background: $quarternary-color;
}
</style>
