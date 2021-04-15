import { createContext, Dispatch, SetStateAction } from "react";

export type ModalOpenType = Dispatch<SetStateAction<boolean>>;

export type ContentType = {
  isModalOpen: boolean;
  setIsModalOpen: ModalOpenType;
};

export default createContext<ContentType>({
  isModalOpen: false, // モーダル開閉ステータス
  setIsModalOpen: () => {}, // ステータス更新関数
});
