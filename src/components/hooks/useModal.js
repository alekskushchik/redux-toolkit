import {useState } from "react";

export const useModal = ({ initialOpen }) => {
  const [modal, setModal] = useState({ isOpen: initialOpen });

  const renderModal = (title, content, footer) => {
    setModal((prev) => ({
      ...prev,
      isOpen: true,
      title,
      footer,
      content,
    }));
  };

  const openModal = () => setModal((prev) => ({ ...prev, isOpen: true }));
  const closeModal = () => setModal((prev) => ({ ...prev, isOpen: false }));

  return { modal, renderModal, openModal, closeModal };
};
