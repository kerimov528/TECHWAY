import {
    Button,
    Stack,
    Typography,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material'
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import React from 'react'

const MuiButton = () => {
    const [formats, setformats] = useState([])
    const handleFormatChange = (e, updatedFormats) => {
        setformats(updatedFormats)
    }
    return (
        <div>
            <Typography variant='h3' textAlign='center' gutterBottom>Buttons</Typography>
            <Stack spacing={4}>
                <Typography variant='h5'>Type</Typography>
                <Stack spacing={2} direction='row'>
                    <Button variant='text'>text</Button>
                    <Button variant='contained'>contained</Button>
                    <Button variant='outlined'>outlined</Button>
                </Stack>
                <Typography variant='h5'>Color</Typography>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>contained</Button>
                    <Button variant='contained' color='error'>contained</Button>
                    <Button variant='contained' color='info'>contained</Button>
                    <Button variant='contained' color='inherit'>contained</Button>
                    <Button variant='contained' color='secondary'>contained</Button>
                    <Button variant='contained' color='success'>contained</Button>
                    <Button variant='contained' color='warning'>contained</Button>
                </Stack>
                <Typography variant='h5'>Size</Typography>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='error' size='small'>contained</Button>
                    <Button variant='contained' color='error' size='medium'>contained</Button>
                    <Button variant='contained' color='error' size='large'>contained</Button>
                </Stack>
                <Typography variant='h5'>With Icons</Typography>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='warning' size='small' startIcon={<SendIcon />} disableRipple>contained</Button>
                    <Button variant='contained' color='warning' size='small' endIcon={<SendIcon />} disableElevation>contained</Button>
                    <IconButton color='warning' size='small' />
                </Stack>
                <Typography variant='h5'>Button Group</Typography>
                <Stack spacing={2} direction='row'>
                    <ButtonGroup variant='contained' orientation='horizontal' color='secondary' size='medium'>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>

                <Typography variant='h5'>Toggle Button</Typography>
                <Stack spacing={2} direction='row'>
                    <ToggleButtonGroup value={formats} onChange={handleFormatChange}>
                        <ToggleButton value='bold'>
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value='italic'>
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value='underlined'>
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </div >
    )
}

export default MuiButton
