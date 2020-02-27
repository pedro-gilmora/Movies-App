import React from 'react';

export default (props) => 
    <i className={'mdi mdi-' + props.icon} style={{fontSize: props.size||16, color: props.color||'#3a3a3a'}}/>;