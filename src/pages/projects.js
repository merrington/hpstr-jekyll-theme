import React from 'react';
import bevsSS from '../images/bevs-ss.png';
import wordbrainiacSS from '../images/elixir.png';
import driverlogSS from '../images/couchDB.png';

const projects = [
  {
    name: 'BEVS',
    url: 'https://bevs.beer',
    github: 'https://github.com/merrington/bevs',
    image: bevsSS,
    description:
      'What started out as an idea among friends on how to settle frequent disputes over what pitcher of beer to split eventually became "BEVS" - the Beer Experience Voting System. Built using Meteor (Node.js with ES6), Mongo and React, BEVS provides a reactive/live-updating voting system with some unique customization options.',
    tags: ['meteor', 'node', 'es6', 'mongo', 'react']
  },
  {
    name: 'Wordbrainiac',
    github: 'https://github.com/merrington/wordbrainiac',
    image: wordbrainiacSS,
    description:
      'A simple tool that scans a dictionary file to assist in providing possible solutions to WordBrain puzzles. This was built while going through Elixir tutorials to learn the basics of the language.',
    tags: ['elixir']
  },
  {
    name: 'DriverLog',
    github: 'https://github.com/merrington/driverlog',
    image: driverlogSS,
    description:
      'To help solve issues with carpooling, DriverLog was made as a simple means of keeping track of accumulated points using a scoring system based on where the car is parked and the current weather. This was built  as a simple demo to see the functionality of a CouchApp - a webapp that runs within a CouchDB/Cloudant database',
    tags: ['couchdb', 'jquery', 'moustache']
  }
];

export default () => (
  <div>
    <div className="hero is-warning is-bold is-small">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Projects</h1>
          <h2 className="subtitle">A developer's developments</h2>
        </div>
      </div>
    </div>

    {projects.map(project => (
      <div className="container">
        <div className="box">
          <div className="columns">
            <div className="column is-2">
              <figure className="image">
                <img src={project.image} />
              </figure>
            </div>

            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="title is-5">{project.name}</p>
                  </div>

                  {project.url && (
                    <div className="level-item">
                      <a href={project.url}>
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  )}

                  <div className="level-item">
                    <a href={project.github}>
                      <i className="fa fa-github" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="tags">
                {project.tags &&
                  project.tags.map(tag => (
                    <div
                      //className="level-item has-text-weight-light"
                      className="tag"
                      style={{ fontStyle: 'italic' }}
                    >
                      {tag}
                    </div>
                  ))}
              </div>
              <p className>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
