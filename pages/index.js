import About from "@/components/About";
import Project from "@/components/Project";
import Section from "@/components/Section";
import Skill from "@/components/Skill";

export default function Home() {
  const projects = require("../data/projects.json");
  const skills = require("../data/skills.json");
  return (
    <div className="flex flex-col space-y-32 mt-24 sm:my-96 mb-96 w-full max-w-2xl mx-auto p-4">
      <About />
      <Section title="Projects" colorClass="bg-violet-700">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Section>
      <Section title="Skills" colorClass="bg-blue-700">
        <div className="grid auto-rows-auto grid-cols-3 sm:grid-cols-4 gap-6 mb-6 justify-items-center">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>
      <Section title="Contact" colorClass="bg-teal-700">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-between my-4">
          <a
            className="rounded-2xl border-4 border-black bg-red-600 px-4 font-bold text-center"
            href="https://linkedin.com/in/michaelwclark2"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <a
            className="rounded-2xl border-4 border-black bg-yellow-500 px-4 font-bold text-center"
            href="https://github.com/michaelclark2"
          >
            GitHub
          </a>
          <a
            className="rounded-2xl border-4 border-black bg-violet-600 px-4 font-bold text-center"
            href="mailto:mc2.dev@proton.me"
          >
            Email
          </a>
          <a
            className="rounded-2xl border-4 border-black bg-blue-600 px-4 font-bold text-center"
            href="https://michaelclark.notion.site/Michael-Clark-f95d698d5a034e23bfb0681698328b62"
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        </div>
      </Section>
    </div>
  );
}
