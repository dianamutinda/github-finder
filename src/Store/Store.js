import { create } from "zustand";

const dataSore = (set) => ({
  username: "github",

  captureUsername: (newUser) => {
    set(() => {
      return { username: newUser };
    });
  },
});
const useDataSore = create(dataSore);
export default useDataSore;
