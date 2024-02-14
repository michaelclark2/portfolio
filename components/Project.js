export default function Project({ project }) {
  return (
    <div
      key={project.id}
      className="rounded-2xl border-4 border-black py-2 bg-slate-200 shadow mb-4 p-4"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-extrabold text-xl sm:text-2xl">{project.title}</h3>
        <a
          href={project.deployedURL}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-teal-800 h-6 w-6 flex justify-center items-center border-2 border-black -mr-1"
        >
          <img src="./arrow-forward-outline.svg" />
        </a>
      </div>
      <div className="flex mb-2 flex-col">
        <div className="flex sm:space-x-4">
          <img
            className="rounded-2xl border-4 border-black max-w-64 sm:block hidden"
            src={`https://picsum.photos/seed/${project.id}/300/200`}
          />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae
            itaque esse quo odit iure amet pariatur dignissimos ipsa neque,
            dolores recusandae soluta iusto hic quisquam. Nihil quam velit
            deleniti?
          </p>
        </div>

        <div className="flex flex-wrap mt-4">
          <span className="rounded-2xl border-2 border-black bg-yellow-500 py-1 text-xs font-bold px-3 mr-2 mb-2">
            React Native
          </span>
          <span className="rounded-2xl border-2 border-black bg-yellow-500 py-1 text-xs font-bold px-3 mr-2 mb-2">
            Next.js
          </span>
          <span className="rounded-2xl border-2 border-black bg-yellow-500 py-1 text-xs font-bold px-3 mr-2 mb-2">
            Convex
          </span>
          <span className="rounded-2xl border-2 border-black bg-yellow-500 py-1 text-xs font-bold px-3 mr-2 mb-2">
            Clerk
          </span>
          <span className="rounded-2xl border-2 border-black bg-yellow-500 py-1 text-xs font-bold px-3 mr-2 mb-2">
            tailwindcss
          </span>
        </div>
      </div>
    </div>
  );
}
