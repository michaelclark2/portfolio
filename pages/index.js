import About from "@/components/About";
import Project from "@/components/Project";
import Section from "@/components/Section";
import Skill from "@/components/Skill";
import prisma from "@/lib/prisma";

export const getServerSideProps = async () => {
  const projects = await prisma.project.findMany();
  const skills = await prisma.skill.findMany({
    orderBy: [{ order: "asc" }],
  });
  return { props: { projects, skills } };
};

export default function Home({ projects, skills }) {
  return (
    <div className="flex flex-col space-y-5 w-full max-w-2xl mx-auto p-4">
      <About />
      <Section title="Projects" colorClass="bg-purple-800">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Section>
      <Section title="Skills" colorClass="bg-blue-800">
        <div className="grid auto-rows-auto grid-cols-3 sm:grid-cols-4 gap-6 mb-6 justify-items-center">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>
      <Section title="Contact" colorClass="bg-teal-800" />
    </div>
  );
}
