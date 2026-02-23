import Image from 'next/image'

interface TypeProjects {
  id: number;
  title: string;
  urlImage: string;
}

const images: TypeProjects[] = [
  {
    id: 1,
    title: "Summer House",
    urlImage: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    id: 2,
    title: "Summer House",
    urlImage: "https://www.w3schools.com/w3images/house2.jpg",
  },
  {
    id: 3,
    title: "Brick House",
    urlImage: "https://www.w3schools.com/w3images/house3.jpg",
  },
  {
    id: 4,
    title: "Renovated",
    urlImage: "https://www.w3schools.com/w3images/house4.jpg",
  },
  {
    id: 5,
    title: "Barn House",
    urlImage: "https://www.w3schools.com/w3images/house2.jpg",
  },
  {
    id: 6,
    title: "Summer House",
    urlImage: "https://www.w3schools.com/w3images/house5.jpg",
  },
  {
    id: 7,
    title: "Brick House",
    urlImage: "https://www.w3schools.com/w3images/house4.jpg",
  },
  {
    id: 8,
    title: "Renovated",
    urlImage: "https://www.w3schools.com/w3images/house3.jpg",
  },
];

export default function Projects() {
  return (
    <main
      style={{
        marginTop: "40px",
      }}
    >
      <h3
        style={{
          width: "90%",
          padding: "8px 24px",
          borderBottom: "1px solid gray",
          fontSize: "2.5em",
          margin: "0 auto",
        }}
      >
        Projects
      </h3>
      <div
        style={{
          maxWidth: "1500px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {images.map(function (image) {
          return (
            <div
              style={{
                position: "relative",
              }}
              key={image.id}
            >
              <p
                style={{
                  position: "absolute",
                  fontSize: "1.5em",
                  color: "white",
                  padding: "10px",
                  border: "1px solid black",
                  background: "black",
                }}
              >
                {image.title}
              </p>
              <Image
                width={400}
                height={250}
                src={image.urlImage}
                alt={image.title}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}