import Image from "next/image";
interface Person {
  image: string;
  name: string;
  jobTitle: string;
}

export default function About() {
  const team: Person[] = [
    {
      image: "https://www.w3schools.com/w3images/team2.jpg",
      name: "John Doe",
      jobTitle: "CEO & Founder",
    },
    {
      image: "https://www.w3schools.com/w3images/team3.jpg",
      name: "Jane Doe",
      jobTitle: "Architect",
    },
    {
      image: "https://www.w3schools.com/w3images/team3.jpg",
      name: "Mike Ross",
      jobTitle: "Architect",
    },
    {
      image: "https://www.w3schools.com/w3images/team4.jpg",
      name: "Dan Star",
      jobTitle: "Architect",
    },
  ];

  return (
    <section className="about">
      <h2 className="about-title title">About</h2>
      <div className="about-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          // background: "red",
        }}
        className="team-container"
      >
        {team.map((person, index) => {
          return (
            <div className="person-card" key={index}>
              <Image
                width={280}
                height={250}
                // className="person-image"
                src={person.image}
                alt={person.name}
              />
              <h4>{person.name}</h4>
              <h5>{person.jobTitle}</h5>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
              <button>Contact</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

