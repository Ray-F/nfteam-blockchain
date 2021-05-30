import { atom } from "recoil";

const addressState = atom({
    key: "address",
    default: "unde",
});

export { addressState };