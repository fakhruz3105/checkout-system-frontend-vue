<template>
  <div class="home">
    <b-table striped hover :items="items" class="text-left"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { ItemInterface } from "@/interface/Item.interface";

const itemStore = namespace("ItemStore");

@Component({
  components: {
  }
})
export default class Home extends Vue {
  @itemStore.State
  private _items!: ItemInterface[];

  created() {
    this._items;
  }

  get items() {
    return this._items;
  }
}
</script>
