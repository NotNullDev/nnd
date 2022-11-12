import { useStore } from "@nanostores/react";
import { mainStore } from "../lib/store";

export default function UserInfo() {
  const { search } = useStore(mainStore);

  return (
    <>
      <div>search value: {search}</div>
    </>
  );
}
