import prisma from "@/lib/prisma";

export const getServerSideProps = async () => {
  const projects = await prisma.project.findMany();
  return { props: { projects } };
};

export default function Home({ projects }) {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Michael Clark</h1>
      {projects.map((row) => (
        <p key={row.id}>{row.title}</p>
      ))}
    </div>
  );
}
