import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RepoCard = ({ name, owner, description, avatar, link }) => {
  const extra = (
    <a href={link} target="_blank" rel="noreferrer">
      View this on GitHub
    </a>
  );

  return (
    <Card
      image={avatar}
      header={name}
      meta={owner}
      description={description}
      className="reporesults-card"
      extra={extra}
    />
  );
};

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

RepoCard.defaultProps = {
  description: '',
};

export default RepoCard;
