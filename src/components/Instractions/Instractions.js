import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './Instractions.css';

const Instractions = () => {


    const instractionItems = [
        {title: 'Latest News', command: 'Give me the latest news', color: '#00838F'},
        {title: 'News by Categories', command: 'Give me the latest Technology news',sourceName: 'Categories', sources: 'Business, Entertainment, General, Health, Science, Sports, Technology', color: '#2065B3'},
        {title: 'News by Terms', command: "What's up with PlayStation 5",sourceName: 'Terms', sources: 'Donald Trump, BitCoin, PlayStation 5, Smartphones', color: '#4527A0'},
        {title: 'News by Sources', command: 'Give me the news from CNN',sourceName: 'Sources', sources: 'ABC News, Wired, BBC, Time, IGN, Buzzfeed, CNN', color: '#283593'},
    ]





    return (
        <Box className='ins-box'>
            <div container className='ins-container'>

                {
                    instractionItems.map(item => { 
                    return(<div className='ins-item' style={{background: `${item.color}`}}>
                        <Typography variant='h5'><strong>{item.title}</strong></Typography>
                        
                        <Typography variant='h6'>
                            <strong>{item.sourceName}</strong><br/>
                            {item.sources}</Typography>
                        <Typography variant='h6'>
                            <strong>Try saying:</strong> <br/>
                            {item.command}
                        </Typography>
                       
                    </div>)
                    })
                }

            </div>
        </Box>
    );
};

export default Instractions;