import { Box, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Article from '../Article/Article';

const NewArticles = ({ articles }) => {


    return (
        <Box style={{paddingTop: '50px'}} width={{md: '90%', lg: '95%'}} sx={{margin: 'auto'}} padding={{xs: '10px', sm: '10px', md: '0px'}}>
            <Grid container rowSpacing={1} columnSpacing={{xs:4}} rowSpacing={{xs:4, sm:6, md: 5, lg: 4}}>

                {
                    articles.map(article => { 
                    return(<Grid item  xs={12} sm={12} md={4} lg={3}  style={{display: 'flex', alignItems: 'stretch'}}>
                        <Article data={article}></Article>
                    </Grid>)
                    })
                }

            </Grid>
        </Box>
    );
};

export default NewArticles;