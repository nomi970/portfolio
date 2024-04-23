import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { Label, Margin, Padding } from "@mui/icons-material";
import { colors } from "@mui/material";
import { lineHeight } from "@mui/system";

export const Styles = {
    font_45_700: {
        fontSize: '45px',
        fontWeight: 700
    },
    font_Montserrat:{
        fontFamily: 'Montserrat',
    },
    font_50_700:{
        fontSize: '50px',
        fontWeight: 700
    },
    font_Cormorant:{
        fontFamily: 'Cormorant Unicase',
    },
    font_16_500:{
        fontSize: '16px',
        fontWeight: 500
    },
    font_18_700:{
        fontSize: '18px',
        fontWeight: 700
    },
    SocialIconsBtn:{
        ".css-78trlr-MuiButtonBase-root-MuiIconButton-root":{
            border: "1px solid #1976d2"
        }
    },
    Bxshadow:{
        // boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    },
    main:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        rowGap: '70px !important',
        columnGap: '20px',
        gap: '20px',
        margin: '50px 20px 0px 20px',

        '@media (max-width: 992px)': {
            gridTemplateColumns: '1fr 1fr',
            rowGap: '30px !important',
            margin: '30px 10px 0px 10px',
        },
        '@media (max-width: 500px)': {
            gridTemplateColumns: '1fr',
            rowGap: '30px !important',
            margin: '30px 10px 0px 10px',
        }
    },
    mainForm:{
        display: 'flex',
        gap:'50px',
        marginBottom: '20px',
    },
    fromTextfield:{
        width: '400px',
        Padding: '0px 10px 0px 10px !important',
        height: '50px',
        ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root":{
            fontSize: '16px !important',
            fontWeight: 500,
            fontFamily: 'Montserrat'
        },
        ".css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{
            fontSize:'16px',
            fontWeight: '600',
            fontFamily: 'Montserrat'
        },
        ".css-1wc848c-MuiFormHelperText-root.Mui-error":{
            position: 'absolute !important',
            bottom: '-27px',
            marginLeft: '0',
        }
    },
    fromTextAerafield:{
        width: '400px',
        Padding: '0px 10px 0px 10px !important',
        ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root":{
            fontSize: '16px !important',
            fontWeight: 500,
            fontFamily: 'Montserrat'
        },
        ".css-1wc848c-MuiFormHelperText-root":{
            marginLeft: '0px',
        },
        ".css-1wc848c-MuiFormHelperText-root.Mui-error":{
            position: 'absolute !important',
            bottom: '-23px',
            marginLeft: '0',
        }
    },
    max365:{
        maxWidth:'365px',
    },
    ln58:{
        lineHeight: '58px',
    },
    footerLinksMain:{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    FooterMainBx:{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        flexWrap: 'wrap',
    },
    FbgImg: {
        backgroundRepeat: 'no-repeat',
        minHeight: '350px',
        backgroundSize: '100% 100% !important',
        ".css-p3j5y1-MuiTypography-root": {
          position: 'relative',
          color: 'white',
        },
        ".css-p3j5y1-MuiTypography-root::before": {
          position: 'absolute',
          content: '""',
          width: '155px',
          height: '5px',
          left: '0',
          bottom: '0',
          background: '#3BB3C1',
          borderRadius: '2px',
        },
        ".css-p3j5y1-MuiTypography-root::after": {
          position: 'absolute',
          content: '""',
          width: '6px',
          height: '5px',
          bottom: '0px',
          background: '#FFFFFF',
          borderRadius: '50px',
          animation: 'section-title-run 5s infinite linear',
        },
      },
      AboutMain:{
        // background: '#0C0C0C',
        // padding: '50px 0px 50px 0px !important',
        ".css-p3j5y1-MuiTypography-root": {
            position: 'relative',
            color: 'black',
          },
          ".css-p3j5y1-MuiTypography-root::before": {
            position: 'absolute',
            content: '""',
            width: '220px',
            height: '5px',
            left: '0',
            bottom: '0',
            background: '#3BB3C1',
            borderRadius: '2px',
          },
          ".css-p3j5y1-MuiTypography-root::after": {
            position: 'absolute',
            content: '""',
            width: '6px',
            height: '5px',
            bottom: '0px',
            background: '#FFFFFF',
            borderRadius: '50px',
            animation: 'about_section 5s infinite linear',
          },
        //   p:{
        //     color: 'white'
        //   },
      },
      SkillsMain:{
         "..css-p3j5y1-MuiTypography-root": {
            position: 'relative',
          },
          ".css-p3j5y1-MuiTypography-root::before": {
            position: 'absolute',
            content: '""',
            width: '180px',
            height: '5px',
            left: '0',
            bottom: '0',
            background: '#3BB3C1',
            borderRadius: '2px',
          },
          ".css-p3j5y1-MuiTypography-root::after": {
            position: 'absolute',
            content: '""',
            width: '6px',
            height: '5px',
            bottom: '0px',
            background: '#FFFFFF',
            borderRadius: '50px',
            animation: 'skills_section 5s infinite linear',
          },
          h2:{
            color: 'black',
            width: 'fit-content',
            margin: '0 auto'

          },
      },
      ProjectMain:{
        ".css-rr43gj-MuiTypography-root": {
            position: 'relative',
          },
          ".css-rr43gj-MuiTypography-root::before": {
            position: 'absolute',
            content: '""',
            width: '275px',
            height: '5px',
            left: '0',
            bottom: '0',
            background: '#3BB3C1',
            borderRadius: '2px',
          },
          ".css-rr43gj-MuiTypography-root::after": {
            position: 'absolute',
            content: '""',
            width: '6px',
            height: '5px',
            bottom: '0px',
            background: '#FFFFFF',
            borderRadius: '50px',
            animation: 'project_section 5s infinite linear',
          },
          h2:{
            color: 'black',
            width: 'fit-content',
            margin: '0 auto'

          },
      },
      ContactMain:{
        ".css-ksc0ro-MuiTypography-root": {
            position: 'relative',
          },
          ".css-ksc0ro-MuiTypography-root::before": {
            position: 'absolute',
            content: '""',
            width: '255px',
            height: '5px',
            left: '0',
            bottom: '0',
            background: '#3BB3C1',
            borderRadius: '2px',
          },
          ".css-ksc0ro-MuiTypography-root::after": {
            position: 'absolute',
            content: '""',
            width: '6px',
            height: '5px',
            bottom: '0px',
            background: '#FFFFFF',
            borderRadius: '50px',
            animation: 'contact_section 5s infinite linear',
          },
          h2:{
            color: 'black',
            width: 'fit-content',
            margin: '0 auto'

          },
      }
    
};
