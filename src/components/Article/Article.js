import React from 'react';
import './Article.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Article = ({data}) => {

    console.log(data);
    const {urlToImage,title,description,source,publishedAt} = data;

        return(
            <Card>
            <CardMedia
              component="img"
              height="180px"
              width="auto"
              image={urlToImage}
             
            />
            <CardContent>
                <div className='publisher'>
                    <p>{(new Date(publishedAt).toDateString())}</p>
                    <p>{source.name}</p>
                </div>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <Button size="small"></Button>
            </CardActions>
          </Card>
     
    );
};

export default Article;