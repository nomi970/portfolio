import { Box, Typography} from '@mui/material';
import {Styles} from '../style.ts'
import React from 'react'
import { Container } from '@mui/material';
function about() {
  return (
    <Container>
    <Box className='about_section'>
        <Box className='about__main'>
            <Box className='about__image'><img width={'70%'} src='./images/hero_content_image.jpg'></img></Box>
            <Box className='about__content mx__660'>
                <Typography variant='h2' sx={{...Styles.font_50_700 , ...Styles.font_Montserrat}}>About Me</Typography>
                <Typography variant='body1' sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}} mt={2}>I am an imaginative artisan of the digital realm, nestled in the vibrant landscape of Pakistan. My canvas is the web, and my medium is code. With an unwavering commitment to crafting immersive and intuitive websites, I blend artistic vision with technical precision to create digital masterpieces that captivate and inspire. Fuelled by a relentless curiosity, I embark on an endless quest to explore the ever-evolving frontier of web technologies and design trends. Let's embark on a collaborative journey, where your digital dreams take flight and reality becomes a canvas for boundless creativity.</Typography>
            </Box>
        </Box>
    </Box>
    </Container>
  )
}

export default about
