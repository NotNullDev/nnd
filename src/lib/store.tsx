import { atom } from "nanostores";

type MainStoreType = {
  search: string;
  modalOpen: boolean
};

export const mainStore = atom<MainStoreType>({
  search: "",
  modalOpen: true
});
