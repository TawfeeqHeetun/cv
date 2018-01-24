class Hello extends React.Component {
  render() {
    return <div className="greeting">
      <h1>Hello!</h1>
      <p>
        More info <a href="#" target="_blank">here</a>.
      </p>
    </div>;
  }
}


class Banner extends React.Component {
  render() {
    return <div>
      <div className="circle">
      </div>
      <div className="rectangle">
        <div className="left">
          <p className="name">HEETUN Muhammad Tawfeeq</p>
          <p className="job">Front End Web Developer</p>
        </div>
        <div className="right">
        <p className="number"><a href="tel:+23059106629">+230 59106629</a></p>
        <p className="email"><a href="mailto:heetun.tawfeeq1@gmail.com">heetun.tawfeeq1@gmail.com</a></p>
        </div>
      </div>
    </div>;
  }
}

class Details extends React.Component {
  render() {
    return <div className="about_me">
      <div className="employment">
        <div className="">
          <img src="image/case.png" alt="case" className="case"> </img>
          <p className="title">Employment</p>
        </div>
        <div className="job1">
          <p>June 2016 - July 2016</p>
          <p>Trainee Web Developer</p>
          <p>Proximity BBDO Indian Ocean</p>
        </div>
        <div className="job2">
          <p>July 2017 - Present</p>
          <p>Front End Developer</p>
          <p>Proximity BBDO Indian Ocean</p>
        </div>
      </div>

      <div className="education">
        <div className="">
          <img src="image/hat.png" alt="hat" className="hat"> </img>
          <p className="title">Education</p>
        </div>
        <div className="education1">
          <p>2014 - 2017</p>
          <p>Bachelor of Science (BSc) with Honors, Web and Multimedia Development</p>
          <p>University of Mauritius</p>
        </div>
        <div className="education2">
          <p>2006 - 2013</p>
          <p>Secondary School (School Certificate & Higher School Certificate)</p>
          <p>James Burty David SSS (ex Bell Village SSS)</p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-header">
          <img src="image/box.png" alt="box" className="box"> </img>
          <p className="title">Skills</p>
        </div>
        <div className="skill1 text-left">
          <div className="percentage">
            <p>90%</p>
          </div>
          <div className="description">
            <p>HTML/HTML5/Pug</p>
          </div>
        </div>
        <div className="skill2 text-left">
          <div className="percentage">
            <p>90%</p>
          </div>
          <div className="description">
            <p>CSS/CSS3/SCSS</p>
          </div>
        </div>
        <div className="skill3 text-left">
          <div className="percentage">
            <p>65%</p>
          </div>
          <div className="description">
            <p>Javascript</p>
          </div>
        </div>
        <div className="skill4 text-left">
          <div className="percentage">
            <p>70%</p>
          </div>
          <div className="description">
            <p>JQuery</p>
          </div>
        </div>
        <div className="skill5 text-left">
          <div className="percentage">
            <p>50%</p>
          </div>
          <div className="description">
            <p>Bootstrap</p>
          </div>
        </div>
        <div className="skill6 text-left">
          <div className="percentage">
            <p>30%</p>
          </div>
          <div className="description">
            <p>ReactJS</p>
          </div>
        </div>
        <div className="skill7 text-left">
          <div className="percentage">
            <p>80%</p>
          </div>
          <div className="description">
            <p>Digital Photography and Videography</p>
          </div>
        </div>
        <div className="skill8 text-left">
          <div className="percentage">
            <p>75%</p>
          </div>
          <div className="description">
            <p>Adobe Photoshop / Illusrator</p>
          </div>
        </div>
        <div className="skill9 text-left">
          <div className="percentage">
            <p>60%</p>
          </div>
          <div className="description">
            <p>Git / SVN</p>
          </div>
        </div>
      </div>

    </div>;
  }
}


/*
 * Render the above component into the appropriate div
 */
// React.render(<Hello />, document.getElementById('app'));
React.render(<Banner />, document.getElementById('banner'));
React.render(<Details />, document.getElementById('details'));
{/* <div className="skill1 text-left">
          <div className="percentage">
            <p>90%</p>
          </div>
          <div className="description">
            <p>HTML/HTML5/Pug</p>
          </div>
        </div> */}
