import React from 'react'
import { Link , Box, Typography} from '@mui/material';
import {Styles} from '../style.ts'
import { Container } from '@mui/material';
import SocialIconButton from '../../components/buttons/socialBtn'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import imagePath from "../../images/Full_screen_2.png";
function footer() {
    // const data = "/images/footer_bg.png";
    // backgroundImage: `url(${data})`
  return (
    <Box sx={{ ...Styles.FbgImg}} pt={5} pb={2}>
    <Container>
      <Box mt={5} sx={{...Styles.FooterMainBx}} >
        <Box sx={{...Styles.max365}}>
            <Typography variant='h2' sx={{...Styles.font_50_700 , ...Styles.font_Montserrat , ...Styles.Animated}}>Numan</Typography>
            <Typography variant='p' sx={{...Styles.font_16_500 , ...Styles.font_Montserrat , ...Styles.clrWhite}}>Transforming digital landscapes is my expertise. As a frontend developer, I specialize in crafting dynamic websites that elevate your brand. With sleek designs and seamless user experiences, let's collaborate to bring your vision to life.</Typography>
        </Box>
        <Box>
            <Typography variant='h2' sx={{...Styles.font_18_700 , ...Styles.font_Montserrat , ...Styles.ln58 , ...Styles.clrWhite}}>Quick Link</Typography>

        <Box sx={{...Styles.footerLinksMain}}>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat , ...Styles.clrWhite}}>Home</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat , ...Styles.clrWhite}}>About Us</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat , ...Styles.clrWhite}}>Services</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat , ...Styles.clrWhite}}>Portfolio</Typography>
            </Link>
            <Link href="#" underline="none">
                <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat , ...Styles.clrWhite}}>Contact Us</Typography>
            </Link>
        </Box>

        </Box>
        <Box>
            <Typography variant='h2' sx={{...Styles.font_18_700 , ...Styles.font_Montserrat , ...Styles.ln58 , ...Styles.clrWhite}}>Social Media</Typography>
            <Box sx={{ display: 'flex', gap: 2 , ...Styles.SocialIconsBtn}}>
                <Box sx={{...Styles.ftIconbdr}}><SocialIconButton href="https://www.linkedin.com/" icon={<LinkedInIcon />} /></Box>
                <Box sx={{...Styles.ftIconbdr}}><SocialIconButton href="https://www.facebook.com/" icon={<FacebookIcon />} /></Box>
                <Box sx={{...Styles.ftIconbdr}}><SocialIconButton href="https://www.instagram.com/" icon={<InstagramIcon />} /></Box>
                <Box sx={{...Styles.ftIconbdr}}><SocialIconButton href="https://twitter.com/" icon={<TwitterIcon />} /></Box>
            </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={{...Styles.font_16_500 , ...Styles.font_Montserrat , ...Styles.clrWhite , ...Styles.ftrBr}} mt={3} textAlign={'center'}>Copyright © 2024 Numan Arshad | Powered by Numan Arshad</Typography>
        </Box>
      
      </Container>
    </Box>
  )
}

export default footer
