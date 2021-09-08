import React from 'react';

import './styles.scss';

const PortfolioList = ({ title, active, setSelected }) => (
   <li className={active ? "portfolioList active" : "portfolioList"}>
     {title}
   </li>
);

export default PortfolioList;
