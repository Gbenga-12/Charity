import React from 'react'
import "../Css/Education details.css"
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

// const navigate = useNavigate();

const  Educationdetails= () => {
 const  Educationdetails= [
    {
      id: 1,
      title: "School Is Just The Beginning",
      subtitle: "How does having clean water at home impact school attendance?",
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
      text:"Collecting dirty water takes time! When families have access to clean water close to home, kids can focus on more important things, like going to school, studying, and enjoying their childhood."
    },
    {
      id: 2,
      title: "Until no one dies from dirty water",
      subtitle: "Why is it important to have safe water and adequate facilities at school?",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
      text:"Clean water stations give kids a place to wash their hands. Proper latrines provide privacy for young girls. These facilities ensure that kids who become healthy, continue to stay healthy."


    },
    {
      id: 3,
      title: "bring clean water and better futures",
      subtitle: "Why is education important for kids in rural communities?",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "Attending school gives kids a chance to expand their knowledge and pursue new opportunities. It provides a chance to become doctors, engineers, and social workers. It promotes stronger futures." 



 }
  ];

  return (
    <div className="projects-page">
      <div className="sidebar">
        <div className="filter-section">
          <h3>Filter by: Categories</h3>
          <h4>All</h4>

          <button>EDUCATION PROJECT</button>
          <button>Health Programs</button>
          <Link to="/education">
  <button>Education Initiative</button>
</Link>
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
        <h2>SHOWING EDUCATION PROJECTS</h2>

        {Educationdetails.map((Educationdetails) => (
          <div className="project-card" key={Educationdetails.id}>
            <img src={Educationdetails.image} alt={Educationdetails.title} />

            <div className="project-info">
              <h1>{Educationdetails.title}</h1>
              <h3>{Educationdetails.subtitle}</h3>
              <p>{Educationdetails.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Educationdetails
