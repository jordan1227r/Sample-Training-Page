import { useState } from "react";
import { Button, Card, Box, Typography, Grid, TextField } from "@mui/material";

export const NewTrainings = ({setPage}) => {
    const [trainingName, setTrainingName] = useState('')
    const [trainingDescription, setTrainingDescription] = useState('')
    const [traineeReqs, setTraineeReqs] = useState('')
    const [apprenticeReqs, setApprenticeReqs] = useState('')
    const [journeymanReqs, setJoureymanReqs] = useState('')
    const [permittedReqs, setPermittedReqs] = useState('')
    const [masterReqs, setMasterReqs] = useState('')

    const createNewTraining =() => {
        console.log('creating!')
        console.log(trainingName)
    }

    return(
        <div>
            <Typography
                component="h1"
                variant="h6"
                align='center'
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
                        Future Active Trainings Page
            </Typography>
            <Box sx={{justifyContent:'center', display:'flex'}}>
            <Card variant='outlined' sx={{justifyContent:'center',width:750, maxWidth:750, textAlign:'center'}}>
                <Typography variant="h6"
                align='center'>
                    Training Name
                </Typography>
                <TextField value={trainingName} onChange={(e)=>setTrainingName(e.target.value)} fullWidth/>
                <br/>
                <Typography variant="h6"
                align='center'>
                    General Description
                </Typography>
                <TextField value={trainingDescription} onChange={(e)=>setTrainingDescription(e.target.value)}
                 rows={4} multiline fullWidth/>
                <br/>
                <Typography variant="h6"
                align='center'>
                    Requirements for Trainee Status
                </Typography>
                <TextField value={traineeReqs} onChange={(e)=>setTraineeReqs(e.target.value)}
                 rows={2} multiline fullWidth/>
                <br/>
                <Typography variant="h6"
                align='center'>
                    Requirements for Apprentice Status
                </Typography>
                <TextField value={apprenticeReqs} onChange={(e)=>setApprenticeReqs(e.target.value)}
                 rows={2} multiline fullWidth/>
                <br/>
                <Typography variant="h6"
                align='center'>
                    Requirements for Journeyman Status
                </Typography>
                <TextField value={journeymanReqs} onChange={(e)=>setJoureymanReqs(e.target.value)}
                 rows={2} multiline fullWidth/>
                <br/>
                <Typography variant="h6"
                align='center'>
                    Requirements for Permitted Status
                </Typography>
                <TextField value={permittedReqs} onChange={(e)=>setPermittedReqs(e.target.value)}
                 rows={2} multiline fullWidth/>
                <br/>
                <Typography variant="h6"
                align='center'>
                    Requirements for Master Status
                </Typography>
                <TextField value={masterReqs} onChange={(e)=>setMasterReqs(e.target.value)}
                 rows={2} multiline fullWidth/>
                <br/><br/>
                <Button onClick={()=>createNewTraining()}>Submit</Button>
            </Card>
            </Box>
            <br/>
            <Grid sx={{textAlign:'center'}}>
                <Button onClick = {() => setPage("Home")} variant="outlined" >Home</Button>
            </Grid>
        </div>
    )
}