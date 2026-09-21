import { useState } from "react";
import { Button } from "@mui/material";

export const EmployeeTrainings = ({setPage}) => {

    return(
        <div>Future Employee Trainings Page
            <Button onClick = {() => setPage("Home")}>Home</Button>
        </div>
    )
}