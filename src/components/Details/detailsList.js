import React from 'react';

import './styles.scss';

const DetailsList = ({ title, active, setSelected, id }) => (
  <li
    className={active ? 'portfolioList active' : 'portfolioList'}
    onClick={() => setSelected(id)}
  >
    {title}
  </li>
);

export default DetailsList;
