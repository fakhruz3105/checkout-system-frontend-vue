<template>
  <div class="home">
    <PageBanner :iconName="'box-seam'" :pageTitle="'List of Items'" />
    <b-input-group size="md" class="search-item mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        v-model="searchItem"
        type="search"
        placeholder="Search items"
      ></b-form-input>
    </b-input-group>
    <div class="tables">
      <div>
        <h2>All Items</h2>
        <b-table
          striped
          :items="items"
          :table-class="'item-table'"
          show-empty
          empty-text="No item found"
        >
        </b-table>
      </div>
      <div>
        <h2>Low stock</h2>
        <b-table
          striped
          :items="lowStockItems()"
          :table-variant="'danger'"
          :table-class="'low-stock-item-table'"
          show-empty
          empty-text="No out of stock item"
        ></b-table>
      </div>
    </div>
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
  private searchItem = "";
  private items: ItemInterface[] = [];
  private minimumStock = 10;

  @itemStore.State
  private _items!: ItemInterface[];

  created() {
    this.items = this._items;
  }

  @Watch("searchItem")
  onSearchItemChanged(val: string) {
    const valLowerCase = val.toLowerCase();
    this.items = this._items;
    this.items = this.items.filter(
      item =>
        item.id.toString().includes(valLowerCase) ||
        item.name.toLowerCase().includes(valLowerCase)
    );
  }

  lowStockItems(): object[] {
    return this.items
      .filter(item => item.stock < this.minimumStock)
      .map(({ name, stock }) => {
        return {
          name,
          stock
        };
      });
  }
}
</script>

<style lang="scss" scoped>
@import "@/design/_colors";

.search-item {
  margin: 20px 0;
}

.tables {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  column-gap: 20px;
}

.item-table {
  background: $quarternary-color;
}

h2 {
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
}
</style>
