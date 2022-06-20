import { Box, Grid, makeStyles, Typography, FormLabel, TextField } from '@mui/material'
import { React } from 'react';








const styles = {
    customBox: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
    }

}



const CustomerInput = (props) => {
    const { t, errorText, error, value, readOnly, placeholder, onChange, mask, label, disabled, fullWidth, required, state, onBlur, center, ...rest } = props;
    return (
        <div>

            <Grid container display='flex' direction='column' style={{ marginTop: '-25px' }} >


                <Box container spacing={2} sx={{ ...styles.customBox }}>


                    <FormLabel >
                        {label || ''}
                    </FormLabel>
                    <TextField
                        placeholder={placeholder || ''}
                        onChange={onChange}
                        value={value}

                        style={{ marginTop: '5px' }}

                        variant="outlined"
                        fullWidth
                        error={error}
                        helperText={error ? errorText : null}



                        InputProps={{
                            readOnly: readOnly ? true : false
                        }}

                    />


                </Box>

            </Grid>


        </div>
    )
}

export default CustomerInput

