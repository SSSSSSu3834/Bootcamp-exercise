import { atom } from "recoil";

// 한 덩어리가 변수
export const IsEditState = atom({
  // 변수명
  key: "isEditState",
  // 초기값
  default: true,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
