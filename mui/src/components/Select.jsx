import React from 'react'
import { Box, TextField, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'

const MuiSelect = () => {
    const [countries, setcountries] = useState('')
    const handleSelect = (e) => {
        const values = e.target.value
        setcountries(
            typeof values === 'string' ? values.split(',') : values
        )
    }
    return (
        <div>
            <Typography variant='h4' gutterBottom textAlign='center'>Select</Typography>
            <Box width='350px' heigh='220px'>
                <TextField
                    label='Select Country'
                    select
                    fullWidth
                    value={countries}
                    onChange={handleSelect}
                    SelectProps={{
                        multiple: true
                    }}
                >
                    <MenuItem value='In'>India</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Tr'>Turkey</MenuItem>
                    <MenuItem value='Rus'>Russia</MenuItem>
                    <MenuItem value='Eng'>UK</MenuItem>
                </TextField>
            </Box>
        </div>
    )
}

export default MuiSelect
