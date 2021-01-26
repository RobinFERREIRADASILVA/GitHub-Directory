import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './button.scss';

const ButtonForMoreRepo = ({ moreRepo }) => (
  <Button className="button-more" onClick={() => moreRepo()}>Click Here For More Repo</Button>
);

ButtonForMoreRepo.propTypes = {
  moreRepo: PropTypes.func.isRequired,
};

export default ButtonForMoreRepo;
