import React, { useState } from 'react'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    button: {
        height: '50px',
        width: '80px',
    }

})

function Lander() {
    const classes = useStyle()
    //const [coinList, setCoinList] = useState([])

    const back = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className={classes.main1}>
            {/* <Brightness1Icon style={{ color: 'red', fontSize: '100px' }} /> */}

            <button className={classes.button} onClick={back}>Quit</button>
        </div>
    )
}

export default Lander
