import React from 'react';
import { Box, Typography, Image } from '@mui/material';
import { Styles } from '../style.ts'; // Make sure to import your styles
import { Container } from '@mui/material';
function Projects() {
  const laptops = [...Array(6).keys()]; // Array of length 6 representing each laptop

  return (
    <>
    <Container>
      <Box sx={{...Styles.ProjectMain}}>
        <Typography variant='h2' textAlign={'center'} mt={15} sx={{...Styles.font_50_700 , ...Styles.font_Montserrat}}>My Projects</Typography>
        <Box sx={Styles.main}>
        {laptops.map((index) => (
          <Box key={index} className="main_laptop">
            <Box className="lap_top_image">
              <img src="./images/mocup.png" alt={`laptop_image_${index}`} className="w_100" />
            </Box>
            <Box className={`full_screen_image full_screen_image${index + 1}`}></Box>
          </Box>
        ))}
        </Box>
      </Box>
      </Container>
    </>
  );
}

export default Projects;
