import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, category: 'development', title: 'Online Banking', imgSrc: 'images/project-1.jpg' },
    { id: 2, category: 'development', title: 'Classic Industry', imgSrc: 'images/project-2.jpg' },
    { id: 3, category: 'design development marketing', title: 'BoomBap Audio', imgSrc: 'images/project-3.jpg' },
    { id: 4, category: 'design development marketing', title: 'Van Moose', imgSrc: 'images/project-4.jpg' },
    { id: 5, category: 'design development marketing seo', title: 'Joy Moments', imgSrc: 'images/project-5.jpg' },
    { id: 6, category: 'design marketing seo', title: 'Spark Events', imgSrc: 'images/project-6.jpg' },
    { id: 7, category: 'design marketing', title: 'Casual Wear', imgSrc: 'images/project-7.jpg' },
    { id: 8, category: 'design marketing', title: 'Zazoo Apps', imgSrc: 'images/project-8.jpg' },
  ];

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects = projects.filter((project) =>
    filter === 'all' ? true : project.category.includes(filter)
  );

  return (
    <div id="projects" className="filter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">PROJECTS</div>
            <h2>Projects That We're Proud Of</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="button-group filters-button-group">
              <button className={`button ${filter === 'all' ? 'is-checked' : ''}`} onClick={() => handleFilterChange('all')}><span>SHOW ALL</span></button>
              <button className={`button ${filter === 'design' ? 'is-checked' : ''}`} onClick={() => handleFilterChange('design')}><span>DESIGN</span></button>
              <button className={`button ${filter === 'development' ? 'is-checked' : ''}`} onClick={() => handleFilterChange('development')}><span>DEVELOPMENT</span></button>
              <button className={`button ${filter === 'marketing' ? 'is-checked' : ''}`} onClick={() => handleFilterChange('marketing')}><span>MARKETING</span></button>
              <button className={`button ${filter === 'seo' ? 'is-checked' : ''}`} onClick={() => handleFilterChange('seo')}><span>SEO</span></button>
            </div>

            <div className="grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className={`element-item ${project.category}`}>
                  <a className="popup-with-move-anim" href={`#project-${project.id}`}>
                    <div className="element-item-overlay">
                      <span>{project.title}</span>
                    </div>
                    <img src={project.imgSrc} alt="alternative" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
