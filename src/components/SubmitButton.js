import { Button, Grid } from '@mui/material'



const styles = {
    root: {

    }
};

const SubmitButton = (props) => {


    return (
        <Button

            sx={{ ...styles.root }}
            variant='outlined'
            disableElevation
            disableRipple
            {...props}
        >

        </Button>


    )
}

export default SubmitButton