import {
  Module,
  VuexModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { ItemInterface } from "@/interface/Item.interface";

@Module({
  namespaced: true
})
export default class ItemStore extends VuexModule {
  private _items: ItemInterface[] = [
    {
      id: 9415007031727,
      name: "Susu Fernleaf 1-3 Tahun (900g)",
      stock: 20,
      price: 5.25
    },
    {
      id: 9556191071639,
      name: "Prego Tomato Pasta Sauce (350g)",
      stock: 5,
      price: 3.25
    },
    {
      id: 9555623000117,
      name: "Soda Bicarbonate (100g)",
      stock: 11,
      price: 2.85
    }
  ];

  get items(): ItemInterface[] {
    return this._items;
  }

  @Mutation
  private setItems(items: ItemInterface[]): void {
    this._items = items;
  }

  @Action
  private fetchItems(items: ItemInterface[]): void {
    this.context.commit("setItems", items);
  }
}
