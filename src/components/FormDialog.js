import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

const FormDialog = ({ open, handleClose }) => {
    const [age, setAge] = useState('');
    const [resume, setResume] = useState(null);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleResumeUpload = (event) => {
        setResume(event.target.files[0]);
    };

    const handleSubmit = () => {
        if (resume) {
            toast.success('Applied successfully!');
            handleClose();
        } else {
            toast.error('Please fill all fields.');
        }
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Apply Now</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Name" fullWidth />
                    <TextField margin="dense" label="Email" type="email" fullWidth />
                    <TextField margin="dense" label="Phone Number" fullWidth />
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-autowidth-label">For which position do you want to apply</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            label="For which position do you want to apply"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>UI/UX Developer</MenuItem>
                            <MenuItem value={20}>Nodejs Developer</MenuItem>
                            <MenuItem value={30}>MERN Stack Developer</MenuItem>
                            <MenuItem value={40}>Software Tester</MenuItem>
                        </Select>
                    </FormControl>
                    <input
                        accept=".pdf,.doc,.docx"
                        type="file"
                        onChange={handleResumeUpload}
                        style={{ marginTop: '16px' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleSubmit} color="primary">Apply</Button>
                </DialogActions>
            </Dialog>
            <Toaster />
        </>
    );
};

export default FormDialog;
