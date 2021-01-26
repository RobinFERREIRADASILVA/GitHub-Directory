import React from 'react';
import Proptypes from 'prop-types';

import './reporesults.scss';

import RepoCard from './RepoCard';

const RepoResults = ({ items }) => (
  <div className="reporesults">
    <div className="reporesults-content">
      { items.map((repo) => (
        <RepoCard
          name={repo.name}
          owner={repo.owner.login}
          description={repo.description}
          avatar={repo.owner.avatar_url}
          link={repo.html_url}
          key={repo.id}
        />
      )) }
    </div>
  </div>
);

RepoResults.propTypes = {
  items: Proptypes.array,
};

export default RepoResults;
