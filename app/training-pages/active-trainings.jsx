import { useState, useEffect } from "react";
import { Button, Grid, Box, Select, MenuItem, Card, Typography,
    Table, TableHead, TableBody, TableCell, TableRow, Chip
 } from "@mui/material";

export const ActiveTrainings = ({setPage, trainings, employees}) => {
    const [selectedTraining, setSelectedTraining] = useState(trainings[[0]])

    const [employeeStatus, setEmployeeStatus] = useState([{name:"", training:"", inProgress:false}])

    useEffect(()=> {
        let status =[]
        let name
        let training
        let inProgress
        let position;
        employees.map((i) =>{
           // console.log(i)
            name = i.name
            training = i.trainings.filter(t => t.trainingId === selectedTraining.trainingId)[0]
            if(training){
                position = training.status
                inProgress = training.inProgress
                status = [
                    ...status,
                    {name: name, training: position, inProgress: inProgress}
                ]
            }
        })

       // console.log(status)
        setEmployeeStatus(status)
    }, [selectedTraining])

    const selectTrainingChange = (e) => {
        let training = trainings.filter(i => 
            i.name === e.target.value
        )
        
        setSelectedTraining(training[0])   
    }

const STATUS_STYLES = {
  true: { bg: "#fef3c7", text: "#92400e" },
  false: { bg: "#dcfce7", text: "#166534" }
};
 
function StatusBadge({ status, label }) {
  //const value = status ?? label;
  const colors = STATUS_STYLES[status] ?? { bg: "#e5e5e5", text: "#404040" };
 
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontWeight: 500,
        fontSize: "0.75rem",
        height: "22px",
      }}
    />
  );
}

    return(
        <div>
            Future Active Trainings Page
            <Box alignContent={"center"} justifyContent={"center"}>
            <Grid container spacing={3} sx={{alignContent:'center', justifyContent:'center'}} >
                <Grid item>
                       <Typography
                            component="h1"
                            variant="h4"
                            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                        >
                    {selectedTraining.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Select
                        value={selectedTraining.name}
                        onChange={(e) => selectTrainingChange(e)}
                    >
                        {trainings.map((i) => {
                            return(
                            <MenuItem key={i.name} value={i.name}>{i.name}</MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
            </Grid>
            <br/>
            <Grid container sx={{alignContent:'center', justifyContent:'center'}} spacing={2}>
                <Grid item>
                    <Card sx={{width:500, minWidth:500, height:500, minHeight:500}} variant = "outlined">
                        {/* description of training procedure*/ }
                         <Typography
                            component="h2"
                            variant="h5"
                            sx={{ width: '100%'}}
                        >
                    Training Details
                    </Typography>
                    {selectedTraining.description}
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="contained" sx={{width:300, minWidth:300}}>
                        {/* training progress list*/}
                        <Table>
                            <caption>Employees with orange status indicate training in progress</caption>
                            <TableHead>
                                <TableCell>Employee Name</TableCell>
                                <TableCell>Status</TableCell>
                            </TableHead>
                            <TableBody>
                                {employeeStatus.map((i) => (
                                    <TableRow key ={i.name}>
                                        <TableCell>{i.name}</TableCell>
                                        <TableCell>
                                            <StatusBadge status={i.inProgress} label={i.training} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </Grid>
            </Grid>
            <br/>
            <Button onClick = {() => setPage("Home")}>Home</Button>
            </Box>
        </div>
    )
}