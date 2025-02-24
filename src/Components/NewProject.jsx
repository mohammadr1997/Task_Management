import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      (enteredDescription.trim() === "") | (enteredDueDate.trim() === "")
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-base md:text-xl text-stone-600 font-bold">
          Invalid Inputs
        </h2>
        <p className="text-stone-500 text-sm md:text-lg font-bold">
          Oops...looks like invalid Inputs{" "}
        </p>
        <p className="text-stone-500 text-sm md:text-lg font-bold">
          please make sure you inserted valid inputs
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex justify-center md:justify-end items-center gap-4 mt-5">
          <li>
            <button
              onClick={onCancel}
              className=" px-6 py-1 text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-100 rounded-md px-6 py-1 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <Input ref={title} label={"Title"} />
        <Input ref={description} label={"Description"} textarea />
        <Input ref={dueDate} label={"Due Date"} type="date" />
      </div>
    </>
  );
}
