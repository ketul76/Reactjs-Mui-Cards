import React from 'react';
import { Card, CardHeader, CardMedia, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Cards({cardsData}){
  return(
    <>
       <Container sx={{ width:"100%" ,minHeight:"100vh"}}>
        <Grid spacing={{ md: 10, xs: 2 }} p={2} container justifyContent="center" >
        {cardsData?.map((item) => (
        <Grid item xs="8" md="4"  >
        <Card  >
          <CardMedia
            component="img"
            height="150"
            src={item.urlToImage}
            alt="api-img"
          />
          <CardContent >
            <Typography variant='body3'><span style={{color:"rgb(45, 200, 255)",fontSize:"22px"}} > {item.source.name} </span>   {item.publishedAt}
            </Typography>
            <br />
            <Typography variant='h6'>{item.description}</Typography>
            <br/>
            <Typography variant='body3'> By  <span style={{color:"rgb(45, 200, 255)",fontSize:"22px"}} >{item.author}</span></Typography>
          </CardContent>
        </Card>
      </Grid>
        ))}
          
        </Grid>
    </Container>
    </>
  )
}

export default Cards;