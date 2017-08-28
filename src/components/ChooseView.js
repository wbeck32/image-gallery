import React from 'react';
import { NavLink } from 'react-router-dom';


import PropTypes from 'prop-types';

function ChooseView({ view }) {
  ChooseView.propTypes = {
    view: PropTypes.string,
    location: PropTypes.object
  };

  return (
    <div className="viewChooserWrap">
      {['list', 'thumb', 'gallery'].map((currentView, i) =>
        <div key={i} className="view" >
          <NavLink
            to={{
              pathname: "/images",
              search: `${currentView}`
            }}
            activeStyle={{
              color: '#000000'
            }}>
            <div>
              {currentView}
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ChooseView;
