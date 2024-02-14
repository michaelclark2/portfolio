import About from "@/components/About";
import Project from "@/components/Project";
import Section from "@/components/Section";
import prisma from "@/lib/prisma";

export const getServerSideProps = async () => {
  const projects = await prisma.project.findMany();
  return { props: { projects } };
};

export default function Home({ projects }) {
  return (
    <div className="flex flex-col space-y-5 w-full max-w-2xl mx-auto p-4">
      <About />
      <Section title="Projects" colorClass="bg-purple-800">
        {projects.map((row) => (
          <Project project={row} />
        ))}
      </Section>
      <Section title="Skills" colorClass="bg-blue-800" />
      <Section title="Contact" colorClass="bg-teal-800" />
    </div>
  );
}
