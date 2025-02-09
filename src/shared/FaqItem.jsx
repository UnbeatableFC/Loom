import { useState } from "react";
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative mb-4">
      <div className="border-b rounded-b-2xl shadow-lg border-blue-300/50">
        <button
          className="w-full p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold text-left">{question}</span>
          <span className="w-8 h-8 flex items-center justify-center font-semibold rounded-full bg-blue-400 text-white text-lg transition-transform duration-300">
            {isOpen ? "-" : "+"}
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 p-4 bg-white"
              : "grid-rows-[0fr] opacity-0 p-0"
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
