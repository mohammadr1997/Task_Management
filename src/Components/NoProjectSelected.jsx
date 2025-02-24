import Button from "./Button.jsx";
import noProjectSelected from "../assets/man-checking-giant-check-list-background_23-21480960251.jpg";
export default function NoProjectSelected({ onAddNewProject }) {
  return (
    <div className=" w-full text-center mt-8">
      <img
        src={noProjectSelected}
        className="w-52 h-52  md:w-96 md:h-96 object-contain rounded-md p-2 mx-auto"
      />
      <h2 className="uppercase text-xl font-bold my-2 text-stone-500">
        {" "}
        No Project Selected
      </h2>
      <p className="text-stone-400 my-2">
        please select a new project or get start a new one
      </p>
      <p>
        <Button onClick={onAddNewProject}>Create a new project</Button>
      </p>
    </div>
  );
}
