import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FiMinimize2 } from "react-icons/fi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setExpandEditor } from "../features/expander/expanderEditorSlice";
import { setMarker } from "../features/marker/markerSlice";

const Editor = () => {
  //const [isExpand, setIsExpand] = useState(false);
  const isExpandEditor = useSelector((state) => state.expanderEditor.value);
  const isExpandPreviewer = useSelector(
    (state) => state.expanderPreviewer.value
  );
  const marker = useSelector((state) => state.marker.value);
  const dispatch = useDispatch();

  const handleExpand = () => {
    //setIsExpand(!isExpand);
    dispatch(setExpandEditor());
  };
  return (
    <div
      className={
        isExpandPreviewer
          ? "hidden"
          : "w-[70%] lg:w-[50%] h-full shadow-md shadow-neutral-600 mx-auto my-2 border border-black"
      }
    >
      <div className="bg-teal-600 flex items-center justify-between p-2 border-b border-black">
        <div className="flex items-center justify-center gap-2">
          <BiEdit size={20} />
          <p className="font-bold text-lg">Editor</p>
        </div>
        <button onClick={handleExpand}>
          {isExpandEditor ? <FiMinimize2 /> : <FaExpandArrowsAlt />}
        </button>
      </div>
      <div className="">
        <textarea
          className={
            isExpandEditor ? "w-full h-screen p-3" : "w-full h-[200px] p-3"
          }
          value={marker}
          onChange={(e) => {
            dispatch(setMarker(e.target.value));
            console.log(marker);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
