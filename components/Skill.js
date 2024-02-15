import { useState } from "react";

export default function Skill({ skill }) {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className="flex-1 flex"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <div className="relative rounded-full bg-slate-200 flex justify-center items-center border-4 border-black object-bottom">
        <img src={skill.imageURL} className="m-4" height={48} width={48} />
        {showTitle && (
          <p className="animate-in fade-in slide-in-from-left duration-200 absolute -bottom-6 rounded-full bg-yellow-500 border-2 border-black px-2 font-semibold text-xs text-nowrap">
            {skill.title}
          </p>
        )}
      </div>
    </div>
  );
}
