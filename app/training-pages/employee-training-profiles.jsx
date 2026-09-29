import { useState, useEffect } from "react";
import { Button, Typography, Table, Card,
     Grid, Box, Select, MenuItem, TableHead, 
     TableBody, TableCell, TableRow, Chip } from "@mui/material";

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

const SelectEmployee = ({employees, setEmployee, selectedEmployee, setEmployeeData}) => {
    //console.log(employees)
    const getSelectedEmployee = (e) => {
        let emp= e
        setEmployee(emp)
        let empData = employees.filter((e)=> e.employeeId === emp)[[0]]
        setEmployeeData(empData)
    }
    return(
        <Box sx={{textAlign:'center'}}>
            <Select value={selectedEmployee} onChange={(e)=> getSelectedEmployee(e.target.value)}>
                {employees.map((e) => (
                    <MenuItem key={e.employeeId} value={e.employeeId}>
                        {e.name}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}

const EmployeeTable = ({employeeData}) => {
   // console.log(employeeData)
    return(
        <div>
            <Typography
                component="h2"
                variant="h5"
                align="center"
                sx={{ width: '100%'}}
            >
                Title: {employeeData.title}
            </Typography>
            <Table sx={{ width: '75%', mx: 'auto' }}>
                <caption>Orange status indicates training in progress</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Training</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeeData.trainings.map((t) =>(
                        <TableRow key={t.trainingId}>
                            <TableCell>{t.name}</TableCell>
                            <TableCell>
                                <StatusBadge status={t.inProgress} label={t.status} />
                            </TableCell>
                            <TableCell>{t.notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
export const EmployeeTrainings = ({setPage, employees}) => {
    const [page, setEmpPage] = useState('select')
    const [selectedEmployee, setSelectedEmployee] = useState('')
    const [employeeData, setEmployeeData] = useState([])

    // useEffect(()=> {
    //     let selectedData = 
    // }, [selectedEmployee])
   // console.log(employees)
    return(
        <div>
            <Typography align="center">
            Future Employee Trainings Page
            </Typography>
            <Grid container 
                    sx={{justifyContent:'center', alignContent:'center',
                         textAlign:'center', width:750,
        mx: 'auto'}} 
                    spacing ={2}>
                <Grid item>
                    <SelectEmployee employees={employees} 
                        setEmployee={setSelectedEmployee}
                        selectedEmployee={selectedEmployee}
                        setEmployeeData={setEmployeeData}
                    />
                </Grid>
                <Grid item sx={{ width: '100%',  mx: 'auto' }}>
                {selectedEmployee !== '' && <EmployeeTable 
                    selectedEmployee={selectedEmployee} employeeData={employeeData}/>}
                </Grid>
            </Grid>
            <Grid sx={{textAlign:'center'}}>
            <Button onClick = {() => setPage("Home")}>Home</Button>
            </Grid>
        </div>
    )
}