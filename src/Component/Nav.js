import { Grid, TextField } from '@mui/material'
import React from 'react'
import "../CSS/nav.css"
import koboldoText from '../Media/koboldoText.png'
import { useDispatch, useSelector } from 'react-redux'
import AddDirectory from './AddDIrectory'
import { openDialog } from './slice'

function Nav() {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.dataStore);

    const handleToggle=()=>{
        dispatch(openDialog())
    }   

    return (
        <Grid container className='navContainer' direction="column" >
            {/* // dividing parent Grid in two */}
            {/* For navigation */}
            <Grid item container className='nav' height='82px'   >
                <Grid item  className='navBox' container alignItems='center' gap={11} justifyContent='center' > <img src={koboldoText} width='182px' height='54px' />

                    <Grid item  className='navItem' alignItems='center' justifyContent='center' >Menu</Grid>
                    <Grid item  className='navItem'  >location</Grid>
                    <Grid item  className='navItem'  ><input style={{ borderRadius: 6, height: '49px', width: '890px' }} /></Grid>
                    <Grid item  className='navItem'  >Responses</Grid>
                    <Grid item  className='navItem'  >Fire</Grid>
                    <Grid item  className='navItem'  >login</Grid>
                </Grid>
            </Grid>

            {/* For Adding text */}
            <Grid item className='addText' >
                ADD Supply
                <button className='btn btn-info btn-sm' onClick={handleToggle} >Open Dialog</button>
                <AddDirectory/>
                <TextField value={data.categoryName} />
                <TextField value={data.description} />
                <TextField value={data.path} />

  
            </Grid  >


        </Grid >
    )
}

export default Nav
