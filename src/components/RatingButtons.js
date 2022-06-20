import { Button, Grid, Box, makeStyles, Typography, } from '@mui/material'
import { React, useState, useEffect } from 'react'
const styles = {
    ratingButton: {
        width: '35px',
        height: '35px',
        minWidth: '10px',
        maxWidth: '35px',


    }
};
const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const RatingButtons = (props) => {
    const { onClick } = props

    useEffect(() => {

    }, [])





    const [activeButton, setActiveButton] = useState();

    const handleRate = (event) => {

        if (activeButton === event) {
            setActiveButton(null)
            onClick(null);
        } else {
            setActiveButton(event);
            onClick(event);

        }
    }
    return (
        <Grid container display='flex' spacing={0} direction='column'  >

            <Grid container wrap='nowrap' item direction='row' justifyContent='space-evenly'>
                {rating.map((rate) =>
                    <Grid item key={rate} >
                        <Button onClick={() => handleRate(rate)} variant='outlined' sx={{ ...styles.ratingButton }} style={{ backgroundColor: activeButton === rate ? 'red' : 'tomato' }}>{rate}
                        </Button>
                    </Grid>
                )}

            </Grid>
            <Grid container

                direction="row"
                justifyContent="space-between"
                alignItems="flex-start" >
                <Grid item justify='flex-start' style={{ paddingLeft: '5px' }} >
                    <Typography variant='h6' color='textPrimary' align='center' style={{ fontSize: 12, }}>
                        {'notSatisfied'}
                    </Typography>

                </Grid>
                <Grid item style={{ paddingRight: '5px' }} >
                    <Typography variant='h6' color='textPrimary' align='center' style={{ fontSize: 12 }}>
                        {'satisfied'}
                    </Typography>
                </Grid>




            </Grid>


        </Grid>
    )
}

export default RatingButtons;
