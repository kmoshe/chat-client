import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ToolbarButton.css';

export default function ToolbarButton(props) {
    const { icon, handleClick } = props;
    return (
        <i className={`toolbar-button`} onClick={handleClick}><FontAwesomeIcon icon={['fas', icon]} /></i>
    );
}