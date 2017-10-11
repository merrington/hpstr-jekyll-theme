import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'font-awesome/css/font-awesome.css';

const Header = () => (
  <div className="container">
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Mike Errington
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/projects" className="navbar-item">
            Projects
          </Link>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/merrington/" className="navbar-item">
            <i className="fa fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikeerrington/"
            className="navbar-item"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </nav>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      link={[
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css'
        }
      ]}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <div className="container-fluid">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
