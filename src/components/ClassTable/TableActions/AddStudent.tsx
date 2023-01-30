import React, { useState } from 'react';
import {
  FormGroup,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

import './AddStudent.css';

const AddStudent = () => {
  const [pronoun, setPronoun] = useState(3);

  const handlePronounChange = (e: any) => {
    console.log(e);
    setPronoun(e.target.value);
  };

  return (
    <div className="add-student">
      <FormGroup>
        {/* <h3>Add Student to Class</h3> */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Preferred Name or 'Goes By'"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel>Pronoun</InputLabel>
              <Select
                id="pronoun-label-select"
                value={pronoun}
                label="Pronouns"
                variant="outlined"
                onChange={handlePronounChange}
                sx={{ width: '100%' }}
                placeholder="Pronouns"
              >
                <MenuItem value={1}>He/Him</MenuItem>
                <MenuItem value={2}>She/Her</MenuItem>
                <MenuItem value={3}>Them/They</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default AddStudent;
