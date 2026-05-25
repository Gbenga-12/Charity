import "../Css/Projects.css";

const Projects = () => {
  cons
  const projects = [
    {
      id: 1,
      title: "Tiny Heroes",
      subtitle: "The smallest among us have it all figured out",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      text: "This is doing inspiring, heartwarming, and over-the-top incredible things for clean water, so we created an annual award to celebrate these Tiny Heroes. As a 7-year-old Max, who had given up his birthday for one of our first September campaigns. My pitch as a 7 year old was essentially, ‘This isn’t fair.’ Here I am, a 7-year-old child, and there are seven-year-old children in a different country dying because they do not have access to a basic human right. It felt like, ‘I have clean water. They should have clean water, too.’",
    },
    {
      id: 2,
      title: "The Spring",
      subtitle: "Join the global community serving people every month",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
      text: "The Spring isn’t just a subscription. It’s a community of passionate investors. Being part of The Spring makes me hopeful that there will be more children who can dream bigger because they don’t have to carry the weight of dirty water. The Spring is composed of generous, passionate, and determined people, like you, from more than 100 countries around the world. Our members have already transformed over a million lives with access to clean water, sanitation, and hygiene.The Spring is composed of generous, passionate, and determined people, like you, from more than 100 countries around the world. Our members have already transformed over a million lives with access to clean water, sanitation, and hygiene.",
    },
    {
      id: 3,
      title: "Legacy & Asset Giving",
      subtitle: "Don't have a will or trust? Start here.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "Whether you’re 18 or 108, everyone should have a will in place to have agency over what happens to their assets when they’re no longer here.By creating a will and including charity: water in your estate plans, you can help bring clean water to more people, even beyond your lifetime.",
    },
  ];

  return (
    <div className="projects-page">
      <div className="sidebar">
        <div className="filter-section">
          <h3>Filter by: Categories</h3>
          <h4>All</h4>

          <button className="active">Water Projects</button>
          <button>Health Programs</button>
          <button>Education</button>
        </div>

        <div className="line"></div>

        <div className="filter-section">
          <h3>Sort by: Region</h3>
          <h4>All</h4>

          <button>Africa</button>
          <button>Asia</button>
          <button>Latin America</button>
        </div>
      </div>

      <div className="content">
        <h2>SHOWING WATER PROJECTS</h2>

        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h1>{project.title}</h1>
              <h3>{project.subtitle}</h3>
              <p>{project.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
