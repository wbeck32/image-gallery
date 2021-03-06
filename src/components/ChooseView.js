import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

ChooseView.propTypes = {
  view: PropTypes.string,
  onChangeView: PropTypes.func
};

function ChooseView({ view, onChangeView }) {

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
            <div onClick={target => onChangeView({ currentView })}>
              {currentView}
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ChooseView;
