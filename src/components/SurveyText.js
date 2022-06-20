import { Box, Typography } from '@mui/material'


import React from 'react'
const styles = {
    surveyText: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '460px',
        flex: 'wrap',
        textAlign: 'center'

    }
}
const SurveyText = (props) => {
    return (
        <Box container sx={{ ...styles.surveyText }}>
            <Typography variant='h6' color='textPrimary' align='center' style={{ fontSize: 14, whiteSpace: 'pre-line' }} >
                {props.question}
            </Typography>

        </Box>
    )
}

export default SurveyText
