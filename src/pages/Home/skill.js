import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Styles } from '../style.ts';

function Skill() {
  const initialProgressValues = [30, 60, 65, 90, 55, 30, 68, 72 ];
  const [progressValues, setProgressValues] = useState(Array(initialProgressValues.length).fill(0));

  useEffect(() => {
    const animationDuration = 4000; // Duration in milliseconds for the animation
    const startTime = Date.now();

    const animationFrame = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= animationDuration) {
        setProgressValues(initialProgressValues);
      } else {
        const progress = initialProgressValues.map((value, index) => {
          const startValue = 0;
          const endValue = value;
          const progressRatio = elapsedTime / animationDuration;
          const currentValue = startValue + (endValue - startValue) * progressRatio;
          return Math.min(currentValue, endValue); // Ensure the value doesn't exceed the endValue
        });

        setProgressValues(progress);
        requestAnimationFrame(animationFrame);
      }
    };

    const requestId = requestAnimationFrame(animationFrame);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant='h2' sx={{ ...Styles.font_50_700, ...Styles.font_Montserrat }} textAlign={'center'}>
          My Skill
        </Typography>
        {/* Add circular progress bars */}
        <Box display="grid" gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={'50px'} mt={5}>
          {progressValues.map((value, index) => (
            <Box key={index} textAlign="center" position="relative">
              {/* Circular progress bar */}
              <CircularProgress
                variant="determinate"
                value={value}
                size={100}
                thickness={2} // Decrease thickness here
                sx={{
                  transition: 'all 2s ease',
                  '& .MuiCircularProgress-circle': {
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // Box shadow only on the progress line
                  }
                }}
              />
              {/* Percentage number */}
              <Typography
                variant="body1"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  lineHeight: '1',
                  ...Styles.font_16_500 , ...Styles.font_Montserrat
                }}
              >
                {Math.round(value)}%
              </Typography>
              {/* Title */}
              <Typography variant="body2" sx={{...Styles.font_18_700 , ...Styles.font_Montserrat}}>
                {index === 0 && "HTML"}
                {index === 1 && "CSS"}
                {index === 2 && "Bootstrap"}
                {index === 3 && "Tailwind CSS"}
                {index === 4 && "JQuery"}
                {index === 5 && "JavaScript"}
                {index === 6 && "React Js"}
                {index === 7 && "Material UI (MUI)"}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Skill;
