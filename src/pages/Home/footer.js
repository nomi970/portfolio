import React from 'react'
import { Link , Box, Typography} from '@mui/material';
import {Styles} from '../style.ts'
import { Container } from '@mui/material';
import SocialIconButton from '../../components/buttons/socialBtn'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function footer() {
  return (
    <>
    <Container>
      <Box mt={10} display={'flex'} alignItems={'start'} justifyContent={'space-between'}>
        <Box sx={{...Styles.max365}}>
            <Typography variant='h2' sx={{...Styles.font_50_700 , ...Styles.font_Montserrat}}>Numan</Typography>
            <Typography variant='p' sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}}>Transforming digital landscapes is my expertise. As a frontend developer, I specialize in crafting dynamic websites that elevate your brand. With sleek designs and seamless user experiences, let's collaborate to bring your vision to life.</Typography>
        </Box>
        <Box>
            <Typography variant='h2' sx={{...Styles.font_18_700 , ...Styles.font_Montserrat , ...Styles.ln58}}>Quick Link</Typography>

        <Box sx={{...Styles.footerLinksMain}}>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}}>Home</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}}>About Us</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}}>Services</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}}>Portfolio</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}}>Contact Us</Typography>
            </Link>
        </Box>

        </Box>
        <Box>
            <Typography variant='h2' sx={{...Styles.font_18_700 , ...Styles.font_Montserrat , ...Styles.ln58}}>Social Media</Typography>
            <Box sx={{ display: 'flex', gap: 2 , ...Styles.SocialIconsBtn}}>
                <SocialIconButton href="https://www.linkedin.com/" icon={<LinkedInIcon />} />
                <SocialIconButton href="https://www.facebook.com/" icon={<FacebookIcon />} />
                <SocialIconButton href="https://www.instagram.com/" icon={<InstagramIcon />} />
                <SocialIconButton href="https://twitter.com/" icon={<TwitterIcon />} />
            </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat}} mt={3} mb={3} textAlign={'center'}>Copyright © 2024 Numan Arshad | Powered by Numan Arshad</Typography>
        </Box>
      
      </Container>
    </>
  )
}

export default footer
