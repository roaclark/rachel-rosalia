import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutContent extends Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>My name is Rachel Rosalia. I am a professional software developer in the Bay Area. I am interested in algorithms, data science, and machine learning but enjoy dabbling in a wide variety of technical projects.</p>

        <h3>My Life</h3>
        <p>I currently live in San Francisco with my husband, Jesse Rosalia, and my two cats, Alan Purring and Ada Lovemice. I enjoy drawing, painting, sewing, and amateur woodworking in my free time. I am quite addicted to logic puzzles.</p>

        <h3>My Work</h3>
        <p>I currently work as a Site Reliability Engineer at Google. Before that I was doing research in social robotics and machine learning at Georgia Tech. See my <Link to="/work">Work History</Link> for more information.</p>
        <p>I also work on a variety of technical side projects. Some are useful, some are educational, and some are just fun. You can see the <Link to="/projects">Projects</Link> page to browse and learn more.</p>

        <h3>This Site</h3>
        <p>This site is a project for me to learn and practice some web technologies. It is written using Express, React, and Bootstrap. My goal is for it to be fully responsive and accessible. If you find any bugs or have design suggestions, please reach out and let me know.</p>
      </div>
    );
  }
}

export default AboutContent;