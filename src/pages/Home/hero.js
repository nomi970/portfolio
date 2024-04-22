import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Typography, IconButton } from '@mui/material';
import {Styles} from '../style.ts'
import SocialIconButton from '../../components/buttons/socialBtn'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Style } from '@mui/icons-material';



function hero() {
  return (
    <Box component="section" className="hero_section">
    <Box className="hero_main">
      <Box className="hero_content mx__660">
        <Typography variant="body1" sx={Styles.font_50_700 }>
          I'm <Typography sx={[Styles.font_Cormorant , Styles.font_50_700]} display={'inline-block'}>Numan Arshad</Typography>
        </Typography>
        <Typography variant="h1" sx={Styles.font_50_700}>
          Frontend Web Developer
        </Typography>
        <Typography variant="body1" sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}}  mt={2}>
          I'm a passionate frontend web developer from Pakistan, weaving digital dreams into reality. With a blend of artistry and innovation, I craft visually stunning and user-centric websites. Let's collaborate to turn your digital vision into an unforgettable online experience!
        </Typography>
        <Box display={'flex'} gap={'20px'} mt={3}>
        <Button
      variant="contained"
      startIcon={<PersonIcon />}
      onClick={() => console.log('About Me clicked')}
    >
      About Me
    </Button>
    <Box sx={{ display: 'flex', gap: 2 , ...Styles.SocialIconsBtn}}>
      <SocialIconButton href="https://www.linkedin.com/" icon={<LinkedInIcon />} />
      <SocialIconButton href="https://www.facebook.com/" icon={<FacebookIcon />} />
      <SocialIconButton href="https://www.instagram.com/" icon={<InstagramIcon />} />
      <SocialIconButton href="https://twitter.com/" icon={<TwitterIcon />} />
    </Box>
        </Box>
      </Box>
      <Box className="hero_content_image">
        <img src="./images/hero_content_image.jpg" alt="Hero Content" />
      </Box>
    </Box>
  </Box>
  )
}

export default hero
