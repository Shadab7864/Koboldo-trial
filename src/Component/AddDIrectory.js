import {
  Stack,
  TextField,
  Modal,
  Grid
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, closeDialog, openDialog } from './slice';
import "../CSS/App.css"

function AddDirectory() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state)

  // Entering the data in description
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [path, setPath] = useState("");


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    heigth: '498px',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 1,
  };

  return (

    <Stack >
      <Modal
        keepMounted
        open={value.dataStore.toggleDialog}
        onClose={() => {
          dispatch(closeDialog())
        }}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Grid container sx={style} >
          <Grid item sx={{ m: 2 }} >
            <h2 id='modal-title'>Add Category</h2>
          </Grid>
          <Grid container id='keep-mounted-modal-description' style={{ border: '1px solid #F0F0F0', margin: '20px' }} >
            <TextField required type="text" label='Name' sx={{ m: 2, width: '711px' }} onChange={(val) => {
              setCategoryName(val.target.value)
            }} />
            <TextField required label='Descripation' sx={{ m: 2, width: '711px' }} onChange={(val) => {
              setDescription(val.target.value)
            }} />
            <TextField required type='text' label='Path' sx={{ m: 2, width: '711px' }} onChange={(val) => {
              setPath(val.target.value)
            }} />

          </Grid>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '207px' }}>
            <div>
              <button style={{ paddingRight: '54px', paddingLeft: '54px' }} className='btn btn-secondary btn-lg' onClick={() => {
                dispatch(closeDialog())
              }} >Cancel</button>
            </div>
            <div>
              <button style={{ paddingRight: '54px', paddingLeft: '54px' }} className='btn btn-primary btn-lg ' onClick={() => {
                dispatch(addCategory({ categoryName, description, path }))
              }} >Save</button>
            </div>
          </div>
        </Grid>

      </Modal>

    </Stack>
  )
}

export default AddDirectory
