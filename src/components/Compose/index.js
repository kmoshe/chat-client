import React from 'react';
import './Compose.css';

export default function Compose(props) {

    const { handleChange } = props;

    return (
      <div className="compose">
          {
              props.leftItems
          }
        <input
          type="text"
          className="compose-input"
          placeholder="הכנס הודעה"
          onChange={(e) => handleChange(e.target.value)}
        />

        {
          props.rightItems
        }
      </div>
    );
}