import React from 'react';

import './SmallScreenHeader.scss';

const SmallScreenHeader = () => (
    <div className="title-bar hide-for-large">
        <div className="title-bar-left">
            <button className="menu-icon" type="button" data-open="my-info"></button>
            <span>gVLQ Portfolio</span>
        </div>
    </div>
)

export default SmallScreenHeader;