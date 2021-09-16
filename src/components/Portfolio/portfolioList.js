import React from 'react';

import './styles.scss';

const PortfolioList = ({ title, active, setSelected, id }) => (
  <li
    className={active ? 'portfolioList active' : 'portfolioList'}
    onClick={() => setSelected(id)}
  >

    {title}
  </li>
);

export default PortfolioList;
