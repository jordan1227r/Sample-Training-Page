'use client';
import React, {
    Fragment,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

// Remote Data Imports
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// Redux Imports
// import { useSelector } from 'react-redux';
// import { selectAccessToken } from '@redux/auth/authSlice.js';

// Material-UI Components
import {
    Box,
    Chip,
    IconButton,
    MenuItem,
    Tooltip,
    styled,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    Icon,
    Card,
    Grid,
    Button
} from '@mui/material';

// Pages
import { NewTrainings } from './training-pages/new-trainings';
import { ActiveTrainings } from './training-pages/active-trainings';
import { EmployeeTrainings } from './training-pages/employee-training-profiles';

const HomePage = ({setPage}) => {
    console.log("Registered")
    return(
    <div>
        Work In Progress
        <Grid container justifyContent="center" alignContent="center" >
         <Card sx={{width:'75%', alignContent:'center'}}>
            <br/>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Trainings
          </Typography>
          <br/>
          <Grid
             container
             spacing={3}
             justifyContent="center"
            >
                <Grid item size={{ xs: 12}}>
                    <Button variant='outlined' onClick={() => setPage("ActiveTrainings")}>
                        View Active Training Procedures
                    </Button>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, lg: 12 }}>
                    <Button variant='outlined' onClick={() => setPage("EmployeeTrainings")}>
                        Employee Training Profiles
                    </Button>
                </Grid>

                <Box sx={{width:'100%'}}/>
                <Grid item size={{ xs: 12 }}>
                    <Button variant = 'outlined' onClick={() => setPage("NewTraining")}>
                        Create New Training
                    </Button>
                </Grid>
          </Grid>

          </Card>
          </Grid>
    </div>
)}

export const TrainingsPage = () => {

    const employees = [
        {employeeId: 1, name: "Ozzy Robinson", title: "production", role: "Assembler", trainings: [{trainingId: 1, name:"lensing", status: "journeyman", inProgress: false}]},
        {employeeId: 2, name: "Maverick Robinson", title: "Manager", role: "Manager", trainings: [{trainingId:1, name:"lensing", status: "master", inProgress: false},
                                                                               {trainingId:2, name: "labeling", status: "master", inProgress: false},
                                                                               {trainingId:3, name: "Alignment", status: "permitted", inProgress: true}]},
        {employeeId: 3, name: "Jordan Robinson", title: "bestest in the westest", role: "Technician", trainings: [{trainingId:1, name:"lensing", status: "master", inProgress: false},
                                                                               {trainingId:2, name: "labeling", status: "trainee", inProgress: true},
                                                                               {trainingId:3, name: "Alignment", status: "permitted", inProgress: true}]}
    ]

    const trainings = [
        {trainingId: 1, name: "lensing", description: "blah ebrfkerwsc [pdjvwsdxw"},
        {trainingId: 2, name: "labeling", description: "How to properly label components"},
        {trainingId: 3, name: "Alignment", description: "Aligning components"}
    ]


    const [page, setPage] = useState("Home")


return(
    <>
        {page ==="Home" && <HomePage setPage={setPage}/>}
        {page === "ActiveTrainings" && <ActiveTrainings setPage={setPage} trainings={trainings} employees={employees}/>}
        {page === "EmployeeTrainings" && <EmployeeTrainings setPage={setPage}/>}
        {page === "NewTraining" && <NewTrainings setPage={setPage}/>}
    </>
)
}

