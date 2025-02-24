import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="p-3 rounded-md">
      {children}
      <form method="dialog" className="text-right m-2">
        <button className=" my-2 text-stone-50 bg-stone-600 px-8 md:px-4 py-1 hover:text-stone-300  rounded text-sm md:text-xl">
          {" "}
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
