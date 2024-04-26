import { Box, Typography, Container } from '@mui/material';
import { Styles } from '../style.ts';
import React from 'react';

function about() {
  return (
    <Box sx={{ ...Styles.AboutMain }}>
      <Container>
        <Box className='about_section'>
          <Box className='about__main' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
            {/* <Box className='about__image' sx={{ flexBasis: '40%' }}><img width={'100%'} src='./images/hero_content_image.jpg' alt="hero content" /></Box> */}
            <Box className="main" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 4 }}>
          <Box className="big-circle" sx={{ display: 'flex', flexDirection: 'row', mb: 4 }}>
            <Box className="icon-block">
              <img src="./images/html.svg" alt="html" />
            </Box>
            <Box className="icon-block">
              <img src="./images/js.svg" alt="js" />
            </Box>
            <Box className="icon-block">
              <img src="./images/react.svg" alt="react" />
            </Box>
            <Box className="icon-block">
              <img src="./images/mui.svg" alt="ui-ux icon" />
            </Box>
          </Box>
          <Box className="circle" sx={{ display: 'flex', flexDirection: 'row', mb: 4 }}>
            <Box className="icon-block">
              <img src="./images/tailwind-css.svg" alt="tailwind css" />
            </Box>
            <Box className="icon-block">
              <img src="./images/bootstrap.svg" alt="" />
            </Box>
            <Box className="icon-block">
              <img src="./images/css.svg" alt="css" />
            </Box>
            <Box className="icon-block">
              <img src="./images/jquery.svg" alt="artificial intelligence icon" />
            </Box>
          </Box>
          <Box className="center-logo" sx={{ mb: 4 }}>
            {/* <img src="https://www.yudiz.com/codepen/animated-portfolio/logo.png" alt="logo" /> */}
          </Box>
        </Box>
            <Box className='about__content mx__660' sx={{ flexBasis: '50%', ml: { xs: 0, md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant='h2' sx={{ ...Styles.font_50_700, ...Styles.font_Montserrat }}>About Me</Typography>
              <Typography variant='body1' sx={{ ...Styles.font_16_500, ...Styles.font_Montserrat }} mt={2}>I am an imaginative artisan of the digital realm, nestled in the vibrant landscape of Pakistan. My canvas is the web, and my medium is code. With an unwavering commitment to crafting immersive and intuitive websites, I blend artistic vision with technical precision to create digital masterpieces that captivate and inspire. Fuelled by a relentless curiosity, I embark on an endless quest to explore the ever-evolving frontier of web technologies and design trends. Let's embark on a collaborative journey, where your digital dreams take flight and reality becomes a canvas for boundless creativity.</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container>

      </Container>
    </Box>
  );
}

export default about;
