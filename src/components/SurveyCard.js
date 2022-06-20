import React from 'react';
import { Box, Paper } from '@mui/material';


const styles = {
    root: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        display: "flex",





    }

}
function SurveyCard(props) {


    return (
        <Box sx={{ ...styles.root }}>
            <Paper square={true} elevation={5}>
                {props.children}
            </Paper>
        </Box>
    )
}

// Export
export default SurveyCard
