import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import '../../static/css/aboutus.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();
    return (
      <Box className="about-us-container">
        <Typography variant="h3" className="main-title">
          Jelajahi
        </Typography>
        <Typography variant="h5" className="subtitle">
          {t(`aboutusSlogan`)}
        </Typography>
  
        <Grid container spacing={4} className="section">
          <Grid item xs={12} md={6} className="image-container">
            <img src="/media/aboutusimage.jpg" alt="Travel Image 1" className="section-image" />
          </Grid>
          <Grid item xs={12} md={6} className="text-container">
            <Typography variant="body1" className="text-content">
                {t(`aboutusText1`)}
            </Typography>
          </Grid>
        </Grid>
  
        <Grid container spacing={4} className="section">
          <Grid item xs={12} md={6} className="text-container">
            <Typography variant="body1" className="text-content">
            {t(`aboutusText3`)}

            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="image-container">
            <img src="/media/aboutussnorkling.jpg" alt="Travel Image 2" className="section-image" />
          </Grid>
        </Grid>
  
        <Grid container spacing={4} className="section">
          <Grid item xs={12}>
            <Typography variant="body1" className="text-content">
            {t(`aboutusText2`)}

            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default AboutUs;
