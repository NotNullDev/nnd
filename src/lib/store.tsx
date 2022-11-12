import { atom } from "nanostores";

type MainStoreType = {
  search: string;
};

export const mainStore = atom<MainStoreType>({
  search: "",
});
