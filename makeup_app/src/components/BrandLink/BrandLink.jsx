// import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//   } from 'react-router'

  
// const BrandLink = ({classes}) => {
//     return(
//         <a className={`text-2xl font-krona ${classes}`} href="/">
//             Welly
//         </a>
//     );
// };

// export default BrandLink;


import React from 'react';
import { Link } from 'react-router-dom';

const BrandLink = ({classes}) => (
    <Link className={`text-2xl font-krona ${classes}`} to="/">
        Welly
    </Link>
);

export default BrandLink;