import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 
      shadow-[0_4px_8px_rgba(86,21,48,0.7)]
      border-r-[6px] border-[#76153C]
      transition-all duration-300">


        {/* HEADER */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 text-left"
        >
          {/* ICON */}
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
            <ChevronDown
              size={20}
              className={`text-gray-700 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* TEXT */}
          <span className="text-xl font-semibold text-gray-700">
            {question}
          </span>
        </button>

        {/* CONTENT */}
        <div className={`ml-14 ${open ? "block" : "hidden"}`}>
  <p className="text-gray-600 mt-3 leading-relaxed text-base">
    {answer}
  </p>
</div>
      </div>

      
  );
};

export default Faq;