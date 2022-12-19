import { mainStore } from "../lib/store";

export default function UserInfo() {
  const search = mainStore(state => state.search)

  return (
    <>
      <div>search value: {search}</div>
    </>
  );
}
