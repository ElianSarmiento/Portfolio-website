import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PlanIt",
    description:
      "A responsive HTML/CSS/JavaScript + Jinja interface sits on top of a Flask, SQLAlchemy, and PostgreSQL stack to organize tasks.",
    image: "/projects/pic1.png",
    tags: ["HTML/CSS", "JavaScript", "Flask"],
    // demoURL: "#",
  },
  {
    id: 2,
    title: "Guessing Game",
    description:
      "A Web browser game utilizing HTML, CSS, and Javascript. It allows users to guess a number with the user receiving real time responses if they are close to the number.",
    image: "/projects/pic2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    // demoURL: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 realative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects utilizing on demand tech stacks
          and libraries. I love to create projects in my own time so I plan on
          updating this section frequently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex -wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px=2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {/* <p></p>
               <div className="flex justify-between items-center">
                {" "}
                // UPDATE THIS WITH URL LINK
                <div className="flex space-x-3 ">
                  <a
                    href={project.demoURL}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  >
                    <ExternalLink size={20}/>
                  </a>
                  <a
                    href={githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  >
                    <Github size={20}/>
                  </a>
                </div>
              
              UPDATE THIS WITH URL LINKS 
              <p></p> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ElianSarmiento"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
