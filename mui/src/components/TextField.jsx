import React from 'react'
import { Stack, Typography, TextField, InputAdornment } from '@mui/material'
// import { } from '@mui/icons-material'

const MuiTextField = () => {
    return (
        <div>
            <Typography variant='h3' gutterBottom textAlign='center'>Text Field</Typography>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <TextField label='Name' variant='outlined' placeholder='Enter a Name' />
                    <TextField label='Name' variant='filled' placeholder='Enter a Name' />
                    <TextField label='Name' variant='standard' placeholder='Enter a Name' />
                </Stack>
                <Stack spacing={2} direction='row'>
                    <TextField color='success' label='Last Name' required />
                    <TextField color='secondary' label='Last Name' helperText='Hi, Are you Ok?' />
                    <TextField color='secondary' label='Last Name' disabled />
                    <TextField label='Read Only' InputProps={{ readonly: true }} />
                </Stack>

                <Stack spacing={2} direction='row'>
                    <TextField label='Amount' InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }} />
                    <TextField label='Kilogram' InputProps={{
                        endAdornment: <InputAdornment position='end'>kq</InputAdornment>
                    }} />
                </Stack>
            </Stack>
        </div>
    )
}

export default MuiTextField
