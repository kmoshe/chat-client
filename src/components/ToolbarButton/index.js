import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ToolbarButton.css';

export default function ToolbarButton(props) {
    const { icon } = props;
    return (
        <i className={`toolbar-button`}><FontAwesomeIcon icon={['fas', icon]} /></i>
    );
}