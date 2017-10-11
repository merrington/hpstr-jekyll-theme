import React from 'react';
import Link from 'gatsby-link';
import profilePicture from '../images/me.jpeg';
import resumePdf from '../resume.pdf';

const IndexPage = () => (
  <div>
    <div className="hero is-warning is-bold is-small">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Mike</h1>
          <h2 className="subtitle">
            A creative software engineer based just outside of Toronto with
            interests in technology, music and woodworking.
          </h2>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="columns">
        <div className="column is-two-thirds">
          <h2 className="subtitle is-3">About</h2>
          <p>
            After completing a Software Engineering degree at Western
            University, I went to work for IBM where I have been employed for
            the past 6+ years.
          </p>
          <br />
          <p>
            During my time at IBM I have worked in multiple roles; from customer
            facing positions like software support and services consulting -
            working on solving customer issues and multiple side projects to
            improve team processes - to development roles including being a team
            leader and developing key aspects of a webapp to support a DevOps
            team.
          </p>
          <br />
          <p>
            Outside of work I have a variety of interests. I'm an avid
            music-lover, particularly enjoying live shows and working on growing
            my vinyl collection. My choice of drink is a nice craft beer, I
            attend beer fests throughout the year in Toronto, as well as
            developing the "BEVS" app to assist with selecting the right brew
            when out with friends (see the <Link to="/projects">Projects</Link>{' '}
            page for more information!) and am hoping to try my hand at
            homebrewing when I can find the time.
          </p>
          <br />
          <p>
            In the last few years I have also gotten into motorcycles and most
            recently woodworking, having previously torn down and built a new
            deck, and more recently completed a coffee table build.
          </p>
          <br />
          <p>
            I am a creative person who enjoys problem solving and has a passion
            for technology. I'm looking for unique challenges that push me to
            learn more and take advantage of my breadth of skills.
          </p>
        </div>

        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={profilePicture} />
              </figure>
            </div>

            <div className="card-content" style={{ padding: 0 }}>
              <div className="box" style={{ marginBottom: 0 }}>
                <a href="mailto:mike.errington@gmail.com">
                  <i className="fa fa-envelope" /> Email
                </a>
              </div>
              <div className="box">
                <div className="columns">
                  <div className="column">
                    <a href={`${__PATH_PREFIX__}/resume/`}>
                      <i className="fa fa-file-text" /> Resume
                    </a>
                  </div>
                  <div className="column has-text-right">
                    <a href={`${__PATH_PREFIX__}/resume/resume.pdf`}>
                      <i className="fa fa-file-pdf-o" /> pdf
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
