import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import noteContext from '../context/NoteContext'

export default function Radios() {
    const {radioValue, handleRadioChange} = React.useContext(noteContext)
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Card Color</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={radioValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="" control={<Radio />} label="Classic" />
        <FormControlLabel value="error.light" control={<Radio />} label="Red" />
        <FormControlLabel value="warning.light" control={<Radio />} label="Yellow" />
        <FormControlLabel value="success.light" control={<Radio />} label="Green" />
        <FormControlLabel value="primary.light" control={<Radio />} label="Blue" />
        <FormControlLabel value="secondary.light" control={<Radio />} label="Purple" />
        
      </RadioGroup>
    </FormControl>
  );
}
