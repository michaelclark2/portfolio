import prisma from "@/lib/prisma";

export const getServerSideProps = async () => {
  const projects = await prisma.project.findMany();
  return { props: { projects } };
};

export default function Home({ projects }) {
  return (
    <div className="flex flex-col space-y-5 w-full sm:w-3/5 mx-auto p-4">
      <section className="flex flex-row border-4 m-auto rounded-2xl border-black bg-red-800">
        <div className="w-2/6 sm:p-5 flex justify-center items-center p-2 ">
          <img
            src="./profile.jpg"
            className="rounded-2xl border-4 border-black"
          />
        </div>
        <div className="w-4/6  sm:p-5 flex flex-col p-2">
          <h1 className="text-[8vw] sm:text-[4.5vw] font-extrabold">
            Michael Clark
          </h1>
          <p className="leading-tight text-semibold sm:text-[2vw]">
            Full-stack developer with a penchant for creating beautiful,
            performant products.
          </p>
        </div>
      </section>
      <section>
        {projects.map((row) => (
          <p key={row.id}>{row.title}</p>
        ))}
      </section>
    </div>
  );
}
