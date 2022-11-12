import toast, { Toaster } from "react-hot-toast";
import { mainStore } from "../lib/store";

export default function UserData() {
  return (
    <>
      <Toaster position="bottom-left" />
      <input
        className="input input-bordered"
        onChange={(e) => {
          toast("hi!");
          mainStore.set({
            search: e.currentTarget.value,
          });
        }}
      />
    </>
  );
}
