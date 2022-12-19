import create from "zustand";
import { immer } from "zustand/middleware/immer";

type MainStoreType = {
  search: string;
  modalOpen: boolean
};

export const mainStore = create<MainStoreType>()(
  immer((set,get,store) => {
    return {
      modalOpen: false,
      search: ""
    }
  })
);
