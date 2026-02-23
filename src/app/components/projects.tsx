import Image from "next/image";

interface Project {
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Summer House",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    title: "Brick House",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    title: "Renovated",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    title: "Barn House",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    title: "Summer House",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    title: "Brick House",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    title: "Renovated",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    title: "Barn House",
    image: "https://www.w3schools.com/w3images/house5.jpg",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h3 className="projects-title">Projects</h3>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-wrapper">
              <span className="project-label">{project.title}</span>
              <Image
                width={200}
                height={250}
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
