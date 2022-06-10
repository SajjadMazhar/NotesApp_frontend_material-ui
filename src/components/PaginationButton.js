import { Button, Stack } from '@mui/material'
import React from 'react'

const PaginationButton = () => {
  return (
    <Stack direction="row" style={{display:"flex", justifyContent:"space-between"}}>
        <Button color='warning' variant="contained">Previous</Button>
        <Button color='warning' variant="contained">Next</Button>
    </Stack>
  )
}

export default PaginationButton
