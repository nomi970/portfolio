import React from 'react'
import IconButton from '@mui/material/IconButton';

    const socialBtn = ({ href, icon }) => {
        return (
          <IconButton
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </IconButton>
        );
      };


export default socialBtn
