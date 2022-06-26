import React from "react";
import { MdPreview } from "react-icons/md";
import { FiMinimize2 } from "react-icons/fi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setExpandPreviewer } from "../features/expander/expanderPreviewerSlice";
import { marked } from "marked";

const Previewer = () => {
  //const [isExpand, setIsExpand] = useState(false);
  const isExpandPreviewer = useSelector(
    (state) => state.expanderPreviewer.value
  );
  const isExpandEditor = useSelector((state) => state.expanderEditor.value);
  const marker = useSelector((state) => state.marker.value);
  const dispatch = useDispatch();

  const handleExpand = () => {
    //setIsExpand(!isExpand);
    dispatch(setExpandPreviewer());
  };

  return (
    <div
      className={
        isExpandEditor
          ? "hidden"
          : "w-[90%] lg:w-[60%] h-full shadow-md shadow-neutral-600 mx-auto my-2 border border-black"
      }
    >
      <div className="bg-teal-600 flex items-center justify-between p-2 border-b border-black">
        <div className="flex items-center justify-center gap-2">
          <MdPreview size={20} />
          <p className="font-bold text-lg">Previewer</p>
        </div>
        <button onClick={handleExpand}>
          {isExpandPreviewer ? <FiMinimize2 /> : <FaExpandArrowsAlt />}
        </button>
      </div>
      <div
        className={
          isExpandPreviewer
            ? "bg-white w-full h-screen p-3 overflow-scroll"
            : "bg-white w-full h-[600px] p-3 overflow-scroll"
        }
        dangerouslySetInnerHTML={{
          __html: marked(marker),
        }}
      ></div>
    </div>
  );
};

export default Previewer;
