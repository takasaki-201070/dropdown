import { useState, VFC } from "react";
import { Modal } from "./Modal";

export const Dialog2: VFC = () => {
  const [open, setOpen] = useState(false);

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-red-100 w-full h-screen">
      <div>
        <button onClick={() => setOpen(true)}>Modal Open</button>
      </div>
      <Modal open={open} onClose={handleModalClose}>
        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => setOpen(false)}
          >
            Got it, thanks!
          </button>
        </div>
      </Modal>
    </div>
  );
};
