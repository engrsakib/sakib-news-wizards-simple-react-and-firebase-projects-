import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LetestNews = () => {
    return (
      <>
        <div className="flex items-center gap-3 bg-base-200">
          <p className="btn btn-success">Letest News:</p>
          <Marquee pauseOnHover={true} className="space-x-3">
            <Link to="/news">
              HC strikes down indemnity in fast-track energy procurement
            </Link>

            <Link to="/news">
              Bank accounts of NRBC chair Parvez Tamal, 2 others frozen
            </Link>

            <Link to="/news">Playing the minority card</Link>

            <Link to="/news">Stocks rise</Link>
          </Marquee>
        </div>
      </>
    );
};

export default LetestNews;