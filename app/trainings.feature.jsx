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
    
    return(
    <div >
        <Typography
            component="h1"
            variant="h4"
            align='center'
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Work In Progress
          </Typography>
        <br/>
        <Grid container sx={{  justifyContent: 'center', alignContent:'center' }} >
         <Card  sx={{
                    width: '75%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
        >
            <br/>
          <Typography
            component="h1"
            variant="h4"
            align='center'
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Trainings
          </Typography>
          <br/>
          <Grid
             container
             spacing={1}
             sx={{  justifyContent: 'center', alignContent:'center' }}
            >
                <Grid item size={{ xs: 6}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='outlined' onClick={() => setPage("ActiveTrainings")}>
                        View Active Training Procedures
                    </Button>
                </Grid>
                <Grid item size={{ xs: 6, sm: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='outlined' onClick={() => setPage("EmployeeTrainings")}>
                        Employee Training Profiles
                    </Button>
                </Grid>

                <Box sx={{width:'100%',justifyContent: 'center', alignItems:'center'}}/>
                <Grid item size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
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
        {trainingId: 1, name: "lensing", description: 'LENSING\n' + 'Learn to prepare, inspect, and install lenses to specification while keeping the work area clean and the parts damage-free.\n\n' +
                                        '──────────────\n' + 'TRAINEE\n' +
                                        'Process: Shadow a certified operator through setup, handling, and cleaning. Practice basic lens handling on scrap or practice units only.\n' +
                                        'Keys to pass:\n' + '  • Handle lenses correctly with no contact on optical surfaces\n' +
                                        '  • Identify lens types and part numbers\n' +
                                        '  • Complete safety and cleanliness orientation\n\n' +
                                        'APPRENTICE\n' + 'Process: Perform lensing steps under direct supervision on live units. All work is inspected by a trainer.\n' +
                                        'Keys to pass:\n' + '  • Complete [X] units with no critical defects\n' +
                                        '  • Follow the work instruction without prompting\n' +
                                        '  • Recognize and report common defects (scratches, debris, misseating)\n\n' +
                                        'JOURNEYMAN\n' + 'Process: Work independently with periodic spot checks. Begin building speed toward the standard rate.\n' +
                                        'Keys to pass:\n' + '  • Reach [X]% of standard rate at [X]% or better first-pass quality\n' +
                                        '  • Correct minor issues without escalation\n' +
                                        '  • Maintain accurate records and notes\n\n' +
                                        'PERMITTED\n' + 'Process: Fully approved to run lensing without supervision. Performance is monitored through routine audits.\n' +
                                        'Keys to pass:\n' + '  • Sustain the standard rate and quality target for [X] consecutive weeks\n' +
                                        '  • Pass a formal audit or observation\n' +
                                        '  • Demonstrate sound judgment on out-of-spec conditions\n\n' +
                                        'MASTER\n' + 'Process: Serve as a process expert who trains others, troubleshoots root causes, and helps improve the work instruction.\n' +
                                        'Keys to pass:\n' + '  • Successfully train and sign off at least [X] trainees\n' +
                                        '  • Lead or contribute to a process improvement\n' +
                                        '  • Troubleshoot and resolve complex defects independently'
    },
        {trainingId: 2, name: "labeling", description:
                                        'LABELING\n' +'Learn to apply the correct label to the correct unit, in the correct position, with complete traceability.\n\n' +
                                        '──────────────\n' +'TRAINEE\n' +
                                        'Process: Observe the labeling workflow and learn label types, content, and placement requirements. Practice on scrap units only.\n' +
                                        'Keys to pass:\n' +'  • Identify every label type and where it belongs\n' +
                                        '  • Read and verify label content against the work order\n' +
                                        '  • Complete quality and traceability orientation\n\n' +
                                        'APPRENTICE\n' + 'Process: Apply labels on live units under direct supervision, with every unit verified by a trainer.\n' +
                                        'Keys to pass:\n' + '  • Complete [X] units with zero wrong-label or missing-label errors\n' +
                                        '  • Place labels within position tolerance\n' +
                                        '  • Correctly log lot and serial information\n\n' +
                                        'JOURNEYMAN\n' + 'Process: Label independently with spot checks while building speed and consistency.\n' +
                                        'Keys to pass:\n' + '  • Reach [X]% of standard rate at [X]% or better first-pass quality\n' +
                                        '  • Catch and correct mismatches before the unit moves on\n' +
                                        '  • Handle label changeovers correctly\n\n' +
                                        'PERMITTED\n' + 'Process: Approved to run labeling without supervision, with routine audits of accuracy and records.\n' +
                                        'Keys to pass:\n' + '  • Sustain the rate and a zero-mislabel record for [X] consecutive weeks\n' +
                                        '  • Pass a formal audit of labeling and traceability records\n' +
                                        '  • Know the correct response to a labeling nonconformance\n\n' +
                                        'MASTER\n' + 'Process: Serve as the labeling expert who trains others, manages changeover and label stock controls, and improves the process.\n' +
                                        'Keys to pass:\n' + '  • Train and sign off at least [X] trainees\n' +
                                        '  • Lead or contribute to a labeling process improvement\n' +
                                        '  • Investigate and resolve labeling errors at the root cause'
    },
        {trainingId: 3, name: "Alignment",  description: 'ALIGNMENT\n' + 'Learn to position, adjust, and verify components to specification using the required tools and measurements.\n\n' +
                                        '──────────────\n' + 'TRAINEE\n' + 'Process: Shadow a certified operator and learn the alignment tools, reference points, and measurement methods. Practice on non-production units only.\n' +
                                        'Keys to pass:\n' + '  • Identify alignment tools and reference points\n' +
                                        '  • Read and record measurements accurately\n' + '  • Complete safety and equipment orientation\n\n' +
                                        'APPRENTICE\n' + 'Process: Perform alignments on live units under direct supervision, with every result checked by a trainer.\n' +
                                        'Keys to pass:\n' +'  • Complete [X] units within tolerance\n' +
                                        '  • Follow each adjustment step in the correct sequence\n' +
                                        '  • Recognize when a unit is out of tolerance and stop to ask\n\n' +
                                        'JOURNEYMAN\n' +'Process: Align independently with periodic verification while building speed and repeatability.\n' +
                                        'Keys to pass:\n' + '  • Reach [X]% of standard rate at [X]% or better first-pass yield\n' +
                                        '  • Achieve repeatable results across units and shifts\n' +
                                        '  • Diagnose and fix common misalignment causes\n\n' +
                                        'PERMITTED\n' +'Process: Approved to run alignment without supervision, with routine audits of results and measurement records.\n' +
                                        'Keys to pass:\n' + '  • Sustain the rate and yield target for [X] consecutive weeks\n' +
                                        '  • Pass a formal observation and measurement audit\n' +
                                        '  • Know when and how to escalate equipment or tolerance issues\n\n' +
                                        'MASTER\n' + 'Process: Serve as the alignment expert who trains others, troubleshoots equipment and process drift, and improves the method.\n' +
                                        'Keys to pass:\n' +'  • Train and sign off at least [X] trainees\n' +
                                        '  • Lead or contribute to an alignment improvement or equipment fix\n' +
                                        '  • Resolve complex, recurring alignment problems at the root cause'
                                    }
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

